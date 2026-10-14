import { Link } from "@/lib/router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ChevronDown, 
  ShieldCheck,
  Lock,
  Sparkles,
  Moon,
  LifeBuoy
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ZigzagAccent, StarAccent, SparkleAccent, SectionWave, OpenHouseBand } from "@/components/page-elements";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { useLanguage } from "@/lib/i18n";
import activitySpaceImg from "@/assets/images/activity_area.jpg";
import napSpaceImg from "@/assets/images/regenerated_image_1790138826426.jpg";
import outdoorSpaceImg from "@/assets/images/regenerated_image_1790094375919.jpg";
import diningSpaceImg from "@/assets/images/regenerated_image_1790379667046.jpg";

export function TourPage() {
  const { t, lang } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState(0);

  const spaces = [
    {
      id: "activities",
      tag: lang === "es" ? "ESTIMULACIÓN Y JUEGO" : "STIMULATION & PLAY",
      name: lang === "es" ? "Área de actividades" : "Activity Area",
      desc: lang === "es" 
        ? "Material didáctico, bloques de construcción y rincón de lectura para explorar con seguridad."
        : "Educational materials, building blocks, and reading nook to safely explore.",
      image: activitySpaceImg,
    },
    {
      id: "nap",
      tag: lang === "es" ? "DESCANSO SEGURO" : "SAFE REST",
      name: lang === "es" ? "Rincón de siesta" : "Nap & Quiet Corner",
      desc: lang === "es"
        ? "Espacios individuales y tranquilos con luz tenue para un descanso sereno y supervisado."
        : "Individual, quiet spaces with gentle lighting for peaceful, supervised rest.",
      image: napSpaceImg,
    },
    {
      id: "dining",
      tag: lang === "es" ? "NUTRICIÓN Y HOGAR" : "NUTRITION & HOME",
      name: lang === "es" ? "Comedor infantil" : "Children's Dining",
      desc: lang === "es"
        ? "Mesitas adaptadas para compartir comidas nutritivas y meriendas caseras en familia."
        : "Child-sized tables adapted for sharing wholesome meals and homemade snacks together.",
      image: diningSpaceImg,
    },
    {
      id: "backyard",
      tag: lang === "es" ? "AIRE LIBRE" : "OUTDOOR PLAY",
      name: lang === "es" ? "Patio protegido" : "Protected Backyard",
      desc: lang === "es"
        ? "Área cercada con sombra natural y juegos motores para correr y disfrutar al aire libre."
        : "Fenced outdoor area with natural shade and gross-motor play to run and enjoy.",
      image: outdoorSpaceImg,
    },
  ];

  const safetyProtocols = [
    {
      icon: LifeBuoy,
      tag: lang === "es" ? "Certificación Activa" : "Active Certification",
      title: lang === "es" ? "CPR y Primeros Auxilios" : "CPR & Pediatric First Aid",
      detail:
        lang === "es"
          ? "Personal plenamente capacitado y certificado de manera continua en soporte vital y respuesta médica pediátrica ante cualquier eventualidad."
          : "Staff continuously certified and trained in life-saving pediatric CPR, first aid, and rapid emergency intervention.",
    },
    {
      icon: ShieldCheck,
      tag: lang === "es" ? "Normativa Oficial" : "Official Compliance",
      title: lang === "es" ? "Licencia del Estado de California" : "California State License",
      detail:
        lang === "es"
          ? "Instalaciones avaladas e inspeccionadas periódicamente por Community Care Licensing de California, garantizando el máximo estándar operativo."
          : "Fully licensed and periodically inspected by California Community Care Licensing, upholding the highest childcare safety benchmarks.",
    },
    {
      icon: Sparkles,
      tag: lang === "es" ? "Higiene Pediátrica" : "Deep Hygiene",
      title: lang === "es" ? "Rutinas de Desinfección Diaria" : "Daily Sanitization Routines",
      detail:
        lang === "es"
          ? "Protocolo exhaustivo de sanitización diaria de superficies, materiales didácticos, juguetes y tapetes para proteger la salud de cada pequeño."
          : "Rigorous daily disinfection protocols across all surfaces, learning toys, rest areas, and play mats to safeguard children's health.",
    },
    {
      icon: Moon,
      tag: lang === "es" ? "Monitoreo Continuo" : "Attentive Rest",
      title: lang === "es" ? "Prácticas de Sueño Seguro" : "Safe Sleep Practices",
      detail:
        lang === "es"
          ? "Cunas y áreas de descanso individuales limpias y adaptadas por edad, supervisión visual permanente y atmósfera serena con temperatura ideal."
          : "Approved individual sleeping spaces, constant visual supervision, and peaceful, climate-controlled environments for restorative naps.",
    },
    {
      icon: Lock,
      tag: lang === "es" ? "Custodia Segura" : "Secure Custody",
      title: lang === "es" ? "Registro Estricto de Llegadas y Salidas" : "Strict Sign-In & Sign-Out",
      detail:
        lang === "es"
          ? "Control diario riguroso de asistencia y verificación estricta de identidad: los niños solo se entregan a personas previamente autorizadas."
          : "Strict attendance logs and mandatory identity verification, guaranteeing children are released only to pre-authorized family members.",
    },
  ];

  return (
    <>
      <PageHeroBanner
        variant="minimal"
        title={lang === "es" ? "Nuestro Hogar" : "Our Daycare"}
      />

      {/* Gallery of Spaces Section (Visor Interactivo con Tabs y Foto Grande) */}
      <section className="bg-white pt-16 md:pt-24 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          {/* Encabezado */}
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#76B82A] mb-2 flex items-center justify-center gap-1.5 text-center">
            <span>{lang === "es" ? "CONOCE NUESTRO ESPACIO" : "EXPLORE OUR SPACES"}</span>
            <span className="text-[#F24E86]">✦</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F8B44] tracking-tight text-center mb-3">
            {lang === "es" ? "Un vistazo a nuestro hogar antes de tu visita" : "A glimpse inside our home before your tour"}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto text-center leading-relaxed mb-12">
            {lang === "es"
              ? "Espacios familiares adaptados con amor y bajo estrictos estándares de seguridad, pensados para que cada niño juegue, aprenda y descanse con confianza."
              : "Family spaces crafted with care and meeting high safety standards, designed so every child can play, learn, and rest with total confidence."}
          </p>

          {/* Contenedor Principal: Tabs a la izquierda + Foto Grande a la derecha */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
            {/* Columna Izquierda: Lista de Pestañas */}
            <div className="md:col-span-4 flex flex-col gap-3">
              {spaces.map((item, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveTab(index)}
                    className={`w-full rounded-2xl p-4 sm:p-5 transition-all cursor-pointer text-left ${
                      isActive
                        ? "border-2 border-[#0F8B44] bg-white shadow-xs"
                        : "border border-stone-200 bg-white hover:bg-stone-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3
                        className={`text-base sm:text-lg font-black transition-colors ${
                          isActive ? "text-[#0F8B44]" : "text-stone-700"
                        }`}
                      >
                        {item.name}
                      </h3>
                      {isActive && (
                        <span className="size-2 rounded-full bg-[#0F8B44] shrink-0 ml-2" />
                      )}
                    </div>
                    {isActive && (
                      <p className="mt-2 text-stone-600 text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Columna Derecha: Visor de Foto Grande */}
            <div className="md:col-span-8">
              <div className="relative w-full h-[360px] sm:h-[460px] md:h-[520px] rounded-[2.5rem] overflow-hidden shadow-sm border-2 border-stone-200/80 bg-stone-100">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeTab}
                    src={spaces[activeTab].image}
                    alt={spaces[activeTab].name}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Onda curva inferior hacia el fondo suave de Seguridad */}
        <SectionWave fill="#F7FAF7" />
      </section>

      {/* Seguridad y Certificaciones: Respaldo Institucional (Fondo suave #F7FAF7 con tarjetas blancas) */}
      <section className="bg-[#F7FAF7] pt-16 md:pt-24 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          {/* Eyebrow */}
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#76B82A] mb-2 flex items-center justify-center gap-1.5 text-center">
            <span>{lang === "es" ? "SEGURIDAD Y RESPONSABILIDAD" : "SAFETY & CERTIFICATIONS"}</span>
            <span className="text-[#F24E86]">✦</span>
          </p>

          {/* Título H2 */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-[#0F8B44] tracking-tight text-center mb-3">
            {lang === "es"
              ? "El bienestar de tu hijo, protegido con absoluta responsabilidad"
              : "Your child's wellbeing, protected with absolute responsibility"}
          </h2>

          {/* Subtítulo */}
          <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto text-center leading-relaxed mb-12 font-normal">
            {lang === "es"
              ? "Cumplimos rigurosamente con todos los estándares del estado de California para brindarte total tranquilidad en cada minuto de su estancia."
              : "We strictly adhere to all State of California standards to give you complete peace of mind throughout every minute of their stay."}
          </p>

          {/* Grid de 5 Tarjetas Limpias (3 superiores + 2 inferiores balanceadas) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8 max-w-5xl mx-auto">
            {safetyProtocols.map((item, index) => {
              const Icon = item.icon;
              const isWide = index >= 3;
              return (
                <div
                  key={index}
                  className={`bg-white p-6 sm:p-7 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#0F8B44]/40 transition-all flex flex-col justify-between ${
                    isWide ? "lg:col-span-3" : "lg:col-span-2"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="size-12 shrink-0 rounded-2xl bg-[#EBF7EE] text-[#0F8B44] flex items-center justify-center shadow-2xs">
                        <Icon className="size-6" />
                      </div>
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#0F8B44] bg-[#F4FAF6] px-3 py-1 rounded-full border border-[#D3ECD9]">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-[#1C2B22] leading-snug mb-2">
                      {item.title}
                    </h3>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {item.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Onda curva inferior hacia el fondo blanco de Planifica tu Visita */}
        <SectionWave fill="#FFFFFF" />
      </section>

      {/* 3. CÓMO VISITARNOS (3 PASOS SENCILLOS SOBRE FONDO BLANCO) */}
      <section className="bg-white pt-16 md:pt-24 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          {/* Encabezado */}
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#76B82A] mb-2 flex items-center justify-center gap-1.5 text-center">
            <span>{lang === "es" ? "PLANIFICA TU VISITA" : "PLAN YOUR VISIT"}</span>
            <span className="text-[#F24E86]">✦</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F8B44] tracking-tight text-center mb-3">
            {lang === "es" ? "Cómo visitarnos en 3 sencillos pasos" : "How to visit us in 3 simple steps"}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto text-center leading-relaxed mb-12">
            {lang === "es"
              ? "Queremos que conozcas nuestro ambiente con total tranquilidad, sin compromisos y a tu propio ritmo."
              : "We want you to explore our environment with complete peace of mind, without pressure, and at your own pace."}
          </p>

          {/* Grid de 3 Tarjetas con números 01, 02, 03 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Paso 01 */}
            <div className="bg-[#F7FAF7] rounded-3xl p-7 sm:p-8 border border-stone-200/80 shadow-xs flex flex-col hover:border-[#F9B200]/50 hover:-translate-y-1 transition-all">
              <span className="inline-block text-4xl sm:text-5xl font-black text-[#F9B200] mb-4">
                01
              </span>
              <h3 className="text-xl font-black text-[#1C2B22] mb-2">
                {lang === "es" ? "Reserva tu sábado y hora" : "Reserve your Saturday & time"}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {lang === "es"
                  ? "Completa el breve formulario eligiendo el sábado y el horario de tu preferencia (10:00 AM a 1:00 PM) con tus datos de contacto."
                  : "Fill out the quick form choosing your preferred Saturday and time (10:00 AM to 1:00 PM) with your contact details."}
              </p>
            </div>

            {/* Paso 02 */}
            <div className="bg-[#F7FAF7] rounded-3xl p-7 sm:p-8 border border-stone-200/80 shadow-xs flex flex-col hover:border-[#F24E86]/50 hover:-translate-y-1 transition-all">
              <span className="inline-block text-4xl sm:text-5xl font-black text-[#F24E86] mb-4">
                02
              </span>
              <h3 className="text-xl font-black text-[#1C2B22] mb-2">
                {lang === "es" ? "Coordinación y confirmación" : "Coordination & confirmation"}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {lang === "es"
                  ? "Francisca te contactará vía WhatsApp o llamada para confirmar la disponibilidad y compartirte la dirección exacta de nuestro hogar."
                  : "Francisca will reach out via WhatsApp or call to confirm availability and share the exact address of our home."}
              </p>
            </div>

            {/* Paso 03 */}
            <div className="bg-[#F7FAF7] rounded-3xl p-7 sm:p-8 border border-[#D3ECD9] shadow-xs flex flex-col hover:border-[#0F8B44] hover:-translate-y-1 transition-all">
              <span className="inline-block text-4xl sm:text-5xl font-black text-[#0F8B44] mb-4">
                03
              </span>
              <h3 className="text-xl font-black text-[#0F8B44] mb-2">
                {lang === "es" ? "Conoce nuestro hogar" : "Tour our home"}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {lang === "es"
                  ? "Asiste con tu pequeño al Open House, explora cada ambiente de juego y descanso, y conversa directamente con Francisca."
                  : "Attend the Open House with your little one, explore every play and rest area, and chat directly with Francisca."}
              </p>
            </div>
          </div>

          {/* Botón CTA centrado */}
          <div className="mt-10 flex justify-center">
            <Link
              to="/contact?tab=visit"
              className="inline-flex items-center justify-center gap-2 font-black text-sm text-white bg-[#0F8B44] hover:bg-[#0b6b34] px-8 py-4 rounded-full transition-all shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>
                {lang === "es"
                  ? "Solicita tu visita →"
                  : "Schedule a Visit →"}
              </span>
            </Link>
          </div>
        </div>

        {/* Onda curva inferior hacia el fondo suave de FAQ */}
        <SectionWave fill="#F7FAF7" />
      </section>

      {/* FAQ Accordion (Fondo suave #F7FAF7 con tarjetas blancas) */}
      <section className="bg-[#F7FAF7] pt-16 md:pt-24 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 sm:mb-14">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#76B82A] mb-2 inline-flex items-center justify-center gap-1.5">
                <span>{lang === "es" ? "PREGUNTAS FRECUENTES" : "FREQUENTLY ASKED QUESTIONS"}</span>
                <SparkleAccent className="size-3.5 text-[#F9B200]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F8B44] tracking-tight">
                {lang === "es" ? "Dudas Comunes sobre Nuestro Hogar y Seguridad" : "Common Questions About Our Home & Safety"}
              </h2>
              <div className="mt-2 flex justify-center">
                <ZigzagAccent className="text-[#F9B200] w-16 h-3" />
              </div>
              <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
                {lang === "es"
                  ? "Conoce cómo cuidamos, protegemos y alimentamos a cada pequeño en un entorno familiar."
                  : "Learn how we care for, protect, and nourish every child in a loving home environment."}
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q:
                    lang === "es"
                      ? "¿Cómo garantizan la seguridad de las instalaciones?"
                      : "How do you guarantee facility safety?",
                  a:
                    lang === "es"
                      ? "Contamos con licencia oficial del Estado de California (Community Care Licensing) y cumplimos estrictamente con todas las normativas de seguridad, salidas de emergencia y prevención. Francisca y todo el equipo cuentan con certificaciones vigentes en CPR pediátrico y primeros auxilios, manteniendo supervisión activa y constante en todo momento."
                      : "We are officially licensed by the State of California (Community Care Licensing) and strictly adhere to all safety, health, and emergency standards. Francisca and our team maintain active certifications in pediatric CPR and first aid, ensuring attentive and constant supervision throughout the day.",
                },
                {
                  q:
                    lang === "es"
                      ? "¿Incluyen las comidas y meriendas diarias?"
                      : "Are daily meals and snacks included?",
                  a:
                    lang === "es"
                      ? "¡Sí! Servimos desayunos, almuerzos y meriendas balanceadas recién preparadas en casa, siguiendo las pautas nutricionales del USDA. Adaptamos con total cuidado los menús ante cualquier alergia, intolerancia o preferencia alimentaria comunicada por los padres."
                      : "Yes! We serve freshly prepared, balanced homemade breakfasts, lunches, and snacks following USDA nutritional guidelines. We carefully adapt menus for any allergies, intolerances, or dietary preferences indicated by parents.",
                },
                {
                  q:
                    lang === "es"
                      ? "¿Cómo es el ambiente para la siesta y el descanso?"
                      : "What is the environment like for naptime and rest?",
                  a:
                    lang === "es"
                      ? "Disponemos de un área serena, acogedora y con luz tenue, equipada con cunas individuales y colchonetas higiénicas asignadas a cada niño. Seguimos estrictos protocolos de sueño seguro con monitoreo presencial continuo para que cada pequeño descanse y recargue energías en total tranquilidad."
                      : "We provide a serene, cozy, softly lit space equipped with sanitized individual cribs and rest mats assigned to each child. We follow strict safe sleep protocols with continuous in-person monitoring so every little one rests peacefully.",
                },
                {
                  q:
                    lang === "es"
                      ? "¿Cómo podemos conocer el espacio en persona?"
                      : "How can we tour the space in person?",
                  a:
                    lang === "es"
                      ? "Organizamos un Open House familiar todos los sábados de 10:00 AM a 1:00 PM. Por la seguridad y privacidad de los niños, las visitas se realizan con previa confirmación. Puedes reservar tu sábado completando nuestro formulario de visita o escribiéndole directamente a Francisca por WhatsApp."
                      : "We host a family Open House every Saturday from 10:00 AM to 1:00 PM. For children's safety and privacy, tours are scheduled with advance confirmation. You can reserve your Saturday through our visit form or by messaging Francisca directly on WhatsApp.",
                },
              ].map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.q}
                    className={`rounded-2xl sm:rounded-3xl border border-gray-100 transition-all bg-white overflow-hidden shadow-sm ${
                      isOpen ? "ring-2 ring-[#0F8B44]/20 border-[#0F8B44]" : "hover:border-stone-300"
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
                          isOpen ? "bg-[#0F8B44] text-white rotate-180" : "bg-stone-100 text-stone-500"
                        }`}
                      >
                        <ChevronDown className="size-4" />
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-stone-100">
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

        {/* Onda curva inferior hacia el fondo blanco de Open House Band */}
        <SectionWave fill="#FFFFFF" />
      </section>

      {/* Llamado a la acción consistente con Open House y Visitas */}
      <OpenHouseBand bgClass="bg-white" />
    </>
  );
}

