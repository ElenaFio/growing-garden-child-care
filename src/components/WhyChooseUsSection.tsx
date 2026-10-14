import React from "react";
import { motion, type Variants } from "framer-motion";
import { SectionWave } from "@/components/page-elements";

const cardsData = [
  {
    icon: "⏰",
    bgCard: "bg-[#FEF6D8]", // Amarillo pastel suave / Sunshine
    titleEs: "Horarios Flexibles y 24 Horas",
    titleEn: "Flexible & 24-Hour Care",
    descEs: "Turnos de día, noche y horarios continuos adaptados a tu trabajo, previa coordinación.",
    descEn: "Day, night, and flexible shifts tailored to your schedule upon prior arrangement."
  },
  {
    icon: "🤝",
    bgCard: "bg-[#E5F6EB]", // Verde menta pastel suave / Sprout
    titleEs: "Subsidios y Ayuda de Pago",
    titleEn: "Subsidies & Payment Aid",
    descEs: "Aceptamos 4Cs, BANANAS Inc. y Davis Street. Te orientamos en todo el proceso de ayuda.",
    descEn: "We accept 4Cs, BANANAS Inc., and Davis Street. We guide you through financial aid options."
  },
  {
    icon: "✨",
    bgCard: "bg-[#FDE8EF]", // Rosa pastel suave / Playful Pink
    isStar: true,
    titleEs: "Cuidado por Hora o Día (Drop-In)",
    titleEn: "Hourly Drop-In & Daily Care",
    descEs: "Servicio estrella por hora o día para emergencias, citas o turnos laborales variables, complementario al cuidado mensual.",
    descEn: "Star flexible service by the hour or day for errands, appointments, and rotating shifts, complementary to monthly care."
  },
  {
    icon: "🌱",
    bgCard: "bg-[#E0F2FE]", // Azul cielo pastel suave / Sky Blue
    titleEs: "Ambiente Bilingüe e Integral",
    titleEn: "Bilingual & Holistic Care",
    descEs: "Inmersión diaria en inglés y español con valores, huerto interactivo y aprendizaje activo.",
    descEn: "Daily English and Spanish immersion with core values, interactive gardening, and active play."
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export function WhyChooseUsSection({ lang = "es" }: { lang?: string }) {
  return (
    <section className="relative pt-16 md:pt-24 pb-0 bg-[#F7FAF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        {/* Encabezado según Sistema de Diseño Oficial */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Eyebrow oficial con estrella rosa */}
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#76B82A] mb-3 flex items-center justify-center gap-1.5">
            <span>{lang === "es" ? "POR QUÉ ELEGIRNOS" : "WHY CHOOSE US"}</span>
            <span className="text-[#F24E86]">✦</span>
          </p>

          {/* Titular Display H2 */}
          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold text-[#0F8B44] leading-[1.15] tracking-tight">
            {lang === "es"
              ? "Cuidado con amor de hogar, adaptado a tu día a día"
              : "Home-style loving care, tailored to your daily life"}
          </h2>

          {/* Onda en zigzag amarilla de la marca */}
          <div className="flex justify-center mt-4">
            <svg width="48" height="12" viewBox="0 0 48 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10L10 2L18 10L26 2L34 10L42 2L46 6" stroke="#F9B200" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Grid forzado a 1 fila en desktop (1 col móvil, 2 cols tablet, 4 cols desktop) */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {cardsData.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group bg-white text-center flex flex-col items-center justify-start p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 cursor-default relative overflow-hidden"
            >
              {card.isStar && (
                <span className="absolute top-4 right-4 bg-[#F24E86] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
                  {lang === "es" ? "★ Estrella" : "★ Star"}
                </span>
              )}

              {/* Contenedor del Icono con sutil fondo suave */}
              <div className={`${card.bgCard} shadow-2xs p-4 rounded-2xl mb-6 flex items-center justify-center w-16 h-16 text-3xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}>
                {card.icon}
              </div>

              {/* Título en negrita oscura */}
              <h3 className="text-[#1C2B22] font-extrabold text-xl leading-snug">
                {lang === "es" ? card.titleEs : card.titleEn}
              </h3>

              {/* Descripción breve centrada */}
              <p className="text-stone-600 text-sm leading-relaxed mt-3">
                {lang === "es" ? card.descEs : card.descEn}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Onda curva inferior hacia el fondo blanco de la siguiente sección */}
      <SectionWave fill="#FFFFFF" />
    </section>
  );
}
