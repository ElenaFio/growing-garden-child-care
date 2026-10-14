import { Link } from "@/lib/router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  OpenHouseBand, 
  ZigzagAccent, 
  StarAccent, 
  SparkleAccent, 
  SectionWave,
  DoodleGirlJumping,
  DoodleBoyJumping,
  DoodleSpiralGreen,
  DoodleStarGreen
} from "@/components/page-elements";
import { useLanguage } from "@/lib/i18n";
import { gardenChildren, subsidyFamily } from "@/assets/images";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { ProgramsCarouselSection } from "@/components/ProgramsCarouselSection";
import { FounderStorySection } from "@/components/FounderStorySection";
import { TestimonialsMarquee } from "@/components/TestimonialsMarquee";

export function HomePage() {
  const { lang, t } = useLanguage();

  return (
    <>
      {/* 1. HERO SECTION (Garden Green #0F8B44) */}
      <section className="relative -mt-[1px] w-full bg-[#0F8B44] text-white pt-6 sm:pt-10 pb-0 overflow-hidden">
        {/* Doodles Decorativos Flotantes de los Flyers */}
        <DoodleGirlJumping color="#FF9EC5" className="absolute top-10 right-4 lg:right-14 z-20 animate-float" />
        <DoodleBoyJumping color="#FFE169" className="absolute top-24 left-2 lg:left-8 z-20 animate-wiggle" />
        <DoodleSpiralGreen stroke="#FFFFFF" className="absolute -top-4 left-1/2 -translate-x-1/2 lg:left-1/3 z-10 animate-spin-slow opacity-85" />
        <DoodleStarGreen stroke="#FFE169" className="absolute bottom-20 right-6 lg:right-14 z-20 animate-float-delayed" />

        {/* Contenido (Texto a la izquierda, foto a la derecha) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 items-center relative z-10 pb-4 lg:pb-8">
          <div className="lg:col-span-7 pr-0 lg:pr-8 py-8">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-white/15 text-white border border-white/20 px-4 py-1.5 text-xs font-bold mb-5 shadow-2xs backdrop-blur-xs">
              <span className="size-2 rounded-full bg-[#FFE169]" />
              {t.global.eyebrow}
              <span className="text-[#FFE169]">★</span>
            </div>

            {/* Titular Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.12] tracking-tight max-w-none lg:max-w-2xl">
              {lang === "es" ? (
                <>
                  <span className="inline-block">Un segundo hogar</span>
                  <br />
                  <span className="inline-block sm:whitespace-nowrap">
                    donde los niños <span className="text-[#C7F284]">crecen</span>,
                  </span>
                  <br />
                  <span className="inline-block">
                    <span className="text-[#FFE169]">aprenden</span> y{" "}
                    <span className="text-[#FF9EC5]">sonríen</span>
                  </span>
                </>
              ) : (
                <>
                  <span className="inline-block">A loving home</span>
                  <br />
                  <span className="inline-block sm:whitespace-nowrap">
                    where children <span className="text-[#C7F284]">grow</span>,
                  </span>
                  <br />
                  <span className="inline-block">
                    <span className="text-[#FFE169]">learn</span>, and{" "}
                    <span className="text-[#FF9EC5]">smile</span>
                  </span>
                </>
              )}
            </h1>

            {/* Subtítulo / Descripción */}
            <p className="mt-5 text-base sm:text-lg text-[#F0FDF4] max-w-xl leading-relaxed font-normal">
              {t.home.intro}
            </p>

            {/* Botones de Acción */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* Botón Principal: Schedule a Tour */}
              <Link
                to="/tour"
                className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-[#F24E86] hover:bg-[#d8356e] hover:scale-[1.02] px-8 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg transition-all duration-200 border-2 border-white/50"
              >
                <span>{t.actions.tour}</span>
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              {/* Botón Secundario: Programs & Rates */}
              <Link
                to="/programs"
                className="border-2 border-white text-white font-bold rounded-full px-7 py-3 text-sm sm:text-base hover:bg-white hover:text-[#0F8B44] transition-all"
              >
                {t.nav.programs}
              </Link>
            </div>
          </div>

          {/* Columna Derecha con Video en arco abovedado oficial de los flyers */}
          <div className="mt-6 lg:mt-0 lg:col-span-5 h-[380px] sm:h-[440px] lg:h-[540px] relative overflow-hidden rounded-t-[5rem] lg:rounded-t-[7rem] rounded-b-[1.5rem] shadow-2xl border-4 border-white bg-[#0B6B34]">
            <video 
              autoPlay={true}
              muted={true}
              loop={true}
              playsInline={true}
              poster="/assets/garden-video-poster.jpg"
              className="w-full h-full object-cover pointer-events-none"
            >
              <source src="/assets/children-playing.mp4" type="video/mp4" />
              <source src="/assets/children-playing.webm" type="video/webm" />
              <img 
                src="/assets/garden-video-poster.jpg" 
                alt={t.home.collage} 
                className="w-full h-full object-cover pointer-events-none"
              />
            </video>
          </div>
        </div>

        {/* Onda de transición continua a la Sección "Por qué elegirnos" (Soft Mint/Cream #F7FAF7) */}
        <SectionWave fill="#F7FAF7" />
      </section>

      {/* SECCIÓN "POR QUÉ ELEGIRNOS" ANIMADA CON FRAMER MOTION (ESTILO KIDOCARE / PARALLAX) */}
      <WhyChooseUsSection lang={lang} />

      {/* 2. PROGRAMS SECTION (CONTINUOUS STRIP WITH PERFECT 50vw CENTERED CARDS) */}
      <ProgramsCarouselSection lang={lang} />

      {/* 2.5 NUESTRA HISTORIA / SOBRE LA FUNDADORA */}
      <FounderStorySection lang={lang} />

      {/* 3. SECCIÓN DE SUBSIDIOS Y ASISTENCIA FAMILIAR (LAYOUT INVERTIDO: TEXTO A LA IZQ, FOTO A LA DER) */}
      <section className="w-full bg-white pt-16 md:pt-24 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
          {/* Fotografía (a la derecha en desktop) */}
          <div className="w-full sm:w-80 md:w-96 h-72 sm:h-80 shrink-0 rounded-3xl overflow-hidden shadow-xs border-2 border-stone-200/70">
            <img
              src={subsidyFamily}
              alt={lang === "es" ? "Familia y cuidado con subsidios infantiles" : "Family and child care subsidy support"}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Bloque de texto (a la izquierda en desktop) */}
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
                ? "Respaldamos a las familias trabajadoras de Hayward aceptando subsidios de cuidado infantil del estado de California (como 4Cs del Condado de Alameda, CalWORKs y agencias locales). Te guiamos en el proceso para que tu pequeño reciba un cuidado amoroso con opciones accesibles o cobertura total."
                : "We support working families across Hayward by accepting California child care subsidies (such as 4Cs of Alameda County, CalWORKs, and local agencies). We guide you through the process so your little one receives loving care with affordable options or full coverage."}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact#inquire"
                className="inline-flex items-center gap-2 font-bold text-xs sm:text-sm text-white bg-[#0F8B44] hover:bg-[#0b6b34] px-6 py-3.5 rounded-full transition-all shadow-xs cursor-pointer"
              >
                <span>
                  {lang === "es"
                    ? "Preguntar a Francisca por Subsidios →"
                    : "Consult Francisca About Assistance →"}
                </span>
              </Link>
              <span className="text-xs text-stone-500 font-medium">
                {lang === "es"
                  ? "✓ Cobertura total o parcial según elegibilidad"
                  : "✓ Full or partial coverage based on eligibility"}
              </span>
            </div>
          </div>
        </div>

        {/* Onda curva inferior hacia el fondo suave de TestimonialsMarquee */}
        <SectionWave fill="#F7FAF7" />
      </section>

      {/* 5. PARENT REVIEWS MARQUEE CONTINUO CON PAUSE ON HOVER */}
      <TestimonialsMarquee lang={lang} />

      {/* 6. OPEN HOUSE BANNER (Amarillo Dorado #F9B200) */}
      <OpenHouseBand />
    </>
  );
}

