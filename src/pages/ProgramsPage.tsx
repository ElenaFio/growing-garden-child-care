import { Link, useRouter } from "@/lib/router";
import { useState, useEffect } from "react";
import { Check, ChevronDown, PhoneCall, CalendarCheck, Clock, ArrowRight, FileText, MessageCircle, CheckCircle2 } from "lucide-react";
import { OpenHouseBand, ZigzagAccent, SparkleAccent, SectionWave } from "@/components/page-elements";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { useLanguage } from "@/lib/i18n";
import toddlerBaby from "@/assets/images/regenerated_image_1791566697661.jpg";
import preschoolImage from "@/assets/images/regenerated_image_1790138533630.jpg";
import afterSchoolImage from "@/assets/images/regenerated_image_1790139425795.jpg";
import napSpaceImg from "@/assets/images/regenerated_image_1790138826426.jpg";
import activityAreaImg from "@/assets/images/activity_area.jpg";
import artWorkshopImg from "@/assets/images/regenerated_image_1791567349560.jpg";

export function ProgramsPage() {
  const { lang } = useLanguage();
  const { path } = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const rawHash = (path.includes("#") ? path.split("#")[1] : "") || window.location.hash.replace(/^#/, "");
    if (rawHash) {
      const timer = setTimeout(() => {
        const el = document.getElementById(rawHash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [path]);

  return (
    <>
      {/* 1. HERO BANNER VERDE EXACTAMENTE IGUAL A ABOUT US */}
      <PageHeroBanner
        variant="minimal"
        title={lang === "es" ? "Nuestros Programas" : "Our Programs"}
      />

      {/* 2. ENCABEZADO DE CONTENIDO (DEBAJO DEL HERO, SOBRE FONDO BLANCO) */}
      <section className="pt-16 md:pt-24 pb-0 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        {/* 1. BANNER SUPERIOR DE ALCANCE */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-14">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#76B82A] mb-2 flex items-center justify-center gap-1.5 text-center mt-4">
            <span>{lang === "es" ? "PROGRAMAS Y MODALIDADES" : "PROGRAMS & SCHEDULES"}</span>
            <span className="text-[#F24E86]">✦</span>
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F8B44] tracking-tight text-center mb-4">
            {lang === "es"
              ? "Programas Diseñados para tu Familia"
              : "Programs Designed for Your Family"}
          </h2>
          <div className="flex justify-center mb-4">
            <ZigzagAccent className="text-[#F9B200] w-16 h-3" />
          </div>
          <p className="text-stone-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-center leading-relaxed font-medium">
            {lang === "es"
              ? "Cuidado personalizado para niños de 1 a 13 años con licencia estatal #013417204."
              : "Personalized care for children ages 1 to 13 with state license #013417204."}
          </p>
        </div>

        {/* =======================================================
            LISTA HORIZONTAL DE PROGRAMAS (HORIZONTAL / LIST-CARD STYLE)
            ======================================================= */}
        <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
          {/* =======================================================
              TARJETA 1: TIEMPO COMPLETO
              ======================================================= */}
          <article
            id="full-time"
            className="bg-white rounded-3xl border border-stone-200/90 shadow-xs hover:shadow-md transition-all duration-300 p-5 sm:p-6 md:p-7 relative group scroll-mt-24 sm:scroll-mt-28"
          >
            <span id="regular-care" className="sr-only absolute -top-24 pointer-events-none" />
            <span id="infants-toddlers" className="sr-only absolute -top-24 pointer-events-none" />
            <span id="preschool" className="sr-only absolute -top-24 pointer-events-none" />
            <span id="1-to-2-years" className="sr-only absolute -top-24 pointer-events-none" />
            <span id="2-to-5-years" className="sr-only absolute -top-24 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 md:gap-7 items-stretch">
              {/* Columna Izquierda: Imagen temática con esquinas redondeadas */}
              <div className="md:col-span-5 relative w-full h-56 sm:h-64 md:h-full md:min-h-[270px] rounded-2xl overflow-hidden bg-[#EBF7EE] shrink-0">
                <img
                  src={preschoolImage}
                  alt={lang === "es" ? "Niños en actividades matutinas y preparación para Kinder" : "Children in morning activities and Kindergarten preparation"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Columna Derecha: Contenido estructurado homologado */}
              <div className="md:col-span-7 flex flex-col justify-between py-1">
                <div>
                  {/* Badge superior homologado */}
                  <div className="flex flex-wrap items-center gap-2 mb-2.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#E8F6ED] text-[#0F8B44] border border-[#D3ECD9]">
                      <span>{lang === "es" ? "EDADES: 1-13 AÑOS" : "AGES: 1–13 YEARS"}</span>
                    </span>
                  </div>

                  {/* Título */}
                  <h3 className="text-2xl sm:text-3xl font-black text-[#1C2B22] mb-3 leading-tight group-hover:text-[#0F8B44] transition-colors">
                    {lang === "es" ? "Tiempo Completo" : "Full-Time Care"}
                  </h3>

                  {/* Cajas destacadas: 1. Horario (Icono Reloj) & 2. Modalidad (Icono Calendario) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3.5">
                    {/* Horario */}
                    <div className="bg-[#F8FAF8] p-3 sm:p-3.5 rounded-2xl border border-stone-200/80 flex items-start gap-2.5">
                      <div className="size-8 rounded-xl bg-[#0F8B44]/15 text-[#0F8B44] flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-black uppercase tracking-wider text-[#0F8B44]">
                          {lang === "es" ? "Horario" : "Hours"}
                        </p>
                        <p className="text-xs sm:text-sm font-black text-stone-900 leading-snug">
                          {lang === "es" ? "6:00 AM – 3:00 PM (Lunes a Viernes)" : "6:00 AM – 3:00 PM (Monday to Friday)"}
                        </p>
                      </div>
                    </div>

                    {/* Modalidad */}
                    <div className="bg-[#F8FAF8] p-3 sm:p-3.5 rounded-2xl border border-stone-200/80 flex items-start gap-2.5">
                      <div className="size-8 rounded-xl bg-[#0F8B44]/15 text-[#0F8B44] flex items-center justify-center shrink-0 mt-0.5">
                        <CalendarCheck className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-black uppercase tracking-wider text-[#0F8B44]">
                          {lang === "es" ? "Modalidad" : "Modality"}
                        </p>
                        <p className="text-xs sm:text-sm font-semibold text-stone-800 leading-snug">
                          {lang === "es"
                            ? "Semana completa (5 días) o días flexibles de lunes a viernes."
                            : "Full week (5 days) or flexible days Monday to Friday."}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 3. Qué abarca & 4. Ideal para */}
                  <div className="space-y-2 mb-4">
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      <strong className="font-black text-[#1C2B22]">
                        {lang === "es" ? "Qué abarca: " : "Includes: "}
                      </strong>
                      {lang === "es"
                        ? "Jornada completa (hasta 9 h). Incluye desayuno, actividades educativas/Kinder, juego libre supervisado, almuerzo y siesta."
                        : "Full day care (up to 9 hrs). Includes breakfast, educational/Kindergarten activities, supervised play, lunch, and nap time."}
                    </p>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      <strong className="font-black text-[#1C2B22]">
                        {lang === "es" ? "Ideal para: " : "Ideal for: "}
                      </strong>
                      {lang === "es"
                        ? "Padres con jornada laboral completa que buscan una rutina diaria integral y bilingüe."
                        : "Parents working full-time looking for a comprehensive, bilingual daily routine."}
                    </p>
                  </div>
                </div>

                {/* Botón CTA homologado */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-end">
                  <Link
                    to="/contact?tab=inquire&program=full-time"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-black text-sm text-white bg-[#0F8B44] hover:bg-[#0b6b34] py-3.5 px-6 rounded-full transition-all shadow-xs hover:shadow-md cursor-pointer hover:-translate-y-0.5 active:translate-y-0 text-center"
                  >
                    <span>{lang === "es" ? "Consultar disponibilidad" : "Check availability"}</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* =======================================================
              TARJETA 2: MEDIO TIEMPO
              ======================================================= */}
          <article
            id="part-time"
            className="bg-white rounded-3xl border border-stone-200/90 shadow-xs hover:shadow-md transition-all duration-300 p-5 sm:p-6 md:p-7 relative group scroll-mt-24 sm:scroll-mt-28"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 md:gap-7 items-stretch">
              {/* Columna Izquierda */}
              <div className="md:col-span-5 relative w-full h-56 sm:h-64 md:h-full md:min-h-[270px] rounded-2xl overflow-hidden bg-[#EBF7EE] shrink-0">
                <img
                  src={activityAreaImg}
                  alt={lang === "es" ? "Niños en actividades guiadas y estimulación temprana" : "Children in guided activities and early stimulation"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Columna Derecha */}
              <div className="md:col-span-7 flex flex-col justify-between py-1">
                <div>
                  {/* Badge superior homologado */}
                  <div className="flex flex-wrap items-center gap-2 mb-2.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#E8F6ED] text-[#0F8B44] border border-[#D3ECD9]">
                      <span>{lang === "es" ? "EDADES: 1-13 AÑOS" : "AGES: 1–13 YEARS"}</span>
                    </span>
                  </div>

                  {/* Título */}
                  <h3 className="text-2xl sm:text-3xl font-black text-[#1C2B22] mb-3 leading-tight group-hover:text-[#0F8B44] transition-colors">
                    {lang === "es" ? "Medio Tiempo" : "Part-Time Care"}
                  </h3>

                  {/* Cajas destacadas: 1. Horario & 2. Modalidad */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3.5">
                    {/* Horario */}
                    <div className="bg-[#F8FAF8] p-3 sm:p-3.5 rounded-2xl border border-stone-200/80 flex items-start gap-2.5">
                      <div className="size-8 rounded-xl bg-[#0F8B44]/15 text-[#0F8B44] flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-black uppercase tracking-wider text-[#0F8B44]">
                          {lang === "es" ? "Horario" : "Hours"}
                        </p>
                        <p className="text-xs sm:text-sm font-black text-stone-900 leading-snug">
                          {lang === "es"
                            ? "Turnos de 4 a 5 horas matutinas (6:00 AM – 11:00 AM o 7:00 AM – 12:00 PM)"
                            : "Morning shifts of 4 to 5 hours (6:00 AM – 11:00 AM or 7:00 AM – 12:00 PM)"}
                        </p>
                      </div>
                    </div>

                    {/* Modalidad */}
                    <div className="bg-[#F8FAF8] p-3 sm:p-3.5 rounded-2xl border border-stone-200/80 flex items-start gap-2.5">
                      <div className="size-8 rounded-xl bg-[#0F8B44]/15 text-[#0F8B44] flex items-center justify-center shrink-0 mt-0.5">
                        <CalendarCheck className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-black uppercase tracking-wider text-[#0F8B44]">
                          {lang === "es" ? "Modalidad" : "Modality"}
                        </p>
                        <p className="text-xs sm:text-sm font-semibold text-stone-800 leading-snug">
                          {lang === "es"
                            ? "De 2 a 5 días por semana según las necesidades familiares."
                            : "2 to 5 days per week based on family needs."}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 3. Qué abarca & 4. Ideal para */}
                  <div className="space-y-2 mb-4">
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      <strong className="font-black text-[#1C2B22]">
                        {lang === "es" ? "Qué abarca: " : "Includes: "}
                      </strong>
                      {lang === "es"
                        ? "Mañanas activas enfocadas en socialización, círculos de lectura, estimulación temprana, preparación preescolar y desayuno/merienda nutritiva."
                        : "Active mornings focused on socialization, reading circles, early stimulation, preschool prep, and nutritious breakfast/snack."}
                    </p>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      <strong className="font-black text-[#1C2B22]">
                        {lang === "es" ? "Ideal para: " : "Ideal for: "}
                      </strong>
                      {lang === "es"
                        ? "Familias con horarios de trabajo parciales, esquemas híbridos o niños en proceso de transición."
                        : "Families with part-time schedules, hybrid work models, or children in transition."}
                    </p>
                  </div>
                </div>

                {/* Botón CTA homologado */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-end">
                  <Link
                    to="/contact?tab=inquire&program=part-time"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-black text-sm text-white bg-[#0F8B44] hover:bg-[#0b6b34] py-3.5 px-6 rounded-full transition-all shadow-xs hover:shadow-md cursor-pointer hover:-translate-y-0.5 active:translate-y-0 text-center"
                  >
                    <span>{lang === "es" ? "Consultar disponibilidad" : "Check availability"}</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* =======================================================
              TARJETA 3: CUIDADO OCASIONAL & POR HORAS
              ======================================================= */}
          <article
            id="drop-in"
            className="bg-white rounded-3xl border border-stone-200/90 shadow-xs hover:shadow-md transition-all duration-300 p-5 sm:p-6 md:p-7 relative group scroll-mt-24 sm:scroll-mt-28"
          >
            <span id="drop-in-care" className="sr-only absolute -top-24 pointer-events-none" />
            <span id="flexible" className="sr-only absolute -top-24 pointer-events-none" />
            <span id="flexible-care" className="sr-only absolute -top-24 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 md:gap-7 items-stretch">
              {/* Columna Izquierda */}
              <div className="md:col-span-5 relative w-full h-56 sm:h-64 md:h-full md:min-h-[270px] rounded-2xl overflow-hidden bg-[#FEF9EA] shrink-0">
                <img
                  src={toddlerBaby}
                  alt={lang === "es" ? "Niño en actividades didácticas individuales y juego seguro" : "Child in individual educational play and safe care"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Columna Derecha */}
              <div className="md:col-span-7 flex flex-col justify-between py-1">
                <div>
                  {/* Badge superior homologado */}
                  <div className="flex flex-wrap items-center gap-2 mb-2.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#E8F6ED] text-[#0F8B44] border border-[#D3ECD9]">
                      <span>{lang === "es" ? "EDADES: 1-13 AÑOS" : "AGES: 1–13 YEARS"}</span>
                    </span>
                  </div>

                  {/* Título */}
                  <h3 className="text-2xl sm:text-3xl font-black text-[#1C2B22] mb-3 leading-tight group-hover:text-[#B27D00] transition-colors">
                    {lang === "es" ? "Cuidado Ocasional & Por Horas" : "Drop-In & Hourly Care"}
                  </h3>

                  {/* Cajas destacadas: 1. Horario & 2. Modalidad */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3.5">
                    {/* Horario */}
                    <div className="bg-[#F8FAF8] p-3 sm:p-3.5 rounded-2xl border border-stone-200/80 flex items-start gap-2.5">
                      <div className="size-8 rounded-xl bg-[#0F8B44]/15 text-[#0F8B44] flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-black uppercase tracking-wider text-[#0F8B44]">
                          {lang === "es" ? "Horario" : "Hours"}
                        </p>
                        <p className="text-xs sm:text-sm font-black text-stone-900 leading-snug">
                          {lang === "es"
                            ? "Por bloques de horas, medio día o día completo (Sujeto a cupo)"
                            : "Hourly blocks, half day, or full day (Subject to availability)"}
                        </p>
                      </div>
                    </div>

                    {/* Modalidad */}
                    <div className="bg-[#F8FAF8] p-3 sm:p-3.5 rounded-2xl border border-stone-200/80 flex items-start gap-2.5">
                      <div className="size-8 rounded-xl bg-[#0F8B44]/15 text-[#0F8B44] flex items-center justify-center shrink-0 mt-0.5">
                        <CalendarCheck className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-black uppercase tracking-wider text-[#0F8B44]">
                          {lang === "es" ? "Modalidad" : "Modality"}
                        </p>
                        <p className="text-xs sm:text-sm font-semibold text-stone-800 leading-snug">
                          {lang === "es"
                            ? "Reserva flexible según necesidad (aviso previo de 24 horas requerido)."
                            : "Flexible booking as needed (24-hour advance notice required)."}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 3. Qué abarca & 4. Ideal para */}
                  <div className="space-y-2 mb-4">
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      <strong className="font-black text-[#1C2B22]">
                        {lang === "es" ? "Qué abarca: " : "Includes: "}
                      </strong>
                      {lang === "es"
                        ? "Atención segura y supervisada, integración en las actividades lúdicas del grupo, meriendas y áreas de descanso mientras los padres atienden compromisos."
                        : "Safe, supervised care, integration into group play activities, snacks, and rest areas while parents handle commitments."}
                    </p>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      <strong className="font-black text-[#1C2B22]">
                        {lang === "es" ? "Ideal para: " : "Ideal for: "}
                      </strong>
                      {lang === "es"
                        ? "Citas médicas, diligencias, emergencias laborales o días sin clases escolares."
                        : "Doctor visits, errands, work emergencies, or days off from school."}
                    </p>
                  </div>
                </div>

                {/* Botón CTA homologado */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-end">
                  <Link
                    to="/contact?tab=inquire&program=drop-in"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-black text-sm text-white bg-[#0F8B44] hover:bg-[#0b6b34] py-3.5 px-6 rounded-full transition-all shadow-xs hover:shadow-md cursor-pointer hover:-translate-y-0.5 active:translate-y-0 text-center"
                  >
                    <span>{lang === "es" ? "Consultar disponibilidad" : "Check availability"}</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* =======================================================
              TARJETA 4: CUIDADO NOCTURNO & DATE NIGHT
              ======================================================= */}
          <article
            id="date-night"
            className="bg-white rounded-3xl border border-stone-200/90 shadow-xs hover:shadow-md transition-all duration-300 p-5 sm:p-6 md:p-7 relative group scroll-mt-24 sm:scroll-mt-28"
          >
            <span id="night-care" className="sr-only absolute -top-24 pointer-events-none" />
            <span id="evening-care" className="sr-only absolute -top-24 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 md:gap-7 items-stretch">
              {/* Columna Izquierda */}
              <div className="md:col-span-5 relative w-full h-56 sm:h-64 md:h-full md:min-h-[270px] rounded-2xl overflow-hidden bg-[#F3EEFD] shrink-0">
                <img
                  src={napSpaceImg}
                  alt={lang === "es" ? "Espacio tranquilo y seguro de descanso nocturno y cuentos" : "Quiet, safe resting space for bedtime stories and evening care"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Columna Derecha */}
              <div className="md:col-span-7 flex flex-col justify-between py-1">
                <div>
                  {/* Badge superior homologado */}
                  <div className="flex flex-wrap items-center gap-2 mb-2.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#E8F6ED] text-[#0F8B44] border border-[#D3ECD9]">
                      <span>{lang === "es" ? "EDADES: 1-13 AÑOS" : "AGES: 1–13 YEARS"}</span>
                    </span>
                  </div>

                  {/* Título */}
                  <h3 className="text-2xl sm:text-3xl font-black text-[#1C2B22] mb-3 leading-tight group-hover:text-[#6D28D9] transition-colors">
                    {lang === "es" ? "Cuidado Nocturno & Date Night" : "Night & Date Night Care"}
                  </h3>

                  {/* Cajas destacadas: 1. Horario & 2. Modalidad */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3.5">
                    {/* Horario */}
                    <div className="bg-[#F8FAF8] p-3 sm:p-3.5 rounded-2xl border border-stone-200/80 flex items-start gap-2.5">
                      <div className="size-8 rounded-xl bg-[#0F8B44]/15 text-[#0F8B44] flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-black uppercase tracking-wider text-[#0F8B44]">
                          {lang === "es" ? "Horario" : "Hours"}
                        </p>
                        <p className="text-xs sm:text-sm font-black text-stone-900 leading-snug">
                          {lang === "es"
                            ? "5:00 PM – 11:00 PM (Noches seleccionadas)"
                            : "5:00 PM – 11:00 PM (Selected evenings)"}
                        </p>
                      </div>
                    </div>

                    {/* Modalidad */}
                    <div className="bg-[#F8FAF8] p-3 sm:p-3.5 rounded-2xl border border-stone-200/80 flex items-start gap-2.5">
                      <div className="size-8 rounded-xl bg-[#0F8B44]/15 text-[#0F8B44] flex items-center justify-center shrink-0 mt-0.5">
                        <CalendarCheck className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-black uppercase tracking-wider text-[#0F8B44]">
                          {lang === "es" ? "Modalidad" : "Modality"}
                        </p>
                        <p className="text-xs sm:text-sm font-semibold text-stone-800 leading-snug">
                          {lang === "es"
                            ? "Reserva previa por sesión o por horas."
                            : "Advance reservation per session or by the hour."}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 3. Qué abarca & 4. Ideal para */}
                  <div className="space-y-2 mb-4">
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      <strong className="font-black text-[#1C2B22]">
                        {lang === "es" ? "Qué abarca: " : "Includes: "}
                      </strong>
                      {lang === "es"
                        ? "Cena balanceada, dinámicas tranquilas, lectura de cuentos antes de dormir, preparación para el descanso en un ambiente cálido y seguro."
                        : "Balanced dinner, quiet activities, bedtime story reading, restful bedtime preparation in a warm, safe setting."}
                    </p>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      <strong className="font-black text-[#1C2B22]">
                        {lang === "es" ? "Ideal para: " : "Ideal for: "}
                      </strong>
                      {lang === "es"
                        ? "Padres que necesitan tiempo libre para cenas de trabajo, citas en pareja o turnos laborales nocturnos."
                        : "Parents needing time for work dinners, date nights, or evening work shifts."}
                    </p>
                  </div>
                </div>

                {/* Botón CTA homologado */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-end">
                  <Link
                    to="/contact?tab=inquire&program=night-care"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-black text-sm text-white bg-[#0F8B44] hover:bg-[#0b6b34] py-3.5 px-6 rounded-full transition-all shadow-xs hover:shadow-md cursor-pointer hover:-translate-y-0.5 active:translate-y-0 text-center"
                  >
                    <span>{lang === "es" ? "Consultar disponibilidad" : "Check availability"}</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* =======================================================
              TARJETA 5: TALLER DE SÁBADOS: ARTE + YOGA
              ======================================================= */}
          <article
            id="art-yoga"
            className="bg-white rounded-3xl border border-stone-200/90 shadow-xs hover:shadow-md transition-all duration-300 p-5 sm:p-6 md:p-7 relative group scroll-mt-24 sm:scroll-mt-28"
          >
            <span id="saturday-workshop" className="sr-only absolute -top-24 pointer-events-none" />
            <span id="school-age" className="sr-only absolute -top-24 pointer-events-none" />
            <span id="after-school" className="sr-only absolute -top-24 pointer-events-none" />
            <span id="5-to-13-years" className="sr-only absolute -top-24 pointer-events-none" />
            <span id="vacation-care" className="sr-only absolute -top-24 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 md:gap-7 items-stretch">
              {/* Columna Izquierda */}
              <div className="md:col-span-5 relative w-full h-56 sm:h-64 md:h-full md:min-h-[270px] rounded-2xl overflow-hidden bg-[#FDF2F5] shrink-0">
                <img
                  src={artWorkshopImg}
                  alt={lang === "es" ? "Niños en taller creativo de pintura y yoga infantil" : "Children in creative painting workshop and kids yoga"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Columna Derecha */}
              <div className="md:col-span-7 flex flex-col justify-between py-1">
                <div>
                  {/* Badge superior homologado */}
                  <div className="flex flex-wrap items-center gap-2 mb-2.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#E8F6ED] text-[#0F8B44] border border-[#D3ECD9]">
                      <span>{lang === "es" ? "EDADES: 1-13 AÑOS" : "AGES: 1–13 YEARS"}</span>
                    </span>
                  </div>

                  {/* Título */}
                  <h3 className="text-2xl sm:text-3xl font-black text-[#1C2B22] mb-3 leading-tight group-hover:text-[#F24E86] transition-colors">
                    {lang === "es" ? "Taller de Sábados: Arte + Yoga" : "Saturday Workshop: Art + Yoga"}
                  </h3>

                  {/* Cajas destacadas: 1. Horario & 2. Modalidad */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3.5">
                    {/* Horario */}
                    <div className="bg-[#F8FAF8] p-3 sm:p-3.5 rounded-2xl border border-stone-200/80 flex items-start gap-2.5">
                      <div className="size-8 rounded-xl bg-[#0F8B44]/15 text-[#0F8B44] flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-black uppercase tracking-wider text-[#0F8B44]">
                          {lang === "es" ? "Horario" : "Hours"}
                        </p>
                        <p className="text-xs sm:text-sm font-black text-stone-900 leading-snug">
                          {lang === "es"
                            ? "Turnos de mañana o tarde los sábados (ej. 9:00 AM – 1:00 PM)"
                            : "Saturday morning or afternoon shifts (e.g. 9:00 AM – 1:00 PM)"}
                        </p>
                      </div>
                    </div>

                    {/* Modalidad */}
                    <div className="bg-[#F8FAF8] p-3 sm:p-3.5 rounded-2xl border border-stone-200/80 flex items-start gap-2.5">
                      <div className="size-8 rounded-xl bg-[#0F8B44]/15 text-[#0F8B44] flex items-center justify-center shrink-0 mt-0.5">
                        <CalendarCheck className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-black uppercase tracking-wider text-[#0F8B44]">
                          {lang === "es" ? "Modalidad" : "Modality"}
                        </p>
                        <p className="text-xs sm:text-sm font-semibold text-stone-800 leading-snug">
                          {lang === "es"
                            ? "Paquete de 4 sesiones o sesiones individuales (cupos limitados)."
                            : "4-session package or individual sessions (limited spots)."}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 3. Qué abarca & 4. Ideal para */}
                  <div className="space-y-2 mb-4">
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      <strong className="font-black text-[#1C2B22]">
                        {lang === "es" ? "Qué abarca: " : "Includes: "}
                      </strong>
                      {lang === "es"
                        ? "Exploración sensorial, pintura, manualidades temáticas, yoga infantil y técnicas de respiración consciente guiadas por educadoras."
                        : "Sensory exploration, painting, themed crafts, kids' yoga, and mindful breathing guided by educators."}
                    </p>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      <strong className="font-black text-[#1C2B22]">
                        {lang === "es" ? "Ideal para: " : "Ideal for: "}
                      </strong>
                      {lang === "es"
                        ? "Desarrollar la creatividad, motricidad fina, concentración y bienestar emocional durante el fin de semana."
                        : "Developing creativity, fine motor skills, focus, and emotional well-being on weekends."}
                    </p>
                  </div>
                </div>

                {/* Botón CTA homologado */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-end">
                  <Link
                    to="/contact?tab=inquire&program=saturday-workshop"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-black text-sm text-white bg-[#0F8B44] hover:bg-[#0b6b34] py-3.5 px-6 rounded-full transition-all shadow-xs hover:shadow-md cursor-pointer hover:-translate-y-0.5 active:translate-y-0 text-center"
                  >
                    <span>{lang === "es" ? "Consultar disponibilidad" : "Check availability"}</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* =======================================================
            NIVEL 3: BANNER DE POLÍTICAS DE RESERVA Y CONTACTO (Ancho completo)
            ======================================================= */}
        <div className="rounded-3xl bg-[#FFFDF7] border-2 border-[#F9B200]/50 p-6 sm:p-8 md:p-10 mb-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF6D8] text-[#B27D00] border border-[#FDEBC7] text-xs font-black uppercase tracking-wider mb-3">
                <span>📋</span>
                <span>{lang === "es" ? "REQUISITOS Y POLÍTICAS DEL SERVICIO" : "REQUIREMENTS & SERVICE POLICIES"}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#1C2B22] mb-4">
                {lang === "es" ? "Información Importante y Políticas de Reserva" : "Important Information & Reservation Policies"}
              </h3>

              <div className="space-y-3 max-w-3xl">
                {/* 1. Vacunación obligatoria */}
                <div className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-stone-200/60 shadow-2xs">
                  <span className="size-6 rounded-full bg-[#EBF7EE] text-[#0F8B44] flex items-center justify-center shrink-0 font-black text-xs mt-0.5">1</span>
                  <p className="text-xs sm:text-sm text-stone-700 leading-snug">
                    <strong className="text-[#1C2B22]">{lang === "es" ? "Vacunación obligatoria: " : "Mandatory vaccination: "}</strong>
                    {lang === "es"
                      ? "Registro de vacunas al día. Para cualquier servicio de cuidado, los niños deben contar con su cartilla completa."
                      : "Up-to-date immunization records required for any child care service."}
                  </p>
                </div>

                {/* 2. Aviso previo */}
                <div className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-stone-200/60 shadow-2xs">
                  <span className="size-6 rounded-full bg-[#FEF6D8] text-[#B27D00] flex items-center justify-center shrink-0 font-black text-xs mt-0.5">2</span>
                  <p className="text-xs sm:text-sm text-stone-700 leading-snug">
                    <strong className="text-[#1C2B22]">{lang === "es" ? "Aviso previo: " : "Advance notice: "}</strong>
                    {lang === "es"
                      ? "Mínimo 24 horas para cuidado ocasional (sujeto a cupos disponibles)."
                      : "Minimum 24 hours advance notice for drop-in care (subject to available spots)."}
                  </p>
                </div>

                {/* 3. Reserva */}
                <div className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-stone-200/60 shadow-2xs">
                  <span className="size-6 rounded-full bg-[#FDF2F5] text-[#C11854] flex items-center justify-center shrink-0 font-black text-xs mt-0.5">3</span>
                  <p className="text-xs sm:text-sm text-stone-700 leading-snug">
                    <strong className="text-[#1C2B22]">{lang === "es" ? "Reserva: " : "Reservation: "}</strong>
                    {lang === "es"
                      ? "Pago por adelantado para asegurar el espacio. Su cupo queda formalmente garantizado una vez recibido el pago."
                      : "Payment in advance to secure the spot. Your placement is formally guaranteed upon receipt of payment."}
                  </p>
                </div>
              </div>
            </div>

            {/* Contacto directo */}
            <div className="lg:w-80 shrink-0 bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs text-center flex flex-col items-center justify-center">
              <p className="text-xs font-bold text-stone-600 mb-4 leading-relaxed">
                {lang === "es"
                  ? "Contacto directo: Llame o envíe un mensaje al (341) 258-3149 para verificar cupos al instante:"
                  : "Direct contact: Call or text (341) 258-3149 to verify open spots instantly:"}
              </p>
              <a
                href="tel:+13412583149"
                className="w-full inline-flex items-center justify-center gap-2 font-black text-base text-white bg-[#0F8B44] hover:bg-[#0b6b34] py-3.5 px-5 rounded-full transition-all shadow-sm hover:shadow-md mb-3 hover:-translate-y-0.5 active:translate-y-0"
              >
                <PhoneCall className="size-4" />
                <span>(341) 258-3149</span>
              </a>
              <a
                href="https://wa.me/13412583149?text=Hola%20Francisca,%20quisiera%20consultar%20disponibilidad%20de%20cupos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 font-bold text-xs sm:text-sm text-stone-800 bg-[#E8F6ED] hover:bg-[#d8eedf] py-2.5 px-4 rounded-full transition-all border border-[#D3ECD9]"
              >
                <MessageCircle className="size-4 text-[#0F8B44]" />
                <span>{lang === "es" ? "Enviar WhatsApp →" : "Send WhatsApp →"}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>

      {/* SECCIÓN DE ASISTENCIA GUBERNAMENTAL (SUBSIDIOS CON FOTO) */}
      <section className="w-full bg-white pt-16 md:pt-24 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          {/* Columna de Texto (Izquierda) */}
          <div className="flex-1 flex flex-col justify-center text-left">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#76B82A] mb-2 flex items-center gap-1.5">
              <span>{lang === "es" ? "APOYO A TU FAMILIA" : "SUPPORT FOR YOUR FAMILY"}</span>
              <span className="text-[#F24E86]">✦</span>
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1C2B22] tracking-tight mb-3">
              {lang === "es"
                ? "Aceptamos Programas de Asistencia Gubernamental"
                : "Government Assistance Programs Accepted"}
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
              {lang === "es"
                ? "Respaldamos a las familias trabajadoras de Hayward aceptando subsidios de cuidado infantil de California (como 4Cs del Condado de Alameda, CalWORKs y agencias locales). Te guiamos en el proceso para que tu pequeño reciba un cuidado amoroso con opciones accesibles o cobertura total."
                : "We support working families across Hayward by accepting California child care subsidies (such as 4Cs of Alameda County, CalWORKs, and local agencies). We guide you through the process so your little one receives loving care with affordable options or full coverage."}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
              <Link
                to="/contact#inquire"
                className="inline-flex items-center gap-2 font-black text-sm text-white bg-[#0F8B44] hover:bg-[#0b6b34] px-7 py-3.5 rounded-full transition-all shadow-sm cursor-pointer"
              >
                <span>
                  {lang === "es"
                    ? "Preguntar a Francisca por Subsidios →"
                    : "Consult Francisca About Assistance →"}
                </span>
              </Link>
              <span className="text-xs font-semibold text-stone-500">
                {lang === "es"
                  ? "✓ Cobertura total o parcial según elegibilidad"
                  : "✓ Full or partial coverage based on eligibility"}
              </span>
            </div>
          </div>

          {/* Columna de Fotografía (Derecha) */}
          <div className="w-full sm:w-80 md:w-96 h-72 sm:h-80 shrink-0 rounded-[2.5rem] overflow-hidden shadow-xs border-2 border-stone-200/70">
            <img
              src={preschoolImage}
              alt={lang === "es" ? "Niña jugando en Growing Garden Child Care" : "Child playing at Growing Garden Child Care"}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Onda curva inferior hacia el fondo suave de 3 Pasos */}
        <SectionWave fill="#F7FAF7" />
      </section>

      {/* 2. SIMPLE 3-STEP PROCESS (Fondo suave #F7FAF7 con tarjetas blancas puras) */}
      <section className="pt-16 md:pt-24 pb-0 bg-[#F7FAF7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-16">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#76B82A] flex items-center justify-center gap-1.5 mb-2">
              <span>{lang === "es" ? "CÓMO COMENZAR" : "HOW TO GET STARTED"}</span>
              <span className="text-[#F24E86]">✦</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F8B44] tracking-tight">
              {lang === "es" ? "Proceso Sencillo de 3 Pasos" : "Simple 3-Step Process"}
            </h2>
            <div className="mt-2 flex justify-center">
              <ZigzagAccent className="text-[#F9B200] w-16 h-3" />
            </div>
            <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
              {lang === "es"
                ? "Una manera clara, cercana y sin complicaciones de encontrar el programa ideal para tu familia."
                : "A clear, caring, and hassle-free way to find the perfect care program for your family."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Step 1 - Verde */}
            <div className="relative rounded-3xl bg-white border border-gray-100 shadow-sm p-7 sm:p-8 flex flex-col justify-between hover:shadow-md transition-all group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="size-12 rounded-2xl bg-[#0F8B44] text-white font-black text-lg flex items-center justify-center shadow-xs">
                    01
                  </span>
                  <div className="size-11 rounded-full bg-[#EBF7EE] border border-[#D3ECD9] flex items-center justify-center text-[#0F8B44] shadow-2xs">
                    <FileText className="size-5" />
                  </div>
                </div>
                <h3 className="text-xl font-black text-[#0F8B44] mb-2.5">
                  {lang === "es" ? "Elige tu programa y consulta" : "Select Program & Inquire"}
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
                  {lang === "es"
                    ? "Completa el breve formulario indicando el programa de tu interés, la edad de tu pequeño y el horario que necesitas."
                    : "Fill out the quick form with your preferred program, child's age, and the schedule or hours you need."}
                </p>
              </div>
            </div>

            {/* Step 2 - Amarillo */}
            <div className="relative rounded-3xl bg-white border border-gray-100 shadow-sm p-7 sm:p-8 flex flex-col justify-between hover:shadow-md transition-all group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="size-12 rounded-2xl bg-[#B27D00] text-white font-black text-lg flex items-center justify-center shadow-xs">
                    02
                  </span>
                  <div className="size-11 rounded-full bg-[#FEF6D8] border border-[#FDEBC7] flex items-center justify-center text-[#B27D00] shadow-2xs">
                    <MessageCircle className="size-5" />
                  </div>
                </div>
                <h3 className="text-xl font-black text-[#B27D00] mb-2.5">
                  {lang === "es" ? "Orientación personalizada" : "Personalized Guidance"}
                </h3>
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-normal">
                  {lang === "es"
                    ? "Francisca te contactará por WhatsApp o llamada para compartirte disponibilidad, costos y responder cualquier consulta."
                    : "Francisca will reach out via WhatsApp or phone call to share availability, rates, and answer any questions."}
                </p>
              </div>
            </div>

            {/* Step 3 - Rosa */}
            <div className="relative rounded-3xl bg-white border border-gray-100 shadow-sm p-7 sm:p-8 flex flex-col justify-between hover:shadow-md transition-all group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="size-12 rounded-2xl bg-[#F24E86] text-white font-black text-lg flex items-center justify-center shadow-xs">
                    03
                  </span>
                  <div className="size-11 rounded-full bg-[#FDE8EF] border border-[#FBD6E2] flex items-center justify-center text-[#F24E86] shadow-2xs">
                    <CheckCircle2 className="size-5" />
                  </div>
                </div>
                <h3 className="text-xl font-black text-[#C11854] mb-2.5">
                  {lang === "es" ? "Confirma y asegura tu cupo" : "Confirm & Secure Your Spot"}
                </h3>
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-normal">
                  {lang === "es"
                    ? "Elige la fecha de inicio, completa el sencillo registro y estaremos listos para recibir a tu pequeño con amor."
                    : "Choose your start date, complete the simple registration, and we will be ready to welcome your little one with love."}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact?tab=program"
              className="inline-flex items-center gap-2 font-black text-sm text-white bg-[#0F8B44] hover:bg-[#0b6b34] px-8 py-4 rounded-full transition-all shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>{lang === "es" ? "Consultar sobre un Programa →" : "Inquire About a Program →"}</span>
            </Link>
          </div>
        </div>

        {/* Onda curva inferior hacia el fondo blanco de Preguntas Frecuentes */}
        <SectionWave fill="#FFFFFF" />
      </section>

      {/* 3. PREGUNTAS FRECUENTES (FAQ ACCORDION SOBRE FONDO BLANCO) */}
      <section className="pt-16 md:pt-24 pb-0 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 sm:mb-14">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#76B82A] mb-2 inline-flex items-center justify-center gap-1.5">
                <span>{lang === "es" ? "PREGUNTAS FRECUENTES" : "FREQUENTLY ASKED QUESTIONS"}</span>
                <SparkleAccent className="size-3.5 text-[#F9B200]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F8B44] tracking-tight">
                {lang === "es" ? "Dudas Comunes sobre Nuestros Programas" : "Questions About Our Programs"}
              </h2>
              <div className="mt-2 flex justify-center">
                <ZigzagAccent className="text-[#F9B200] w-16 h-3" />
              </div>
              <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
                {lang === "es"
                  ? "Respuestas directas y transparentes para que elijas la mejor opción para tu familia."
                  : "Clear and transparent answers to help you choose the best option for your family."}
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q:
                    lang === "es"
                      ? "¿Qué incluye la alimentación en cada turno?"
                      : "What is included with meals in each shift?",
                  a:
                    lang === "es"
                      ? "Proporcionamos alimentos nutritivos y balanceados adaptados a cada jornada: desayuno y almuerzo casero en Tiempo Completo, refrigerio saludable en Medio Tiempo, y cena reconfortante en el Cuidado Nocturno. Si tu pequeño tiene alguna alergia o restricción alimentaria, adaptamos el menú con previo aviso."
                      : "We provide nutritious, balanced meals adapted to each schedule: homemade breakfast and lunch in Full-Time, healthy snacks in Part-Time, and a comforting dinner in Night Care. If your child has allergies or dietary restrictions, we adapt the menu with advance notice.",
                },
                {
                  q:
                    lang === "es"
                      ? "¿Con cuánta anticipación debo reservar el Cuidado Ocasional o Nocturno?"
                      : "How far in advance should I book Drop-In or Night Care?",
                  a:
                    lang === "es"
                      ? "Recomendamos solicitarlo con un mínimo de 24 a 48 horas de anticipación para garantizar el espacio y organizar los materiales y la cena. Para emergencias del mismo día, puedes llamarnos o escribirnos directamente por WhatsApp para verificar si hay cupos libres en ese momento."
                      : "We recommend booking at least 24 to 48 hours in advance to secure a spot and prepare activities and meals. For same-day emergencies, you can call or WhatsApp us directly to check real-time availability.",
                },
                {
                  q:
                    lang === "es"
                      ? "¿Cómo es el proceso de adaptación para los niños que asisten por primera vez?"
                      : "How does the settling-in transition work for first-time children?",
                  a:
                    lang === "es"
                      ? "Fomentamos una transición gradual, afectuosa y sin presiones. Comenzamos siempre con una visita guiada junto a la familia para familiarizarse con el espacio y con Francisca, y mantenemos comunicación y fotos de tranquilidad durante sus primeros días."
                      : "We foster a gentle, loving, pressure-free transition. We always begin with a guided family visit to get familiar with our home and Francisca, and provide reassuring photos and updates throughout their initial days.",
                },
                {
                  q:
                    lang === "es"
                      ? "¿Cómo funciona el pago mediante subsidios (4Cs del Condado de Alameda, CalWORKs)?"
                      : "How does payment through subsidies (Alameda County 4Cs, CalWORKs) work?",
                  a:
                    lang === "es"
                      ? "Aceptamos los programas de asistencia gubernamental del estado y del Condado de Alameda. Te orientamos paso a paso con los formularios requeridos y gestionamos la documentación directamente con tu agencia para activar la cobertura sin complicaciones."
                      : "We accept government child care assistance programs from the state and Alameda County. We guide you step-by-step through the required paperwork and coordinate directly with your case worker to activate coverage smoothly.",
                },
                {
                  q:
                    lang === "es"
                      ? "¿Qué requisitos de salud o documentos son indispensables para iniciar?"
                      : "What health requirements or documents are required before starting?",
                  a:
                    lang === "es"
                      ? "Por normativa estricta de la licencia estatal de California, todos los niños deben contar con su registro de vacunas al día antes de su primer día de asistencia, además de completar el formulario básico con contactos de emergencia y ficha de salud."
                      : "Under California state licensing regulations, all children must have up-to-date immunization records prior to their first day of attendance, in addition to completing emergency contact and child health intake forms.",
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

        {/* Onda curva inferior hacia el fondo suave de Open House Band */}
        <SectionWave fill="#F7FAF7" />
      </section>

      <OpenHouseBand bgClass="bg-[#F7FAF7]" />
    </>
  );
}
