import React from "react";
import toddlerLeftDefault from "@/assets/images/regenerated_image_1790259794320.png";
import toddlerRightDefault from "@/assets/images/regenerated_image_1790138533630.jpg";
import {
  DoodleGirlJumping,
  DoodleBoyJumping,
  DoodleSpiralGreen,
  DoodleStarGreen,
} from "@/components/page-elements";

interface PageHeroBannerProps {
  title: string;
  subtitle?: string;
  description?: string;
  leftImage?: string;
  rightImage?: string;
  variant?: "default" | "minimal";
  useDoodles?: boolean;
  theme?: "green" | "light";
  showWave?: boolean;
  waveFill?: string;
  className?: string;
  pyClassName?: string;
}

export function PageHeroBanner({
  title,
  subtitle,
  description,
  leftImage = toddlerLeftDefault,
  rightImage = toddlerRightDefault,
  variant = "default",
  useDoodles = true,
  theme = "green",
  showWave,
  waveFill = "#FFFFFF",
  className = "",
  pyClassName,
}: PageHeroBannerProps) {
  const isMinimal = variant === "minimal" || (!subtitle && !description);
  const shouldRenderWave = showWave ?? (isMinimal || theme === "green");
  const isGreen = theme === "green";

  const defaultPy = isMinimal
    ? isGreen
      ? "pt-14 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-24"
      : "pt-14 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-24"
    : isGreen
    ? "py-16 sm:py-24"
    : "py-16 sm:py-24 border-b border-[#E2F0D9]/60";

  return (
    <section
      className={`relative -mt-0.5 ${pyClassName || defaultPy} ${
        isGreen ? "bg-[#0F8B44]" : isMinimal ? "bg-[#EBF7EE]" : "bg-[#F4FAF6]"
      } overflow-hidden flex items-center justify-center border-0 border-none ${className}`}
      style={{ marginTop: "-2px", border: "none", borderTop: "none", outline: "none" }}
    >
      {/* DECORACIONES LATERALES */}
      {useDoodles ? (
        <>
          {/* A la izquierda: Monigote / Muñequito infantil amarillo (#F9B200) */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-10 lg:left-24 z-20">
            <DoodleBoyJumping color="#F9B200" className="animate-wiggle" />
          </div>

          {/* A la derecha superior: Muñequita / Niña rosada (#F24E86) */}
          <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-10 lg:right-24 z-20">
            <DoodleGirlJumping color="#F24E86" className="animate-float" />
          </div>

          {/* Detalles decorativos del Home: Espiral punteada y Estrella */}
          <DoodleSpiralGreen
            stroke="#FFFFFF"
            className="absolute -top-3 left-1/4 -translate-x-1/2 z-10 animate-spin-slow opacity-25 hidden sm:block"
          />
          <DoodleStarGreen
            stroke="#F9B200"
            className="absolute bottom-16 right-8 lg:right-20 z-20 animate-float-delayed hidden sm:block"
          />
        </>
      ) : (
        <>
          {/* FOTOS LATERALES EN CASO DE NO USAR DOODLES */}
          <div className="hidden md:block absolute left-6 lg:left-16 xl:left-24 top-1/2 -translate-y-1/2 pointer-events-none z-10">
            <div className="relative">
              <div
                className={`absolute -inset-4 ${
                  isGreen ? "bg-white/10" : "bg-white/80"
                } rounded-full blur-md -z-10 pointer-events-none`}
              />
              <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-[2.25rem] lg:rounded-[2.75rem] overflow-hidden shadow-xl border-4 border-white rotate-[-6deg] bg-white">
                <img src={leftImage} alt="" className="w-full h-full object-cover block" />
              </div>
            </div>
          </div>

          <div className="hidden md:block absolute right-6 lg:right-16 xl:right-24 top-1/2 -translate-y-1/2 pointer-events-none z-10">
            <div className="relative">
              <div
                className={`absolute -inset-4 ${
                  isGreen ? "bg-white/10" : "bg-white/80"
                } rounded-full blur-md -z-10 pointer-events-none`}
              />
              <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-[2.25rem] lg:rounded-[2.75rem] overflow-hidden shadow-xl border-4 border-white rotate-[6deg] bg-white">
                <img src={rightImage} alt="" className="w-full h-full object-cover block" />
              </div>
            </div>
          </div>
        </>
      )}

      {/* 3. NÚCLEO CENTRAL (TÍTULO Y TEXTOS) */}
      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        {/* Eyebrow (solo en modo default) */}
        {!isMinimal && subtitle && (
          <p
            className={`text-xs sm:text-sm font-bold uppercase tracking-widest ${
              isGreen ? "text-emerald-200" : "text-[#76B82A]"
            } mb-2 flex items-center justify-center gap-1.5`}
          >
            <span>{subtitle}</span>
            <span className="text-[#F24E86]">✦</span>
          </p>
        )}

        {/* Título H1 imponente */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-black text-white tracking-tight text-center"
        >
          {title}
        </h1>

        {/* Onda decorativa amarilla (solo en modo default) */}
        {!isMinimal && (
          <div className="flex justify-center my-3">
            <svg width="48" height="10" viewBox="0 0 48 12" fill="none" className="mx-auto">
              <path
                d="M2 10L10 2L18 10L26 2L34 10L42 2L46 6"
                stroke="#F9B200"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}

        {/* Descripción corta opcional (solo en modo default) */}
        {!isMinimal && description && (
          <p
            className={`text-sm sm:text-base max-w-2xl mx-auto leading-relaxed ${
              isGreen ? "text-emerald-50/90" : "text-stone-600"
            }`}
          >
            {description}
          </p>
        )}
      </div>

      {/* 5. ONDA CURVA INFERIOR (MISMO PATH Y VIEWBOX DEL HERO HOME) */}
      {shouldRenderWave && (
        <div className="absolute -bottom-[1px] left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none" style={{ outline: "none", border: "none" }}>
          <svg
            viewBox="0 0 1440 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-12 sm:h-16 lg:h-20 block"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C320,130 680,10 1060,90 C1260,130 1380,50 1440,70 L1440,140 L0,140 Z"
              fill={waveFill}
            />
          </svg>
        </div>
      )}
    </section>
  );
}
