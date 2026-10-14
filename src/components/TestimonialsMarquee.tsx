import React from "react";
import { SectionWave } from "@/components/page-elements";

interface TestimonialsMarqueeProps {
  lang?: string;
  className?: string;
}

const testimonials = [
  {
    id: 1,
    quote: "Teachers care greatly. I get updates, photos, and videos, and my son absolutely loves his friends and activities!",
    quoteEs: "¡Las maestras cuidan con muchísimo cariño! Recibo fotos, videos y actualizaciones todos los días, y a mi hijo le encantan sus amiguitos y juegos.",
    author: "Amanda R.",
    role: "Parent of 2 years old",
    roleEs: "Madre de niño de 2 años",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
  },
  {
    id: 2,
    quote: "Francisca notices the small things—what makes our daughter laugh, what comforts her, and what sparks her curiosity daily.",
    quoteEs: "Francisca nota cada detalle: lo que hace reír a nuestra hija, lo que la calma y lo que despierta su curiosidad cada día.",
    author: "Carlos & Elena M.",
    role: "Preschool Family",
    roleEs: "Familia de Preschool",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
  },
  {
    id: 3,
    quote: "We truly love the wonderful balance of play, fresh homemade meals, and bilingual care that helps our child grow with joy.",
    quoteEs: "Amamos el balance perfecto entre juego, comidas caseras calientitas y cuidado bilingüe que hace crecer a nuestro hijo con alegría.",
    author: "David S.",
    role: "Parent of 1.5 years old",
    roleEs: "Padre de niña de 1.5 años",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
  },
  {
    id: 4,
    quote: "Daily updates and caring attention give us peace of mind at work, knowing our baby is safe, well-fed, and truly loved.",
    quoteEs: "Las fotos diarias y el cariño sincero nos dan total tranquilidad en el trabajo, sabiendo que nuestro bebé está seguro y muy consentido.",
    author: "Sofia T.",
    role: "Infant Care Parent",
    roleEs: "Madre de Infant Care",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
  },
  {
    id: 5,
    quote: "Finding a family daycare with over 26 years of experience & dedication in Hayward made all the difference. It feels like an extension of home.",
    quoteEs: "Encontrar un childcare familiar con más de 26 años de experiencia y vocación en Hayward marcó toda la diferencia. Se siente como una extensión de nuestro hogar.",
    author: "Marcus & Lisa V.",
    role: "Toddler Program",
    roleEs: "Familia de Toddler Program",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80"
  }
];

export function TestimonialsMarquee({ lang = "es", className = "bg-[#F7FAF7]" }: TestimonialsMarqueeProps) {
  const isEs = lang === "es";
  // Duplicamos el array para que el scroll horizontal infinito no tenga cortes
  const loopList = [...testimonials, ...testimonials];

  return (
    <section className={`pt-16 md:pt-24 pb-0 overflow-hidden relative ${className}`}>
      {/* Encabezado centrado */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#76B82A] mb-2 flex items-center justify-center gap-1.5">
          <span>{isEs ? "HISTORIAS REALES DE FAMILIAS" : "REAL FAMILY STORIES"}</span>
          <span className="text-[#F24E86]">✦</span>
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C2B22] tracking-tight">
          {isEs ? "Lo que dicen las familias" : "What the parents say"}
        </h2>
        <div className="flex justify-center mt-3">
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
      </div>

      {/* Contenedor del Marquee con pausa en hover */}
      <div className="w-full overflow-hidden flex group py-4 pb-12 sm:pb-16">
        <div 
          className="flex gap-6 shrink-0 animate-marquee group-hover:[animation-play-state:paused]"
          style={{
            animation: "marquee 34s linear infinite"
          }}
        >
          {loopList.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[290px] sm:w-[340px] bg-white rounded-3xl p-7 border border-gray-100 shadow-sm flex flex-col justify-between text-center shrink-0 transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
            >
              {/* Estrellas doradas arriba */}
              <div className="flex justify-center gap-1 text-[#F9B200] text-sm mb-4 select-none tracking-widest">
                {"★★★★★"}
              </div>

              {/* Texto del testimonio */}
              <p className="text-[#1C2B22] font-bold text-sm sm:text-base leading-relaxed mb-6">
                “{isEs ? item.quoteEs : item.quote}”
              </p>

              {/* Información del autor abajo */}
              <div className="flex items-center justify-center gap-3 pt-2 border-t border-stone-100">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-10 h-10 rounded-full object-cover border border-stone-200"
                  loading="lazy"
                />
                <div className="text-left">
                  <h4 className="font-bold text-xs sm:text-sm text-[#1C2B22] leading-none mb-1">
                    {item.author}
                  </h4>
                  <p className="text-[11px] text-stone-500 font-medium">
                    {isEs ? item.roleEs : item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Onda curva inferior hacia el Open House Band (blanco) */}
      <SectionWave fill="#FFFFFF" />

      {/* Regla CSS para la animación infinita continua */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
