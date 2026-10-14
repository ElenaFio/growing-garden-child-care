import { useState, useEffect, useMemo } from "react";
import { Check, Mail, MessageCircle, Phone, ChevronDown, MapPin, ExternalLink } from "lucide-react";
import { fieldClass, ZigzagAccent, SparkleAccent, SectionWave } from "@/components/page-elements";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { useLanguage } from "@/lib/i18n";
import { francisca } from "@/assets/images";
import { useRouter } from "@/lib/router";

type ContactTab = "program" | "tour";

const saturdayTimeSlots = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
];

function getUpcomingSaturdays(count = 5) {
  const saturdays: { value: string; labelEn: string; labelEs: string }[] = [];
  const d = new Date();
  
  // Find next Saturday (day 6)
  const currentDay = d.getDay();
  let daysUntilSaturday = (6 - currentDay + 7) % 7;
  // If today is Saturday after 1:00 PM, move to next Saturday
  if (daysUntilSaturday === 0 && d.getHours() >= 13) {
    daysUntilSaturday = 7;
  }

  for (let i = 0; i < count; i++) {
    const satDate = new Date(d);
    satDate.setDate(d.getDate() + daysUntilSaturday + i * 7);

    const monthNamesEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthNamesEs = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

    const monthEn = monthNamesEn[satDate.getMonth()];
    const monthEs = monthNamesEs[satDate.getMonth()];
    const day = satDate.getDate();

    const labelEn = `Saturday, ${monthEn} ${day}`;
    const labelEs = `Sábado, ${day} de ${monthEs}`;

    saturdays.push({
      value: `Saturday, ${monthEn} ${day}, ${satDate.getFullYear()}`,
      labelEn,
      labelEs,
    });
  }
  return saturdays;
}

export function ContactPage() {
  const { t, lang } = useLanguage();
  const { path } = useRouter();
  
  // Soporte de query params directos (?tab=tour o ?intent=visit) y rutas de agendamiento
  const getInitialTab = (): ContactTab => {
    if (typeof window !== "undefined") {
      const search = window.location.search || (path.includes("?") ? path.substring(path.indexOf("?")) : "");
      const params = new URLSearchParams(search);
      const tabParam = params.get("tab") || params.get("intent");
      const isTour =
        tabParam === "tour" ||
        tabParam === "visit" ||
        tabParam === "openhouse" ||
        path.startsWith("/schedule-tour") ||
        path.startsWith("/tour-admissions") ||
        window.location.hash === "#tour" ||
        window.location.hash === "#tour-form";
      if (isTour) {
        return "tour";
      }
    }
    return "program";
  };

  const getInitialProgram = (): string => {
    if (typeof window !== "undefined") {
      const search = window.location.search || (path.includes("?") ? path.substring(path.indexOf("?")) : "");
      const params = new URLSearchParams(search);
      const programParam = params.get("program") || params.get("service");
      if (programParam) {
        const p = programParam.toLowerCase();
        if (p.includes("full") || p === "full-time" || p === "fulltime") return "full-time";
        if (p.includes("part") || p === "part-time" || p === "parttime") return "part-time";
        if (p.includes("drop") || p === "drop-in" || p === "flexible" || p === "hourly") return "drop-in";
        if (p.includes("night") || p === "night-care" || p.includes("date")) return "night-care";
        if (p.includes("sat") || p.includes("workshop") || p === "saturday-workshop" || p.includes("art")) return "saturday-workshop";
      }
    }
    return "full-time";
  };

  const [activeTab, setActiveTab] = useState<ContactTab>(getInitialTab);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Form states
  const [programForm, setProgramForm] = useState({
    name: "",
    phone: "",
    email: "",
    program: getInitialProgram(),
    message: "",
  });

  // Escuchar si la ruta cambia con query params y hacer foco en el formulario
  useEffect(() => {
    if (typeof window !== "undefined") {
      const search = window.location.search || (path.includes("?") ? path.substring(path.indexOf("?")) : "");
      const params = new URLSearchParams(search);
      const tabParam = params.get("tab") || params.get("intent");
      const programParam = params.get("program") || params.get("service");
      const isTour =
        tabParam === "tour" ||
        tabParam === "visit" ||
        tabParam === "openhouse" ||
        path.startsWith("/schedule-tour") ||
        path.startsWith("/tour-admissions") ||
        window.location.hash === "#tour" ||
        window.location.hash === "#tour-form";

      if (isTour) {
        setActiveTab("tour");
        const timer = setTimeout(() => {
          const formElement = document.getElementById("tour-form") || document.getElementById("inquire");
          if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          const firstField = document.getElementById("tour-parent-name") || document.getElementById("tour-saturday-date");
          if (firstField) {
            (firstField as HTMLElement).focus({ preventScroll: true });
          }
        }, 150);
        return () => clearTimeout(timer);
      } else if (tabParam === "program" || tabParam === "inquire" || programParam || window.location.hash === "#inquire" || window.location.hash === "#inquire-form") {
        setActiveTab("program");
        if (programParam) {
          const p = programParam.toLowerCase();
          let matchedProgram = "full-time";
          if (p.includes("full") || p === "full-time" || p === "fulltime") matchedProgram = "full-time";
          else if (p.includes("part") || p === "part-time" || p === "parttime") matchedProgram = "part-time";
          else if (p.includes("drop") || p === "drop-in" || p === "flexible" || p === "hourly") matchedProgram = "drop-in";
          else if (p.includes("night") || p === "night-care" || p.includes("date")) matchedProgram = "night-care";
          else if (p.includes("sat") || p.includes("workshop") || p === "saturday-workshop" || p.includes("art")) matchedProgram = "saturday-workshop";
          
          setProgramForm((prev) => ({
            ...prev,
            program: matchedProgram,
          }));
        }

        const timer = setTimeout(() => {
          const formElement = document.getElementById("inquire-form") || document.getElementById("inquire");
          if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [path]);

  const upcomingSaturdays = useMemo(() => getUpcomingSaturdays(5), []);

  const [tourForm, setTourForm] = useState(() => {
    const sats = getUpcomingSaturdays(5);
    return {
      parentName: "",
      phone: "",
      email: "",
      saturdayDate: sats[0]?.value || "",
      estimatedTime: "10:00 AM",
      childAge: "",
    };
  });

  const updateProgram = (k: string, v: string) => setProgramForm((p) => ({ ...p, [k]: v }));
  const updateTour = (k: string, v: string) => setTourForm((p) => ({ ...p, [k]: v }));

  const programOptions = [
    {
      value: "full-time",
      label: lang === "es" ? "Tiempo Completo (6:00 AM – 3:00 PM)" : "Full-Time Care (6:00 AM – 3:00 PM)",
    },
    {
      value: "part-time",
      label: lang === "es" ? "Medio Tiempo (Turno Mañana • 4–5 hrs)" : "Part-Time Care (Morning Shift • 4–5 hrs)",
    },
    {
      value: "drop-in",
      label: lang === "es" ? "Cuidado Ocasional / Drop-In (Desde $20/hr)" : "Drop-In & Hourly Care (From $20/hr)",
    },
    {
      value: "night-care",
      label: lang === "es" ? "Cuidado Nocturno & Date Night (5:00 PM – 11:00 PM)" : "Night & Date Night Care (5:00 PM – 11:00 PM)",
    },
    {
      value: "saturday-workshop",
      label: lang === "es" ? "Taller de Sábados: Arte + Yoga (Mañana / Tarde)" : "Saturday Workshop: Art + Yoga (Morning / Afternoon)",
    },
  ];

  const getProgramPlaceholder = (programValue: string, currentLang: string): string => {
    switch (programValue) {
      case "full-time":
        return currentLang === "es"
          ? "Indica si necesitas semana completa (5 días) o días específicos por semana, fecha tentativa de inicio y la edad de tu peque..."
          : "Specify if you need full week (5 days) or specific days per week, tentative start date and child's age...";
      case "part-time":
        return currentLang === "es"
          ? "Indica tu horario preferido (ej. 8:00 AM a 12:30 PM), qué días de la semana y la edad de tu peque..."
          : "Specify your preferred hours (e.g. 8:00 AM to 12:30 PM), which days of the week and child's age...";
      case "drop-in":
        return currentLang === "es"
          ? "Indica si necesitas por horas, medio día o día completo, la fecha estimada y la edad de tu peque..."
          : "Specify if you need hourly, half day or full day care, estimated date and child's age...";
      case "night-care":
        return currentLang === "es"
          ? "Indica si es para una noche puntual (Date Night) o rutina semanal, fecha estimada y la edad de tu peque..."
          : "Specify if you need a specific date (Date Night) or weekly routine, estimated date and child's age...";
      case "saturday-workshop":
        return currentLang === "es"
          ? "Indica si prefieres turno Mañana (9:00 AM – 12:00 PM) o Tarde (2:00 PM – 5:00 PM) y la edad de tu peque..."
          : "Specify if you prefer Morning (9:00 AM – 12:00 PM) or Afternoon (2:00 PM – 5:00 PM) and child's age...";
      default:
        return currentLang === "es"
          ? "¿Qué días u horario necesitas? (ej. Lunes a viernes completo, solo mañanas, o una fecha puntual para Date Night)..."
          : "What schedule or days do you need? (e.g. Mon-Fri full day, morning shifts only, or a specific date for Date Night)...";
    }
  };

  return (
    <>
      <PageHeroBanner
        variant="minimal"
        title={lang === "es" ? "Contáctanos" : "Contact Us"}
      />

      {/* SECCIÓN PRINCIPAL: CONSULTAS, AGENDAMIENTO Y CANALES DIRECTOS (FONDO BLANCO) */}
      <section id="inquire" className="bg-white pt-16 md:pt-24 pb-0 overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-12">
            {/* Tarjeta 1: WhatsApp */}
            <a
              href="https://wa.me/13412583149"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-3xl border border-stone-200/80 bg-[#F7FAF7] p-5 shadow-xs hover:shadow-md hover:border-[#0F8B44]/50 hover:-translate-y-0.5 transition-all group cursor-pointer"
            >
              <div className="grid size-13 shrink-0 place-items-center rounded-2xl bg-[#0F8B44]/15 text-[#0F8B44] group-hover:scale-110 transition-transform">
                <MessageCircle className="size-6" />
              </div>
              <div className="min-w-0">
                <p className="font-extrabold text-[#0F8B44] text-base group-hover:underline">
                  WhatsApp
                </p>
                <p className="text-xs text-[#46554D] font-medium leading-snug mt-0.5">
                  {lang === "es" ? "Chat directo con Francisca" : "Direct chat with Francisca"}
                </p>
              </div>
            </a>

            {/* Tarjeta 2: Call / Teléfono */}
            <a
              href="tel:+13412583149"
              className="flex items-center gap-4 rounded-3xl border border-stone-200/80 bg-[#F7FAF7] p-5 shadow-xs hover:shadow-md hover:border-[#F38200]/50 hover:-translate-y-0.5 transition-all group cursor-pointer"
            >
              <div className="grid size-13 shrink-0 place-items-center rounded-2xl bg-[#F38200]/15 text-[#F38200] group-hover:scale-110 transition-transform">
                <Phone className="size-6" />
              </div>
              <div className="min-w-0">
                <p className="font-extrabold text-[#F38200] text-sm group-hover:underline">
                  {lang === "es" ? "Llámanos" : "Call Us"}
                </p>
                <p className="font-black text-base text-[#1C2B22] tracking-tight leading-tight">
                  (341) 258-3149
                </p>
                <p className="text-xs text-[#46554D] font-medium leading-snug mt-0.5">
                  {lang === "es" ? "Atención directa con Francisca" : "Direct phone call"}
                </p>
              </div>
            </a>

            {/* Tarjeta 3: Correo electrónico */}
            <a
              href="mailto:gardenchildcaregrowing@gmail.com"
              className="flex items-center gap-4 rounded-3xl border border-stone-200/80 bg-[#F7FAF7] p-5 shadow-xs hover:shadow-md hover:border-[#19B2E6]/50 hover:-translate-y-0.5 transition-all group cursor-pointer"
            >
              <div className="grid size-13 shrink-0 place-items-center rounded-2xl bg-[#19B2E6]/15 text-[#19B2E6] group-hover:scale-110 transition-transform">
                <Mail className="size-6" />
              </div>
              <div className="min-w-0">
                <p className="font-extrabold text-[#19B2E6] text-sm group-hover:underline">
                  {lang === "es" ? "Correo electrónico" : "Email Us"}
                </p>
                <p className="font-black text-xs sm:text-sm text-[#1C2B22] truncate leading-tight">
                  gardenchildcaregrowing@gmail.com
                </p>
                <p className="text-xs text-[#46554D] font-medium leading-snug mt-0.5">
                  {lang === "es" ? "Escríbenos tu consulta" : "Send a detailed inquiry"}
                </p>
              </div>
            </a>
          </div>

          {/* Tarjeta de Formulario de Dos Columnas */}
          <div className="bg-[#F7FAF7] border border-stone-200/80 rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA (lg:col-span-5 relative) */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[440px] sm:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-xs border-2 border-[#E2F0D9] bg-stone-100">
              <img
                src={francisca}
                alt={lang === "es" ? "Francisca en Growing Garden Child Care" : "Francisca at Growing Garden Child Care"}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* COLUMNA DERECHA (lg:col-span-7 flex flex-col justify-center) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Selector superior de pestañas (Tabs) */}
            <div className="inline-flex p-1.5 bg-stone-100 rounded-full mb-6 w-full sm:w-fit border border-stone-200/70">
              <button
                type="button"
                onClick={() => {
                  setActiveTab("program");
                  setSubmitted(false);
                }}
                className={`flex-1 sm:flex-none px-5 py-2.5 rounded-full text-xs font-black tracking-tight transition-all cursor-pointer flex items-center justify-center ${
                  activeTab === "program"
                    ? "bg-[#1C2B22] text-white shadow-xs"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-200/50"
                }`}
              >
                <span>{lang === "es" ? "Consultar Programas" : "Inquire About Programs"}</span>
              </button>
              
              <button
                type="button"
                onClick={() => {
                  setActiveTab("tour");
                  setSubmitted(false);
                }}
                className={`flex-1 sm:flex-none px-5 py-2.5 rounded-full text-xs font-black tracking-tight transition-all cursor-pointer flex items-center justify-center ${
                  activeTab === "tour"
                    ? "bg-[#F24E86] text-white shadow-xs"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-200/50"
                }`}
              >
                <span>{lang === "es" ? "Agendar Visita" : "Schedule a Visit"}</span>
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center bg-[#F4FAF6] rounded-2xl p-6 border border-[#D3ECD9]">
                <div className="mx-auto size-14 rounded-full bg-[#0F8B44] text-white flex items-center justify-center mb-4 shadow-sm">
                  <Check className="size-7" />
                </div>
                <h3 className="text-2xl font-black text-[#0F8B44] mb-2">
                  {activeTab === "program"
                    ? lang === "es"
                      ? "¡Consulta enviada con éxito!"
                      : "Inquiry Sent Successfully!"
                    : lang === "es"
                    ? "¡Visita del Sábado Registrada!"
                    : "Saturday Tour Request Received!"}
                </h3>
                <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed mb-6">
                  {activeTab === "program"
                    ? lang === "es"
                      ? "Gracias por tu interés en Growing Garden. Francisca se comunicará contigo directamente por WhatsApp o teléfono a la brevedad."
                      : "Thank you for your interest in Growing Garden. Francisca will reach out to you directly via WhatsApp or phone shortly."
                    : lang === "es"
                    ? `¡Gracias ${tourForm.parentName ? tourForm.parentName : "por contactarnos"}! Francisca se comunicará contigo al ${tourForm.phone || "tu teléfono"} para confirmar tu visita del sábado y compartirte la dirección exacta del hogar.`
                    : `Thank you ${tourForm.parentName ? tourForm.parentName : "for reaching out"}! Francisca will reach out to you at ${tourForm.phone || "your phone"} to confirm your Saturday visit and share our exact home address.`}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                  }}
                  className="font-bold text-xs uppercase tracking-wider text-[#0F8B44] hover:underline cursor-pointer"
                >
                  {lang === "es" ? "Enviar otra solicitud" : "Send another request"}
                </button>
              </div>
            ) : activeTab === "program" ? (
              /* TAB 1: CONSULTAR PROGRAMA / TARIFAS */
              <form
                id="inquire-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4 text-left scroll-mt-28"
              >
                {/* Campo Nombre completo */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {lang === "es" ? "Nombre completo *" : "Full Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={programForm.name}
                    onChange={(e) => updateProgram("name", e.target.value)}
                    className={fieldClass}
                    placeholder={lang === "es" ? "Tu nombre y apellido" : "Your full name"}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Campo Teléfono / WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {lang === "es" ? "Teléfono / WhatsApp *" : "Phone / WhatsApp *"}
                    </label>
                    <input
                      type="tel"
                      required
                      value={programForm.phone}
                      onChange={(e) => updateProgram("phone", e.target.value)}
                      className={fieldClass}
                      placeholder="(341) 258-3149"
                    />
                  </div>

                  {/* Campo Correo electrónico */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {lang === "es" ? "Correo electrónico *" : "Email Address *"}
                    </label>
                    <input
                      type="email"
                      required
                      value={programForm.email}
                      onChange={(e) => updateProgram("email", e.target.value)}
                      className={fieldClass}
                      placeholder="parent@example.com"
                    />
                  </div>
                </div>

                {/* Selector 1: Selecciona un programa * */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {lang === "es" ? "Selecciona un programa *" : "Select a Program *"}
                  </label>
                  <select
                    value={programForm.program}
                    onChange={(e) => updateProgram("program", e.target.value)}
                    className={fieldClass}
                  >
                    {programOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Campo 4: Horario, frecuencia o mensaje * */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {lang === "es"
                      ? "Horario, frecuencia o mensaje *"
                      : "Schedule, frequency or message *"}
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={programForm.message}
                    onChange={(e) => updateProgram("message", e.target.value)}
                    className={fieldClass}
                    placeholder={getProgramPlaceholder(programForm.program, lang)}
                  />
                </div>

                {/* Botón de envío Verde (#0F8B44) */}
                <div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto font-black text-sm text-white bg-[#0F8B44] hover:bg-[#0b6b34] px-8 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all mt-2 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>{lang === "es" ? "Enviar Consulta a Francisca" : "Send Inquiry to Francisca"}</span>
                    <span>→</span>
                  </button>
                </div>

                {/* Recordatorio obligatorio de vacunación */}
                <div className="p-3 rounded-xl bg-[#F0FAF2] border border-[#CDEED5] text-stone-700 text-xs flex items-center gap-2 mt-3">
                  <span className="text-base shrink-0">📋</span>
                  <span className="font-semibold">
                    {lang === "es"
                      ? "Recordatorio: Todos los servicios y visitas requieren esquema de vacunación al día."
                      : "Reminder: All services and tours require an up-to-date vaccination record."}
                  </span>
                </div>

                {/* Nota de privacidad al pie del formulario */}
                <p className="text-stone-400 text-xs mt-2">
                  {lang === "es"
                    ? "🔒 Respetamos tu privacidad. Francisca responderá directamente por teléfono o WhatsApp para orientarte."
                    : "🔒 We respect your privacy. Francisca replies directly by phone or WhatsApp to guide you."}
                </p>
              </form>
            ) : (
              /* TAB 2: SOLICITAR VISITA / OPEN HOUSE */
              <form
                id="tour-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4 text-left scroll-mt-28"
              >
                {/* Fila 1 (ancho completo): Parent / Guardian Name */}
                <div>
                  <label htmlFor="tour-parent-name" className="block text-xs font-bold text-stone-700 mb-1">
                    {lang === "es" ? "Nombre del padre o tutor *" : "Parent / Guardian Name *"}
                  </label>
                  <input
                    id="tour-parent-name"
                    type="text"
                    required
                    value={tourForm.parentName}
                    onChange={(e) => updateTour("parentName", e.target.value)}
                    className={fieldClass}
                    placeholder={lang === "es" ? "Tu nombre completo" : "Your full name"}
                  />
                </div>

                {/* Fila 2 (2 columnas): Phone / WhatsApp + Email Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="tour-phone" className="block text-xs font-bold text-stone-700 mb-1">
                      {lang === "es" ? "Teléfono / WhatsApp *" : "Phone / WhatsApp *"}
                    </label>
                    <input
                      id="tour-phone"
                      type="tel"
                      required
                      value={tourForm.phone}
                      onChange={(e) => updateTour("phone", e.target.value)}
                      className={fieldClass}
                      placeholder="(341) 258-3149"
                    />
                  </div>

                  <div>
                    <label htmlFor="tour-email" className="block text-xs font-bold text-stone-700 mb-1">
                      {lang === "es" ? "Correo electrónico *" : "Email Address *"}
                    </label>
                    <input
                      id="tour-email"
                      type="email"
                      required
                      value={tourForm.email}
                      onChange={(e) => updateTour("email", e.target.value)}
                      className={fieldClass}
                      placeholder="parent@example.com"
                    />
                  </div>
                </div>

                {/* Fila 3 (2 columnas): Saturday Date + Estimated Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="tour-saturday-date" className="block text-xs font-bold text-stone-700 mb-1">
                      {lang === "es" ? "Fecha del Sábado *" : "Saturday Date *"}
                    </label>
                    <select
                      id="tour-saturday-date"
                      required
                      value={tourForm.saturdayDate}
                      onChange={(e) => updateTour("saturdayDate", e.target.value)}
                      className={fieldClass}
                    >
                      {upcomingSaturdays.map((sat) => (
                        <option key={sat.value} value={sat.value}>
                          {lang === "es" ? sat.labelEs : sat.labelEn}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="tour-estimated-time" className="block text-xs font-bold text-stone-700 mb-1">
                      {lang === "es" ? "Horario estimado (10 AM – 1 PM) *" : "Estimated Time (10:00 AM – 1:00 PM) *"}
                    </label>
                    <select
                      id="tour-estimated-time"
                      required
                      value={tourForm.estimatedTime}
                      onChange={(e) => updateTour("estimatedTime", e.target.value)}
                      className={fieldClass}
                    >
                      {saturdayTimeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Fila 4 (ancho completo): Child's Age (1 to 13 years) */}
                <div>
                  <label htmlFor="tour-child-age" className="block text-xs font-bold text-stone-700 mb-1">
                    {lang === "es" ? "Edad de tu pequeño (de 1 a 13 años) *" : "Child's Age (1 to 13 years) *"}
                  </label>
                  <input
                    id="tour-child-age"
                    type="text"
                    required
                    value={tourForm.childAge}
                    onChange={(e) => updateTour("childAge", e.target.value)}
                    className={fieldClass}
                    placeholder={lang === "es" ? "ej. 2 años y medio, 4 años" : "e.g. 2 years old, 4 years old"}
                  />
                </div>

                {/* Botón CTA Rosa (#F24E86) */}
                <div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto font-black text-sm text-white bg-[#F24E86] hover:bg-[#d93870] px-8 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all mt-2 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>{lang === "es" ? "Confirmar mi Visita del Sábado →" : "Confirm My Saturday Tour →"}</span>
                  </button>
                </div>

                {/* Recordatorio obligatorio de vacunación */}
                <div className="p-3 rounded-xl bg-[#F0FAF2] border border-[#CDEED5] text-stone-700 text-xs flex items-center gap-2 mt-3">
                  <span className="text-base shrink-0">📋</span>
                  <span className="font-semibold">
                    {lang === "es"
                      ? "Recordatorio: Todos los servicios y visitas requieren esquema de vacunación al día."
                      : "Reminder: All services and tours require an up-to-date vaccination record."}
                  </span>
                </div>

                {/* Nota de seguridad y dirección al pie */}
                <p className="text-stone-500 text-xs mt-2 flex items-center gap-1.5">
                  <span>📍</span>
                  <span>
                    {lang === "es"
                      ? "190 Goodrich St., Hayward, CA 94544. Francisca te contactará al teléfono indicado para coordinar tu llegada."
                      : "190 Goodrich St., Hayward, CA 94544. Francisca will contact you at your phone number to coordinate your arrival."}
                  </span>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Onda curva inferior hacia el fondo suave de Ubicación */}
      <SectionWave fill="#F7FAF7" />
    </section>

      {/* SECCIÓN: UBICACIÓN Y VISITAS (FONDO SUAVE #F7FAF7) */}
      <section className="bg-[#F7FAF7] pt-16 md:pt-24 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          <div className="w-full bg-white border border-gray-100 rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* COLUMNA IZQUIERDA: Información y Accesibilidad */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <div className="size-10 rounded-2xl bg-[#0F8B44]/15 text-[#0F8B44] flex items-center justify-center shrink-0">
                    <MapPin className="size-5" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#0F8B44]">
                    {lang === "es" ? "UBICACIÓN Y VISITAS ✦" : "LOCATION & ACCESSIBILITY ✦"}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1C2B22] mb-5 tracking-tight">
                  {lang === "es" ? "Nuestra Ubicación" : "Our Home Location"}
                </h3>

                {/* Cuadro destacado con la dirección oficial */}
                <div className="bg-[#F8FAF9] p-5 rounded-2xl border border-stone-200/70 mb-6">
                  <p className="text-xs font-bold uppercase text-stone-500 mb-1 tracking-wider">
                    {lang === "es" ? "Dirección Oficial" : "Official Address"}
                  </p>
                  <p className="font-black text-stone-800 text-base sm:text-lg">
                    190 Goodrich St., Hayward, California 94544
                  </p>
                </div>

                {/* Viñetas de valor/accesibilidad */}
                <div className="space-y-3.5 text-stone-600 text-sm leading-relaxed mb-8 font-medium">
                  <p className="flex items-start gap-2.5">
                    <span className="text-[#0F8B44] font-bold text-base leading-none mt-0.5">✓</span>
                    <span>
                      {lang === "es"
                        ? "Fácil acceso para familias que transitan por la autopista o viven en Hayward y alrededores."
                        : "Convenient access for families commuting via highway or living in Hayward and nearby areas."}
                    </span>
                  </p>
                  <p className="flex items-start gap-2.5">
                    <span className="text-[#0F8B44] font-bold text-base leading-none mt-0.5">✓</span>
                    <span>
                      {lang === "es"
                        ? "Área residencial tranquila y segura con facilidad de estacionamiento para dejar y recoger a los niños."
                        : "Quiet and safe residential neighborhood with easy parking for seamless drop-off and pick-up."}
                    </span>
                  </p>
                </div>

                {/* Botón Abrir en Google Maps */}
                <div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=190+Goodrich+St,+Hayward,+CA+94544"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full bg-[#1C2B22] hover:bg-[#0F8B44] text-white text-xs sm:text-sm font-black transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>{lang === "es" ? "Abrir en Google Maps ↗" : "Open in Google Maps ↗"}</span>
                    <ExternalLink className="size-4" />
                  </a>
                </div>
              </div>

              {/* COLUMNA DERECHA: Mapa visual amplio */}
              <div className="rounded-2xl overflow-hidden h-[320px] sm:h-[360px] w-full border border-gray-200 shadow-xs bg-stone-100">
                <iframe
                  title="Growing Garden Family Child Care Location Map"
                  src="https://maps.google.com/maps?q=190+Goodrich+St,+Hayward,+CA+94544&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

            </div>
          </div>
        </div>

        {/* Onda curva inferior hacia el fondo blanco de Preguntas Frecuentes */}
        <SectionWave fill="#FFFFFF" />
      </section>

      {/* PREGUNTAS FRECUENTES (FONDO BLANCO CON ONDA FINAL HACIA EL FOOTER) */}
      <section className="bg-white pt-16 md:pt-24 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 sm:mb-14">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#76B82A] mb-2 inline-flex items-center justify-center gap-1.5">
                <span>{lang === "es" ? "PREGUNTAS FRECUENTES" : "FREQUENTLY ASKED QUESTIONS"}</span>
                <SparkleAccent className="size-3.5 text-[#F9B200]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F8B44] tracking-tight">
                {lang === "es" ? "Preguntas Frecuentes sobre el Contacto y Admisiones" : "Frequently Asked Questions About Contact & Admissions"}
              </h2>
              <div className="mt-2 flex justify-center">
                <ZigzagAccent className="text-[#F9B200] w-16 h-3" />
              </div>
              <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
                {lang === "es"
                  ? "Todo lo que necesitas saber antes de escribirnos o visitarnos."
                  : "Everything you need to know before reaching out or visiting us."}
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q:
                    lang === "es"
                      ? "¿Cuánto tiempo tarda Francisca en responder?"
                      : "How long does Francisca take to respond?",
                  a:
                    lang === "es"
                      ? "Francisca atiende personalmente cada solicitud en menos de 24 horas hábiles (y usualmente en unas pocas horas durante la jornada). Al enviarnos tu consulta por WhatsApp o a través de los formularios, recibirás una respuesta cercana y detallada para coordinar lo que tu familia necesite."
                      : "Francisca personally responds to every inquiry in less than 24 business hours (and usually within a few hours during the day). When you reach out via WhatsApp or submit a form, you will receive friendly, detailed attention to accommodate your family's needs.",
                },
                {
                  q:
                    lang === "es"
                      ? "¿Dónde están ubicados exactamente y cuál es su área de servicio?"
                      : "Where are you located and what is your service area?",
                  a:
                    lang === "es"
                      ? "Nuestra dirección oficial es 190 Goodrich St., Hayward, California 94544, brindando atención integral a familias de Hayward y zonas cercanas del Condado de Alameda. Al coordinar tu visita u Open House de los sábados, te recibiremos personalmente para mostrarte cada rincón del hogar."
                      : "Our official location is 190 Goodrich St., Hayward, California 94544, proudly serving families across Hayward and nearby Alameda County communities. When you book a visit or Saturday Open House, Francisca will welcome your family to tour our entire home.",
                },
                {
                  q:
                    lang === "es"
                      ? "¿Aceptan subsidios del gobierno como 4Cs o CalWORKs?"
                      : "Do you accept government childcare subsidies like 4Cs or CalWORKs?",
                  a:
                    lang === "es"
                      ? "¡Sí, por supuesto! Aceptamos programas de asistencia estatal y subsidios como 4Cs of Alameda County, CalWORKs, BANANAS, Social Services y otros programas autorizados. Francisca te asesora paso a paso para procesar los documentos y formalizar la admisión."
                      : "Yes, absolutely! We accept state subsidy and assistance programs including 4Cs of Alameda County, CalWORKs, BANANAS, Social Services, and other authorized programs. Francisca provides personalized guidance through the required documentation and enrollment.",
                },
                {
                  q:
                    lang === "es"
                      ? "¿Cuál es la forma más rápida de consultar?"
                      : "What is the quickest way to get in touch?",
                  a:
                    lang === "es"
                      ? "La vía más ágil y directa es enviarnos un mensaje por WhatsApp o llamarnos directamente al (341) 258-3149. También puedes escribirnos a gardenchildcaregrowing@gmail.com o completar el formulario superior indicando si deseas información sobre un programa específico o reservar tu visita del sábado."
                      : "The fastest and most direct way is sending us a WhatsApp message or calling us directly at (341) 258-3149. You can also email us at gardenchildcaregrowing@gmail.com or complete the form above specifying whether you need details about a program or want to book your Saturday visit.",
                },
              ].map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.q}
                    className={`rounded-2xl sm:rounded-3xl border-2 transition-all bg-[#F7FAF7] overflow-hidden shadow-2xs ${
                      isOpen ? "border-[#0F8B44] ring-2 ring-[#0F8B44]/10" : "border-stone-200/80 hover:border-stone-300"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                    >
                      <span className="font-black text-base sm:text-lg text-[#1C2B22]">
                        {faq.q}
                      </span>
                      <span
                        className={`size-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen ? "bg-[#0F8B44] text-white rotate-180" : "bg-white text-stone-500 border border-stone-200"
                        }`}
                      >
                        <ChevronDown className="size-4" />
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-stone-200/60 bg-white">
                        <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-normal">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Onda curva inferior hacia el verde institucional del Footer */}
        <SectionWave fill="#0B5D2D" />
      </section>
    </>
  );
}



