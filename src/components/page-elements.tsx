import type { ReactNode } from "react";
import { Check, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/router";
import { useLanguage } from "@/lib/i18n";
import { gardenChildren } from "@/assets/images";

export function ZigzagAccent({ className = "text-[#F9B200]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 54 12" fill="none" className={`h-3 w-14 inline-block ${className}`} aria-hidden="true">
      <path
        d="M2 9.5L10 2.5L18 9.5L26 2.5L34 9.5L42 2.5L50 9.5"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarAccent({ className = "size-5 text-[#F9B200]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`inline-block ${className}`} aria-hidden="true">
      <path d="M12 1.8l2.6 7 7.4.4-5.7 4.7 1.9 7.3-6.2-4.2-6.2 4.2 1.9-7.3-5.7-4.7 7.4-.4L12 1.8z" />
    </svg>
  );
}

export function SparkleAccent({ className = "size-4 text-[#F24E86]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`inline-block ${className}`} aria-hidden="true">
      <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
    </svg>
  );
}

export function DoodleSun({ className = "size-10 text-[#F9B200]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" className={`inline-block ${className}`} aria-hidden="true">
      <circle cx="32" cy="32" r="13" fill="#F9B200" fillOpacity="0.18" />
      <path d="M32 6v7M32 51v7M6 32h7M51 32h7M13.6 13.6l5 5M45.4 45.4l5 5M13.6 50.4l5-5M45.4 18.6l5-5" />
    </svg>
  );
}

export function SectionWave({ fill, className = "", flip = false }: { fill: string; className?: string; flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden leading-none pointer-events-none relative -mb-[1px] block z-10 ${className}`} style={{ outline: "none", border: "none" }}>
      <svg 
        viewBox="0 0 1440 140" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={`w-full h-10 sm:h-14 md:h-18 lg:h-20 block ${flip ? "rotate-180" : ""}`}
        preserveAspectRatio="none"
      >
        <path 
          d="M0,40 C320,130 680,10 1060,90 C1260,130 1380,50 1440,70 L1440,140 L0,140 Z" 
          fill={fill} 
        />
      </svg>
    </div>
  );
}

export function DoodleWavyCurve({ className = "text-[#F9B200]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 130 18" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" className={`inline-block ${className}`} aria-hidden="true">
      <path d="M3 13c13-10 26-10 39 0s26 10 39 0 26-10 39 0" />
    </svg>
  );
}

export function DoodleStarOutline({ className = "size-6 text-[#F9B200]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={`inline-block ${className}`} aria-hidden="true">
      <path d="M16 3l3.6 8.5L29 13l-6.8 6 2 9.4L16 23.6 7.8 28.4l2-9.4L3 13l9.4-1.5L16 3z" />
    </svg>
  );
}

export function PageIntro({ kicker, title, intro, children }: { kicker: string; title: string; intro: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-[#F0F6EC]/60 border-b border-[#E2E7DF]">
      <div className="section-shell grid min-h-[400px] items-center gap-10 py-14 md:grid-cols-[1.2fr_.8fr] md:py-20">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#0F8B44] shadow-xs border border-[#E2E7DF]">
              <Sprout className="size-3.5 text-[#76B82A]" />
              {kicker}
            </span>
            <StarAccent className="size-4 text-[#F9B200]" />
          </div>
          <div className="relative">
            <h1 className="max-w-4xl text-4xl leading-[1.08] text-[#0F8B44] sm:text-5xl md:text-6xl font-black">
              {title}
            </h1>
            <div className="mt-2">
              <ZigzagAccent className="text-[#F9B200] w-16 h-3" />
            </div>
          </div>
          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-[#46554D] font-normal">{intro}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

export function OpenHouseBand({ bgClass = "bg-white", waveFill = "#0B5D2D" }: { bgClass?: string; waveFill?: string }) {
  const { lang } = useLanguage();
  return (
    <section className={`pt-16 md:pt-24 pb-0 ${bgClass} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="bg-[#F4FAF6] border-2 border-[#E2F0D9] rounded-[3rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-sm">
          {/* Detalles de fondo decorativos (doodles & manchas pastel) */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#FDE8EF] rounded-full blur-3xl opacity-70 pointer-events-none" aria-hidden="true" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#FEF3D6] rounded-full blur-3xl opacity-70 pointer-events-none" aria-hidden="true" />
          
          {/* Avioncito de papel trazado en línea sutil */}
          <div className="absolute top-7 left-1/3 opacity-30 pointer-events-none hidden sm:block" aria-hidden="true">
            <svg className="w-12 h-12 text-[#76B82A] rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" />
            </svg>
          </div>

          {/* Pequeños destellos vectoriales */}
          <div className="absolute top-8 right-1/4 opacity-40 pointer-events-none hidden md:block" aria-hidden="true">
            <SparkleAccent className="size-6 text-[#F9B200]" />
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 relative z-10">
            {/* Columna Izquierda (Copy y Acción) */}
            <div className="flex-1 max-w-xl flex flex-col justify-center">
              {/* Eyebrow sutil */}
              <div className="mb-3">
                <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#76B82A] flex items-center gap-1.5">
                  <span>{lang === "es" ? "TU FAMILIA ES PRIMERO" : "YOUR FAMILY FIRST"}</span>
                  <span className="text-[#F24E86]">✦</span>
                </p>
              </div>

              {/* Título H2 imponente y cálido */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C2B22] tracking-tight leading-[1.15] mb-4">
                {lang === "es" ? "Dale a tu pequeño el cuidado y amor que merece" : "Give your little one the love & care they deserve"}
              </h2>

              {/* Copy descriptivo verídico */}
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-lg mb-3 font-normal">
                {lang === "es"
                  ? "Un segundo hogar seguro en Hayward donde cada niño aprende, sonríe y crece en familia. Agenda una visita para conocer nuestras instalaciones y conversar en persona con Francisca sobre los horarios y programas ideales para tu rutina."
                  : "A secure second home in Hayward where every child learns, smiles, and grows like family. Schedule a visit to tour our home and speak in person with Francisca about schedules and programs that best suit your routine."}
              </p>
              <p className="text-xs sm:text-sm font-bold text-[#0F8B44] bg-[#EBF7EE] p-3 rounded-2xl border border-[#D3ECD9] max-w-lg mb-8">
                🗓 {lang === "es"
                  ? "Open House los sábados de 10:00 AM a 1:00 PM (previa confirmación)"
                  : "Saturday Open House (10:00 AM – 1:00 PM) · By appointment"}
              </p>

              {/* Botón CTA principal */}
              <div>
                <Link
                  to="/contact?tab=tour"
                  className="inline-flex items-center justify-center font-black text-sm sm:text-base text-white bg-[#0F8B44] hover:bg-[#0b6b34] px-8 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>{lang === "es" ? "Agendar una visita →" : "Schedule a Visit →"}</span>
                </Link>
              </div>
            </div>

            {/* Columna Derecha (Fotomontaje lúdico de niños - Tamaño Ampliado) */}
            <div className="shrink-0 flex justify-center items-center relative mt-6 lg:mt-0 w-full lg:w-auto">
              <div className="relative w-full max-w-[460px] flex justify-center">
                {/* Foto principal ampliada */}
                <div className="relative w-full max-w-[460px] h-[340px] sm:h-[380px] lg:h-[400px] shrink-0 rounded-[2.5rem] overflow-hidden shadow-md border-2 border-stone-200/80 bg-white">
                  <img
                    src={gardenChildren}
                    alt={lang === "es" ? "Niños en Growing Garden sonriendo en actividad al aire libre" : "Happy children outdoors at Growing Garden"}
                    className="w-full h-full object-cover block"
                    loading="lazy"
                  />
                </div>

                {/* Doodles flotantes */}
                <div className="absolute -top-3 -right-3 size-8 rounded-full bg-[#19B2E6]/20 flex items-center justify-center text-[#19B2E6] font-bold text-sm shadow-xs pointer-events-none" aria-hidden="true">
                  ✦
                </div>
                <div className="absolute -top-5 left-8 size-7 text-[#F9B200] pointer-events-none" aria-hidden="true">
                  <StarAccent className="size-6 text-[#F9B200]" />
                </div>
                <div className="absolute -bottom-3 -right-2 size-11 rounded-2xl bg-[#76B82A] text-white flex items-center justify-center shadow-md font-black text-lg border-2 border-white rotate-6 pointer-events-none" aria-hidden="true">
                  🌱
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionWave fill={waveFill} />
    </section>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-[#1C2B22]">
          <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#76B82A] text-white shadow-2xs">
            <Check className="size-3.5 stroke-[3]" />
          </span>
          <span className="font-medium">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export const fieldClass =
  "min-h-12 w-full rounded-2xl border border-[#DDE3D9] bg-white px-4 text-sm outline-none transition focus:border-[#0F8B44] focus:ring-2 focus:ring-[#0F8B44]/20 text-[#1C2B22]";

export function DoodleGirlJumping({ className = "", color = "#FF9EC5" }: { className?: string; color?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 80 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-20 sm:w-20 sm:h-24 drop-shadow-sm"
      >
        {/* Head */}
        <circle cx="40" cy="20" r="12" fill={color} />
        {/* Pigtails / Hair ribbons */}
        <path d="M28 17C22 13 18 17 19 23C22 23 27 21 28 17Z" fill={color} />
        <path d="M52 17C58 13 62 17 61 23C58 23 53 21 52 17Z" fill={color} />
        {/* Dress / Body */}
        <path d="M34 32L24 58H56L46 32H34Z" fill={color} />
        {/* Jumping Arms */}
        <path
          d="M32 36L14 26M48 36L66 26"
          stroke={color}
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        {/* Jumping Legs */}
        <path
          d="M32 58L22 78M48 58L58 78"
          stroke={color}
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        {/* Happy face */}
        <circle cx="36" cy="19" r="1.5" fill="#1C2B22" />
        <circle cx="44" cy="19" r="1.5" fill="#1C2B22" />
        <path d="M37 24C38.5 26 41.5 26 43 24" stroke="#1C2B22" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function DoodleBoyJumping({ className = "", color = "#FFE169" }: { className?: string; color?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 80 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-20 sm:w-20 sm:h-24 drop-shadow-sm"
      >
        {/* Hair tuft */}
        <path d="M38 6C36 2 44 2 42 6" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
        {/* Head */}
        <circle cx="40" cy="20" r="12" fill={color} />
        {/* T-Shirt / Body */}
        <rect x="29" y="32" width="22" height="24" rx="4" fill={color} />
        {/* Raised Arms */}
        <path
          d="M29 36L12 24M51 36L68 24"
          stroke={color}
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        {/* Jumping Legs */}
        <path
          d="M34 56L22 76M46 56L58 76"
          stroke={color}
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        {/* Happy face */}
        <circle cx="36" cy="19" r="1.5" fill="#1C2B22" />
        <circle cx="44" cy="19" r="1.5" fill="#1C2B22" />
        <path d="M37 24C38.5 26 41.5 26 43 24" stroke="#1C2B22" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function DoodleSpiralGreen({ className = "", stroke = "#FFFFFF" }: { className?: string; stroke?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 drop-shadow-xs"
      >
        <path
          d="M30 6C43.25 6 54 16.75 54 30C54 43.25 43.25 54 30 54C16.75 54 6 43.25 6 30C6 19.5 13 10.5 23 8"
          stroke={stroke}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray="4 6"
        />
        <circle cx="30" cy="30" r="4.5" fill={stroke} />
      </svg>
    </div>
  );
}

export function DoodleStarGreen({ className = "", stroke = "#FFE169" }: { className?: string; stroke?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 drop-shadow-xs"
      >
        <path
          d="M24 4L28.5 16.5L41.5 18L32 26.5L34.5 39.5L24 33L13.5 39.5L16 26.5L6.5 18L19.5 16.5L24 4Z"
          stroke={stroke}
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={stroke}
          fillOpacity="0.25"
        />
      </svg>
    </div>
  );
}

