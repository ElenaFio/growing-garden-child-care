import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "@/lib/router";
import { 
  OpenHouseBand, 
  ZigzagAccent, 
  StarAccent, 
  SparkleAccent,
  SectionWave
} from "@/components/page-elements";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { useLanguage } from "@/lib/i18n";
import { francisca } from "@/assets/images";
import toddlerBaby from "@/assets/images/regenerated_image_1790259794320.png";
import ourValuesImage from "@/assets/images/regenerated_image_1790137825918.jpg";

export function AboutPage() {
  const { t, lang } = useLanguage();
  const [openValueIndex, setOpenValueIndex] = useState<number | null>(0);

  const valuesData = [
    {
      title: lang === "es" ? "Cuidado con amor de hogar" : "Care with home love",
      detail: lang === "es"
        ? "Un entorno seguro, paciente y afectuoso donde cada pequeño recibe atención personalizada y se siente protegido como en familia."
        : "A secure, patient, and affectionate environment where each little one receives personalized attention and feels protected just like family.",
    },
    {
      title: lang === "es" ? "Aprendizaje con valores y juego" : "Learning through values & play",
      detail: lang === "es"
        ? "Fomentamos la curiosidad, el respeto y la socialización temprana a través del juego libre y guiado, sentando bases sólidas para su futuro."
        : "We foster curiosity, respect, and early socialization through guided and imaginative play, building solid foundations for their future.",
    },
    {
      title: lang === "es" ? "Entorno bilingüe natural" : "Natural bilingual environment",
      detail: lang === "es"
        ? "Acompañamos su desarrollo lingüístico integrando con naturalidad el español y el inglés en cantos, rutinas y momentos de lectura."
        : "We support language development by organically weaving Spanish and English into songs, daily routines, and shared story times.",
    },
    {
      title: lang === "es" ? "Confianza y tranquilidad familiar" : "Family trust & peace of mind",
      detail: lang === "es"
        ? "Más de 26 años de experiencia y vocación respaldan nuestro compromiso de ofrecer a los padres la certeza y paz de que sus hijos están en las mejores manos mientras trabajan."
        : "Over 26 years of experience and loving devotion back our promise to give parents total confidence and peace of mind knowing their children are in the best hands while they work.",
    },
  ];

  return (
    <>
      <PageHeroBanner
        variant="minimal"
        title={lang === "es" ? "Sobre Nosotros" : "About Us"}
      />

      {/* Francisca's Story Section (Composición Lúdica Ampliada) */}
      <section className="bg-white pt-16 md:pt-24 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: Composición Fotográfica Protagonista (lg:col-span-5) */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-4 sm:py-6">
            {/* Manchas o blobs pastel suaves al fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[420px] h-80 sm:h-[420px] bg-[#FEF6F7] rounded-full filter blur-2xl opacity-75 pointer-events-none -z-10" />
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#F4FAF6] rounded-full filter blur-xl opacity-90 pointer-events-none -z-10" />

            {/* Doodles decorativos: Destello sutil arriba izquierda */}
            <div className="absolute -top-3 left-2 sm:left-4 z-20 text-[#F9B200] animate-pulse pointer-events-none">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-xs" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="20" y1="4" x2="20" y2="10" />
                <line x1="20" y1="30" x2="20" y2="36" />
                <line x1="4" y1="20" x2="10" y2="20" />
                <line x1="30" y1="20" x2="36" y2="20" />
                <line x1="8.7" y1="8.7" x2="13" y2="13" />
                <line x1="27" y1="27" x2="31.3" y2="31.3" />
                <line x1="8.7" y1="31.3" x2="13" y2="27" />
                <line x1="27" y1="13" x2="31.3" y2="8.7" />
              </svg>
            </div>

            {/* Avioncito de papel lúdico arriba a la derecha */}
            <div className="absolute top-1 right-2 sm:right-6 z-20 text-[#19B2E6] animate-float pointer-events-none">
              <svg className="w-8 h-8 sm:w-9 sm:h-9 -rotate-12 drop-shadow-xs" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M28 4L13 19M28 4L19 28L13 19M28 4L4 13L13 19" />
              </svg>
            </div>

            {/* Marco de composición con escala ampliada */}
            <div className="relative w-full max-w-[400px] lg:max-w-[440px]">
              {/* Foto principal (Arco superior de Francisca ampliado) */}
              <div className="relative w-full h-[460px] sm:h-[480px] lg:h-[520px] rounded-t-[9rem] rounded-b-[2.5rem] overflow-hidden shadow-xl border-4 border-white mx-auto lg:mx-0 bg-white">
                <img
                  src={francisca}
                  alt={lang === "es" ? "Francisca en Growing Garden" : "Francisca at Growing Garden"}
                  className="w-full h-full object-cover block"
                />
              </div>

              {/* Insignia flotante de marca (estilo Home) */}
              <div className="absolute -bottom-4 right-2 sm:-right-2 bg-[#0F8B44] text-white px-5 py-3 rounded-2xl shadow-lg border-2 border-white z-20">
                <p className="font-extrabold text-xs sm:text-sm leading-tight">
                  {lang === "es" ? "Francisca • Fundadora" : "Francisca • Founder"}
                </p>
                <p className="text-[11px] text-white/80 font-medium">
                  {lang === "es" ? "Más de 26 años de experiencia y vocación" : "26+ years of experience & dedication"}
                </p>
              </div>

              {/* Foto flotante secundaria complementaria (niño con bloques didácticos) */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 w-32 sm:w-36 h-32 sm:h-36 rounded-[2rem] border-4 border-white shadow-xl z-20 rotate-[-5deg] overflow-hidden bg-white transition-transform hover:rotate-0 duration-300">
                <img
                  src={toddlerBaby}
                  alt={lang === "es" ? "Niño jugando feliz en guardería" : "Happy toddler playing with blocks"}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Texto, Badges y CTA (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left py-4">
            {/* Eyebrow */}
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#76B82A] mb-2 flex items-center gap-1.5">
              <span>{lang === "es" ? "NUESTRA HISTORIA Y VOCACIÓN" : "OUR STORY & DEDICATION"}</span>
              <span className="text-[#F24E86]">✦</span>
            </p>

            {/* Título H2 */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F8B44] tracking-tight leading-tight mb-5">
              {lang === "es" ? "Donde los pequeños corazones encuentran su hogar" : "Where little hearts find their home"}
            </h2>

            {/* Párrafo 1 (3ª persona - Origen y empatía con las familias) */}
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4">
              {lang === "es"
                ? "Growing Garden Family Child Care nació hace más de 26 años cuando Francisca tuvo a su primer hijo. Al vivir esa etapa, comprendió la profunda necesidad que tienen las madres y padres de encontrar a una persona responsable y de absoluta confianza con quien dejar a sus pequeños para trabajar tranquilos."
                : "Growing Garden Family Child Care was born over 26 years ago when Francisca had her first child. Experiencing that journey, she understood the profound need parents have to find a responsible, completely trusted person to care for their little ones so they can work with peace of mind."}
            </p>

            {/* Párrafo 2 (3ª persona - Trayectoria y hogar) */}
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-5">
              {lang === "es"
                ? "Esa vocación le permitió estar en casa junto a sus propios hijos y abrir las puertas de un segundo hogar para las familias de Hayward. Durante más de dos décadas, su guardería ha sido un espacio seguro y cálido donde los niños desarrollan valores, confianza y amor por el aprendizaje."
                : "That calling allowed her to be at home alongside her own children while opening the doors of a second home for Hayward families. For more than two decades, her childcare has been a warm, secure space where children develop values, confidence, and a love for learning."}
            </p>

            {/* Cita personal destacada (1ª persona textual de Francisca) */}
            <div className="border-l-3 border-[#F9B200] pl-4 py-2 mb-6 bg-[#FFFBF0]/60 rounded-r-xl">
              <p className="text-stone-700 font-medium italic text-xs sm:text-sm leading-snug">
                {lang === "es"
                  ? "“Acompañar a tantos pequeños en sus primeros pasos y verlos crecer con cariño y paciencia ha sido la mejor decisión de mi vida.”"
                  : "“Accompanying so many little ones through their first steps and watching them grow with love and patience has been the best decision of my life.”"}
              </p>
              <span className="text-[11px] font-bold text-[#0F8B44] block mt-1.5">
                {lang === "es" ? "— Francisca, Fundadora" : "— Francisca, Founder"}
              </span>
            </div>

            {/* Botón CTA directamente debajo de la cita */}
            <div className="pt-2">
              <Link 
                to="/tour" 
                className="inline-flex items-center gap-2 font-bold text-sm text-white bg-[#0F8B44] hover:bg-[#0b6b34] hover:scale-[1.02] active:scale-[0.98] px-8 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all w-fit"
              >
                <span>{lang === "es" ? "Agenda una visita con Francisca" : "Schedule a tour with Francisca"}</span>
                <span className="text-base leading-none">→</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Onda curva inferior hacia el fondo suave de Mission & Vision */}
        <SectionWave fill="#F7FAF7" />
      </section>

      {/* Mission & Vision Section */}
      <section className="pt-16 md:pt-24 pb-0 bg-[#F7FAF7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          {/* Encabezado */}
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#76B82A] mb-2 flex items-center justify-center gap-1.5 text-center">
            <span>{lang === "es" ? "NUESTRO PROPÓSITO" : "OUR PURPOSE"}</span>
            <span className="text-[#F24E86]">✦</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F8B44] tracking-tight text-center mb-12">
            {lang === "es" ? "Guiados por el amor, enfocados en el futuro" : "Guided by love, focused on the future"}
          </h2>

          {/* Tarjetas en Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Tarjeta 1: Nuestra Misión */}
            <div className="bg-white border border-gray-100 shadow-sm p-8 sm:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#EBF7EE] shadow-2xs text-2xl flex items-center justify-center border border-[#0F8B44]/15 mb-6 text-[#0F8B44]">
                  🌱
                </div>
                <h3 className="text-2xl font-black text-[#0F8B44] mb-4">
                  {lang === "es" ? "Nuestra Misión" : "Our Mission"}
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  {lang === "es"
                    ? "Ofrecer a las familias de Hayward un segundo hogar confiable, seguro y bilingüe, donde cada niño de 1 a 13 años reciba un cuidado lleno de afecto, paciencia y valores, brindando a los padres la tranquilidad plena de que sus pequeños están en las mejores manos."
                    : "To provide Hayward families with a trusted, safe, and bilingual second home, where every child from 1 to 13 years old receives care filled with affection, patience, and values, giving parents complete peace of mind that their little ones are in the best hands."}
                </p>
              </div>
            </div>

            {/* Tarjeta 2: Nuestra Visión */}
            <div className="bg-white border border-gray-100 shadow-sm p-8 sm:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#FEF6D8] shadow-2xs text-2xl flex items-center justify-center border border-[#F9B200]/20 mb-6 text-[#F9B200]">
                  ☀️
                </div>
                <h3 className="text-2xl font-black text-[#B27D00] mb-4">
                  {lang === "es" ? "Nuestra Visión" : "Our Vision"}
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  {lang === "es"
                    ? "Ser el daycare familiar de referencia por nuestra vocación humana y excelencia en el cuidado diario, acompañando a las nuevas generaciones a crecer seguras, curiosas y con un corazón lleno de confianza para abrazar su futuro escolar y de vida."
                    : "To be the premier family daycare recognized for our human dedication and excellence in daily care, guiding new generations to grow up secure, curious, and confident to embrace their school and life future."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Onda curva inferior hacia el fondo blanco de Values Section */}
        <SectionWave fill="#FFFFFF" />
      </section>

      {/* Values Section (Editorial 2 Columnas: Acordeón + Foto) */}
      <section className="bg-white pt-16 md:pt-24 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: Acordeón Interactivo de Valores */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#76B82A] mb-2 flex items-center gap-1.5">
              <span>{lang === "es" ? "NUESTROS VALORES" : "OUR VALUES"}</span>
              <span className="text-[#F24E86]">✦</span>
            </p>

            {/* Título H2 */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F8B44] tracking-tight leading-tight mb-8">
              {lang === "es" ? "Valores que forman cada pequeño corazón" : "Values that shape every little heart"}
            </h2>

            {/* Acordeón Interactivo */}
            <div className="space-y-1">
              {valuesData.map((item, index) => {
                const isOpen = openValueIndex === index;
                return (
                  <div key={index} className="border-b border-stone-200/80 py-4 transition-colors">
                    <button
                      type="button"
                      onClick={() => setOpenValueIndex(isOpen ? null : index)}
                      className="w-full cursor-pointer flex items-center justify-between text-left text-[#1C2B22] hover:text-[#0F8B44] transition-colors group"
                      aria-expanded={isOpen}
                    >
                      <span className="font-extrabold text-base sm:text-lg pr-4 group-hover:text-[#0F8B44] transition-colors">
                        {item.title}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center shrink-0 transition-all ${
                          isOpen
                            ? "bg-[#0F8B44] text-white border-[#0F8B44] rotate-180"
                            : "bg-white text-stone-500 group-hover:border-[#0F8B44] group-hover:text-[#0F8B44]"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4 transition-transform" />
                      </div>
                    </button>
                    {isOpen && (
                      <div className="pt-3 pb-1 text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
                        {item.detail}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* COLUMNA DERECHA: Foto Cálida con Esquinas Pronunciadas */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[460px] sm:h-[540px] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white bg-white">
              <img
                src={ourValuesImage}
                alt={lang === "es" ? "Niños en Growing Garden aprendiendo con amor y valores" : "Children at Growing Garden learning with love and values"}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover block"
              />
            </div>

            {/* Acento decorativo flotante sutil */}
            <div className="absolute -bottom-3 -right-3 size-12 rounded-2xl bg-[#F9B200] text-[#1C2B22] flex items-center justify-center shadow-md font-black text-xl border-2 border-white rotate-6 hidden sm:flex">
              🌱
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

