import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@/lib/router";
import { SectionWave } from "@/components/page-elements";
import preschoolImage from "@/assets/images/regenerated_image_1790138533630.jpg";
import activityAreaImg from "@/assets/images/activity_area.jpg";
import dropInImage from "@/assets/images/regenerated_image_1791566697661.jpg";
import nightCareImage from "@/assets/images/regenerated_image_1790138826426.jpg";
import artWorkshopImg from "@/assets/images/regenerated_image_1791567349560.jpg";

interface ProgramsCarouselSectionProps {
  lang?: string;
}

const programsData = [
  {
    id: "full-time",
    href: "/nuestros-programas#full-time",
    tab: "Tiempo Completo",
    tabEn: "Full-Time",
    badge: "LUNES A VIERNES • 6:00 AM – 3:00 PM",
    badgeEn: "MONDAY TO FRIDAY • 6:00 AM – 3:00 PM",
    title: "Tiempo Completo",
    titleEn: "Full-Time Care",
    desc: "Jornada integral diurna pensada para familias con jornada laboral completa. Incluye desayuno, actividades educativas y preparación para kinder, juego libre guiado, almuerzo nutritivo y hora de descanso.",
    descEn: "Full-day comprehensive care designed for families with full-time work schedules. Includes breakfast, educational and kindergarten-readiness activities, guided free play, nutritious lunch, and rest time.",
    image: preschoolImage,
  },
  {
    id: "part-time",
    href: "/nuestros-programas#part-time",
    tab: "Medio Tiempo",
    tabEn: "Part-Time",
    badge: "TURNO MAÑANA • 4 A 5 HORAS",
    badgeEn: "MORNING SHIFT • 4 TO 5 HOURS",
    title: "Medio Tiempo",
    titleEn: "Part-Time Care",
    desc: "Rutina matutina estructurada ideal para la adaptación escolar y socialización temprana. Enfocada en círculos de lectura, expresión artística, desarrollo motriz y almuerzo antes de volver a casa.",
    descEn: "Structured morning routine ideal for school adjustment and early socialization. Focused on reading circles, artistic expression, motor skills, and lunch before heading home.",
    image: activityAreaImg,
  },
  {
    id: "drop-in",
    href: "/nuestros-programas#drop-in",
    tab: "Cuidado Ocasional",
    tabEn: "Drop-In Care",
    badge: "SIN CONTRATO • DESDE $20 / HORA",
    badgeEn: "NO CONTRACT • FROM $20 / HOUR",
    title: "Cuidado Ocasional & Por Horas",
    titleEn: "Drop-In & Hourly Care",
    desc: "Respaldo flexible por horas, medio día o jornada completa para emergencias de última hora, diligencias personales de los padres (Parents' Break) o cobertura en vacaciones escolares.",
    descEn: "Flexible backup care by the hour, half day, or full day for last-minute emergencies, personal errands (Parents' Break), or school holiday coverage.",
    image: dropInImage,
  },
  {
    id: "night-care",
    href: "/nuestros-programas#night-care",
    tab: "Cuidado Nocturno",
    tabEn: "Night Care",
    badge: "TURNO NOCHE • 5:00 PM – 11:00 PM",
    badgeEn: "EVENING SHIFT • 5:00 PM – 11:00 PM",
    title: "Cuidado Nocturno & Date Night",
    titleEn: "Night & Date Night Care",
    desc: "Atención cálida y segura diseñada para jornadas de trabajo vespertinas o salidas en pareja. Incluye cena casera, dinámicas tranquilas y un ambiente relajado preparado para la hora de dormir.",
    descEn: "Warm, secure care tailored for evening work shifts or couple date nights. Includes homemade dinner, calm evening activities, and a soothing atmosphere ready for bedtime.",
    image: nightCareImage,
  },
  {
    id: "saturday-workshop",
    href: "/nuestros-programas#saturday-workshop",
    tab: "Taller de Sábados",
    tabEn: "Saturday Workshop",
    badge: "FIN DE SEMANA • 4 SESIONES",
    badgeEn: "WEEKEND • 4 SESSIONS",
    title: "Taller de Sábados: Arte + Yoga",
    titleEn: "Saturday Workshop: Art + Yoga",
    desc: "Espacio vivencial matutino o vespertino donde los niños exploran su creatividad con pintura y manualidades, complementado con yoga infantil para potenciar la concentración y el equilibrio emocional.",
    descEn: "Hands-on morning or afternoon workshop where children explore creativity through painting and crafts, complemented with kids' yoga to enhance focus and emotional well-being.",
    image: artWorkshopImg,
  },
];

export function ProgramsCarouselSection({ lang = "es" }: ProgramsCarouselSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const isEs = lang === "es";

  return (
    <section className="pt-16 md:pt-24 pb-0 bg-white overflow-hidden">
      {/* Encabezado y Pestañas */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        {/* Eyebrow */}
        <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#76B82A] mb-2 flex items-center justify-center gap-1.5">
          <span>
            {isEs
              ? "PROGRAMAS Y MODALIDADES CON LICENCIA ESTATAL"
              : "STATE LICENSED PROGRAMS & SCHEDULES"}
          </span>
          <span className="text-[#F24E86]">✦</span>
        </p>

        {/* H2 */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F8B44] tracking-tight mb-2 text-center">
          {isEs ? "Un segundo hogar para cada necesidad" : "A second home for every need"}
        </h2>

        {/* Onda decorativa amarilla (#F9B200) */}
        <div className="flex justify-center mb-3">
          <svg width="44" height="10" viewBox="0 0 48 12" fill="none">
            <path
              d="M2 10L10 2L18 10L26 2L34 10L42 2L46 6"
              stroke="#F9B200"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Subtítulo / Opcional */}
        <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
          {isEs
            ? "Cuidado personalizado de 1 a 13 años adaptado al horario y rutina de tu familia."
            : "Personalized care for ages 1 to 13 adapted to your family's schedule and routine."}
        </p>

        {/* Pestañas sincronizadas (Clic para cambiar) */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 bg-stone-200/70 rounded-full">
          {programsData.map((prog, idx) => (
            <button
              key={prog.id}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeIdx === idx
                  ? "bg-[#0F8B44] text-white shadow-md scale-105"
                  : "text-stone-700 hover:text-black hover:bg-white/50"
              }`}
            >
              {isEs ? prog.tab : prog.tabEn}
            </button>
          ))}
        </div>
      </div>

      {/* Tira Horizontal Centrada sin interferencia de scroll */}
      <div className="w-full overflow-hidden py-10">
        <motion.div
          className="flex items-center gap-8 shrink-0"
          animate={{
            // Centrado exacto: en desktop 490px (mitad de 980px), adaptativo en móviles
            x: `calc(50vw - (min(980px, 94vw) / 2) - (${activeIdx} * (min(980px, 94vw) + 32px)))`,
          }}
          transition={{ type: "spring", stiffness: 220, damping: 28 }}
          style={{ width: "max-content" }}
        >
          {programsData.map((prog, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={prog.id}
                onClick={() => setActiveIdx(idx)}
                style={{ width: "min(980px, 94vw)" }}
                className={`bg-white rounded-[2.75rem] border border-[#E2F0D9] p-9 sm:p-10 flex flex-col md:flex-row items-center gap-10 lg:gap-12 shrink-0 cursor-pointer transition-all duration-500 ${
                  isActive
                    ? "opacity-100 scale-100 shadow-[0_18px_45px_-12px_rgba(15,139,68,0.09)] ring-1 ring-[#0F8B44]/20"
                    : "opacity-45 scale-95 hover:opacity-75 shadow-sm border-stone-200/60"
                }`}
              >
                {/* 1. Contenedor de la imagen: escala proporcional a 4:3 (480px x 360px) */}
                <div className="w-full md:w-[480px] h-[320px] sm:h-[360px] rounded-[2rem] overflow-hidden bg-[#F4FAF6] shrink-0 border border-stone-100 relative">
                  <img
                    src={prog.image}
                    alt={isEs ? prog.title : prog.titleEn}
                    className="w-full h-full object-cover block transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* 2. Columna de texto a la derecha */}
                <div className="flex-1 flex flex-col justify-center text-left py-2">
                  {/* Título principal */}
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-[#0F8B44] leading-tight mb-2">
                    {isEs ? prog.title : prog.titleEn}
                  </h3>

                  {/* Badge pequeño */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0F8B44] bg-[#E8F6ED] px-3.5 py-1 rounded-full border border-[#0F8B44]/15 w-fit">
                      {isEs ? prog.badge : prog.badgeEn}
                    </span>
                  </div>

                  {/* Onda decorativa amarilla (#F9B200) */}
                  <svg width="36" height="8" viewBox="0 0 48 12" fill="none" className="mb-3">
                    <path
                      d="M2 10L10 2L18 10L26 2L34 10L42 2L46 6"
                      stroke="#F9B200"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {/* Párrafo descriptivo */}
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                    {isEs ? prog.desc : prog.descEn}
                  </p>

                  {/* Botón CTA */}
                  <div>
                    <Link
                      to={prog.href}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center gap-2 font-bold text-sm text-white bg-[#0F8B44] hover:bg-[#0b6b34] px-6 py-3 rounded-full transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md active:scale-95 w-fit"
                    >
                      <span>{isEs ? "Explorar este programa →" : "Explore this program →"}</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Onda curva inferior hacia el fondo suave de la siguiente sección */}
      <SectionWave fill="#F7FAF7" />
    </section>
  );
}
