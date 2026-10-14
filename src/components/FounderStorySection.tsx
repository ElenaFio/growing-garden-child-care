import React from "react";
import { Link } from "@/lib/router";
import { francisca } from "@/assets/images";
import { SectionWave } from "@/components/page-elements";

interface FounderStorySectionProps {
  lang?: string;
}

export function FounderStorySection({ lang = "es" }: FounderStorySectionProps) {
  const isEs = lang === "es";

  return (
    <section className="bg-[#F7FAF7] pt-16 md:pt-24 pb-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA - VISUAL (lg:col-span-5) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Marco redondeado orgánico */}
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-xl bg-stone-100 border border-stone-200/80 relative">
                <img
                  src={francisca}
                  alt={isEs ? "Francisca - Fundadora de Growing Garden ChildCare" : "Francisca - Founder of Growing Garden ChildCare"}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Badge flotante en la esquina inferior derecha */}
              <div className="absolute -bottom-5 -right-2 sm:-right-4 bg-[#0F8B44] text-white rounded-2xl p-4 sm:p-5 shadow-xl border-2 border-white min-w-[200px]">
                <p className="font-bold text-base sm:text-lg text-white leading-tight mb-0.5">
                  {isEs ? "Francisca • Fundadora" : "Francisca • Founder"}
                </p>
                <p className="text-xs text-[#F9B200] font-semibold leading-snug">
                  {isEs ? "Más de 26 años de experiencia y vocación" : "26+ years of experience & dedicated care"}
                </p>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA - TEXTO CONDENSADO (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow oficial */}
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#76B82A] mb-2 flex items-center gap-1.5">
              <span>{isEs ? "CONOCE NUESTRA ESENCIA" : "OUR ESSENCE"}</span>
              <span className="text-[#F24E86]">✦</span>
            </p>

            {/* Titular H2 corto */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F8B44] tracking-tight leading-tight mb-3">
              {isEs
                ? "Cuidado con amor de hogar, guiado por la experiencia"
                : "Nurtured with family love, guided by experience"}
            </h2>

            {/* Onda en zigzag amarilla (#F9B200) */}
            <div className="mb-2">
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

            {/* Párrafo breve */}
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed mt-5 mb-6">
              {isEs
                ? "Fundado por Francisca hace más de dos décadas, Growing Garden nació de la vocación de ofrecer a las familias de Hayward un segundo hogar cálido y seguro, donde cada niño florece a su propio ritmo con afecto, respeto y atención personalizada."
                : "Founded by Francisca over two decades ago, Growing Garden was born out of a heartfelt dedication to offer Hayward families a warm and safe second home, where every child blossoms at their own rhythm with affection, respect, and personalized attention."}
            </p>

            {/* Bloque de cita destacada (Quote) */}
            <blockquote className="border-l-4 border-[#76B82A] bg-[#FAFAF7] p-5 rounded-r-2xl italic text-[#1C2B22] text-base mb-8 w-full">
              <p>
                {isEs
                  ? "“El amor, la paciencia y las buenas experiencias en los primeros años son la semilla que marcará el futuro de cada niño.”"
                  : "“Love, patience, and joyful experiences in the earliest years are the seeds that shape each child's future.”"}
              </p>
              <span className="block not-italic font-bold text-sm text-[#0F8B44] mt-2">
                {isEs
                  ? "— Francisca, Directora de Growing Garden"
                  : "— Francisca, Director of Growing Garden"}
              </span>
            </blockquote>

            {/* Botón de llamado a la acción */}
            <Link
              to="/about-us"
              className="inline-flex items-center gap-2 font-bold text-sm text-white bg-[#0F8B44] hover:bg-[#0b6b34] px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all w-fit cursor-pointer"
            >
              <span>{isEs ? "Conoce nuestra historia completa" : "Discover our full story"}</span>
              <span>→</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Onda curva inferior hacia el fondo blanco de la siguiente sección */}
      <SectionWave fill="#FFFFFF" />
    </section>
  );
}
