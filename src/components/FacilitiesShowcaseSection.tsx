import React from "react";
import { Link } from "@/lib/router";

interface FacilitiesShowcaseSectionProps {
  lang?: string;
}

const facilitySpaces = [
  {
    id: "outdoor-play",
    tagEs: "Al Aire Libre",
    tagEn: "Outdoors",
    tagClass: "bg-[#E8F6ED] text-[#0F8B44]",
    titleEs: "Patio de juegos protegido",
    titleEn: "Protected outdoor play yard",
    descEs: "Área cercada y supervisada para actividades motrices, juegos en grupo y tiempo al sol todos los días.",
    descEn: "Securely fenced and supervised area for gross motor skills, group play, and daily sunshine time.",
    image: "https://images.unsplash.com/photo-1567057420215-0fa8693af964?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "learning-room",
    tagEs: "Juego y Creatividad",
    tagEn: "Play & Creativity",
    tagClass: "bg-[#FEF0CD] text-[#B87A00]",
    titleEs: "Rincón de arte y motricidad",
    titleEn: "Art & motor skills corner",
    descEs: "Materiales didácticos, cuentos bilingües y estaciones de juego diseñadas para incentivar su curiosidad e imaginación.",
    descEn: "Educational materials, bilingual storybooks, and play stations designed to spark curiosity and imagination.",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "nap-rest",
    tagEs: "Descanso Seguro",
    tagEn: "Safe Rest",
    tagClass: "bg-[#E5F7FD] text-[#0284C7]",
    titleEs: "Espacio tranquilo de siesta",
    titleEn: "Quiet nap & rest sanctuary",
    descEs: "Ambiente silencioso, cunas homologadas y rutinas de descanso respetadas con supervisión presencial constante.",
    descEn: "Peaceful environment, certified individual cribs, and respected nap schedules with constant in-person supervision.",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "dining-kitchen",
    tagEs: "Nutrición Casera",
    tagEn: "Home Nutrition",
    tagClass: "bg-[#FDE8EF] text-[#E11D48]",
    titleEs: "Comedor cálido y saludable",
    titleEn: "Warm & wholesome dining",
    descEs: "Superficies desinfectadas donde disfrutan sus desayunos, almuerzos caseros balanceados y meriendas nutritivas.",
    descEn: "Sanitized surfaces where little ones enjoy balanced homemade breakfasts, lunches, and nutritious fresh snacks.",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=900&q=80"
  }
];

export function FacilitiesShowcaseSection({ lang = "es" }: FacilitiesShowcaseSectionProps) {
  const isEs = lang === "es";

  return (
    <section className="py-20 sm:py-28 bg-[#FAFAF7] relative overflow-hidden border-t border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. ENCABEZADO */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#76B82A] mb-2 flex items-center justify-center gap-1.5">
            <span>{isEs ? "ESPACIOS PENSADOS PARA ELLOS" : "SPACES DESIGNED FOR THEM"}</span>
            <span className="text-[#F24E86]">✦</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F8B44] tracking-tight mb-2 text-center">
            {isEs
              ? "Un segundo hogar seguro, limpio y estimulante"
              : "A safe, clean, and inspiring second home"}
          </h2>
          <div className="flex justify-center mb-4">
            <svg width="48" height="12" viewBox="0 0 48 12" fill="none">
              <path
                d="M2 10L10 2L18 10L26 2L34 10L42 2L46 6"
                stroke="#F9B200"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto text-center mt-3 mb-2 leading-relaxed">
            {isEs
              ? "Instalaciones hogareñas completamente adaptadas a las normativas de seguridad de California, pensadas para que cada pequeño explore con confianza y descanse en paz."
              : "Home-based childcare spaces fully aligned with California safety standards, thoughtfully crafted for little ones to explore with confidence and rest peacefully."}
          </p>
        </div>

        {/* 2. GRID DE 4 ESPACIOS REALES (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {facilitySpaces.map((space) => (
            <div
              key={space.id}
              className="bg-white rounded-[2rem] p-6 border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                {/* Foto */}
                <div className="rounded-[1.5rem] aspect-[16/10] overflow-hidden bg-stone-100 w-full mb-5 relative shadow-inner">
                  <img
                    src={space.image}
                    alt={isEs ? space.titleEs : space.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Tag de Categoría */}
                <span
                  className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${space.tagClass}`}
                >
                  {isEs ? space.tagEs : space.tagEn}
                </span>

                {/* Título */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#1C2B22] mb-2 leading-snug">
                  {isEs ? space.titleEs : space.titleEn}
                </h3>

                {/* Texto */}
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  {isEs ? space.descEs : space.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 3. LLAMADO A LA ACCIÓN FINAL */}
        <div className="flex justify-center">
          <Link
            to="/facilities"
            className="inline-flex items-center gap-2 font-bold text-sm text-[#0F8B44] bg-white hover:bg-[#0F8B44] hover:text-white border border-[#0F8B44] px-8 py-3.5 rounded-full shadow-xs hover:shadow-md transition-all mx-auto cursor-pointer"
          >
            <span>
              {isEs
                ? "Agenda una visita presencial a nuestras instalaciones"
                : "Schedule an in-person tour of our facilities"}
            </span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
