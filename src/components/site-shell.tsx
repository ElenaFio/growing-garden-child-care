import { Link } from "@/lib/router";
import { Facebook, Instagram, Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export function Logo({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  const textColor = light ? "#FFFFFF" : "#0F8B44";
  const subTextColor = light ? "#F9B200" : "#76B82A";

  return (
    <Link to="/" aria-label="Growing Garden Family Child Care home" className="group flex items-center">
      {/* Official Horizontal Brand Logo: Sun, House Roof, 3 Children, Grass Hill & Typography */}
      <svg
        aria-hidden="true"
        viewBox={compact ? "0 0 270 285" : "0 0 780 290"}
        className={`shrink-0 transition-transform duration-200 group-hover:scale-[1.01] ${
          compact ? "h-11 w-11 sm:h-12 sm:w-12" : "h-12 sm:h-14 md:h-15 w-auto max-w-[225px] sm:max-w-[270px] md:max-w-[310px]"
        }`}
      >
        {/* EMBLEM (Left Side) */}
        <g id="logo-emblem">
          {/* Radiant Sun Rays */}
          <g id="sun-rays" fill="#F9B200">
            <path d="M138 6 C138 2 142 2 142 6 L144 26 C144 29 136 29 136 26 Z" />
            <path d="M96 16 C93 13 97 10 100 13 L114 28 C117 31 110 36 107 33 Z" />
            <path d="M184 16 C187 13 183 10 180 13 L166 28 C163 31 170 36 173 33 Z" />
            <path d="M60 40 C57 37 62 33 65 36 L84 50 C87 53 81 58 78 55 Z" />
            <path d="M220 40 C223 37 218 33 215 36 L196 50 C193 53 199 58 202 55 Z" />
            <path d="M34 76 C31 73 37 68 40 71 L63 85 C66 88 61 94 58 91 Z" />
            <path d="M246 76 C249 73 243 68 240 71 L217 85 C214 88 219 94 222 91 Z" />
            <path d="M22 120 C18 119 20 114 25 114 L52 122 C56 123 54 130 50 129 Z" />
            <path d="M258 120 C262 119 260 114 255 114 L228 122 C224 123 226 130 230 129 Z" />
          </g>

          {/* Sun Disc Dome */}
          <path d="M52 136 C52 86 91 46 140 46 C189 46 228 86 228 136 Z" fill="#F9B200" />

          {/* Roof Outer: Roof Tangerine (#F38200) */}
          <path
            d="M140 48 L262 144 C267 148 266 155 260 159 C255 163 248 161 244 157 L140 75 L36 157 C32 161 25 163 20 159 C14 155 13 148 18 144 Z"
            fill="#F38200"
          />
          {/* Roof Inner: Sunshine Yellow (#F9B200) */}
          <path
            d="M140 75 L236 150 C240 153 239 158 235 161 C231 164 226 163 222 160 L140 94 L58 160 C54 163 49 164 45 161 C41 158 40 153 44 150 Z"
            fill="#F9B200"
          />

          {/* Ground: Smooth Green Hill */}
          <path
            d="M14 258 C65 238 215 238 266 258 C272 260 270 268 264 270 C208 280 72 280 16 270 C10 268 8 260 14 258 Z"
            fill={light ? "#76B82A" : "#0F8B44"}
          />

          {/* CHILD 1: Left Boy in Sky Blue (#19B2E6) */}
          <g id="child-left-blue">
            <circle cx="68" cy="182" r="18" fill="#19B2E6" />
            <path d="M66 164 C68 158 76 160 74 166 Z" fill="#19B2E6" />
            <path d="M72 165 C76 161 82 165 78 169 Z" fill="#19B2E6" />
            <path d="M62 188 C65 193 73 193 76 188" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M58 200 L78 200 L82 230 L54 230 Z" fill="#19B2E6" />
            <path d="M58 204 L42 208 C38 209 36 214 38 218 C40 222 45 223 49 220 L58 214 Z" fill="#19B2E6" />
            <circle cx="32" cy="210" r="14" fill="#F9B200" />
            <path d="M24 218 C28 208 38 208 42 216" stroke="#F38200" strokeWidth="2.6" fill="none" />
            <path d="M78 204 L96 190 C100 187 105 188 107 192 C109 196 107 201 103 204 L78 216 Z" fill="#19B2E6" />
            <path d="M58 230 L50 252 C49 256 51 259 56 259 L66 259 C70 259 71 254 68 251 L64 230 Z" fill="#19B2E6" />
            <path d="M74 230 L80 250 C81 254 85 256 89 255 L96 253 C100 252 100 247 97 245 L82 230 Z" fill="#19B2E6" />
          </g>

          {/* CHILD 2: Center Girl in Vibrant Pink (#F24E86) */}
          <g id="child-center-pink">
            <path d="M120 160 C110 156 107 167 114 173 C119 178 123 172 123 168 Z" fill="#F24E86" />
            <path d="M160 160 C170 156 173 167 166 173 C161 178 157 172 157 168 Z" fill="#F24E86" />
            <circle cx="140" cy="166" r="19" fill="#F24E86" />
            <path d="M133 173 C137 179 143 179 147 173" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" fill="none" />
            <path d="M128 188 L105 159 C102 155 97 155 94 159 C91 163 92 168 96 171 L124 198 Z" fill="#F24E86" />
            <path d="M152 188 L175 159 C178 155 183 155 186 159 C189 163 188 168 184 171 L156 198 Z" fill="#F24E86" />
            <path d="M127 188 L153 188 L167 232 C168 236 164 239 160 239 L120 239 C116 239 112 236 113 232 Z" fill="#F24E86" />
            <path d="M129 239 L125 257 C124 260 127 263 131 263 L139 263 C142 263 144 259 142 256 L137 239 Z" fill="#F24E86" />
            <path d="M151 239 L153 257 C153 260 157 263 161 262 L169 260 C172 259 172 255 170 253 L159 239 Z" fill="#F24E86" />
          </g>

          {/* CHILD 3: Right Boy in Lime Sprout (#76B82A) */}
          <g id="child-right-green">
            <circle cx="214" cy="182" r="18" fill="#76B82A" />
            <path d="M210 164 C213 158 220 160 218 166 Z" fill="#76B82A" />
            <path d="M218 165 C222 161 228 165 224 169 Z" fill="#76B82A" />
            <path d="M208 188 C211 193 219 193 222 188" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M204 200 L224 200 L228 232 L200 232 Z" fill="#76B82A" />
            <path d="M202 202 L194 216 L200 222 L208 210 Z" fill="#76B82A" />
            <path d="M226 202 L234 216 L228 222 L220 210 Z" fill="#76B82A" />
            <path d="M188 212 L213 220 L213 238 L188 230 Z" fill="#19B2E6" stroke="#1599C6" strokeWidth="1.2" />
            <path d="M238 212 L213 220 L213 238 L238 230 Z" fill="#19B2E6" stroke="#1599C6" strokeWidth="1.2" />
            <line x1="213" y1="220" x2="213" y2="238" stroke="#FFFFFF" strokeWidth="1.6" />
            <path d="M204 232 L201 254 C200 258 203 261 207 261 L215 261 C219 261 220 257 218 254 L212 232 Z" fill="#76B82A" />
            <path d="M220 232 L222 254 C222 258 226 261 230 260 L238 259 C241 258 242 254 239 252 L228 232 Z" fill="#76B82A" />
          </g>
        </g>

        {/* TYPOGRAPHY (Right Side) */}
        {!compact && (
          <g id="logo-typography">
            {/* "Growing" */}
            <text
              x="285"
              y="118"
              fontFamily="'Nunito', 'Quicksand', system-ui, -apple-system, sans-serif"
              fontWeight="900"
              fontSize="108"
              letterSpacing="-0.02em"
              fill={textColor}
            >
              Grow<tspan fill={textColor}>&#305;</tspan>ng
            </text>

            {/* Leaf Accent over the dotless i of Growing (#76B82A) */}
            <path
              d="M542 50 C538 38 548 20 564 14 C568 28 563 42 552 49 C549 51 545 51 542 50 Z"
              fill="#76B82A"
            />
            <path
              d="M544 47 C550 39 557 32 562 17"
              stroke="#5A941C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            {/* "Garden" */}
            <text
              x="285"
              y="214"
              fontFamily="'Nunito', 'Quicksand', system-ui, -apple-system, sans-serif"
              fontWeight="900"
              fontSize="108"
              letterSpacing="-0.02em"
              fill={textColor}
            >
              Garden
            </text>

            {/* "Family Child Care" */}
            <text
              x="315"
              y="266"
              fontFamily="'Quicksand', 'Nunito', system-ui, -apple-system, sans-serif"
              fontWeight="700"
              fontSize="44"
              letterSpacing="0.04em"
              fill={subTextColor}
            >
              Family Child Care
            </text>
          </g>
        )}
      </svg>
    </Link>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const links = [
    ["/", t.nav.home],
    ["/about", t.nav.about],
    ["/programs", t.nav.programs],
    ["/our-daycare", t.nav.tour],
    ["/contact", t.nav.contact],
  ] as const;

  return (
    <div className="min-h-screen overflow-x-clip bg-[#FAFAF7] text-[#1C2B22] m-0 p-0">
      <header
        className="sticky top-0 z-50 w-full bg-white transition-all duration-200 py-3 px-4 sm:px-8 m-0 mb-0 border-0 border-none shadow-none"
        style={{ border: "none", borderBottom: "none", boxShadow: "none", marginBottom: 0, outline: "none" }}
      >
        <div className="section-shell flex items-center justify-between gap-4">
          <Logo />
          <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
            {links.map(([to, label]) => (
              <Link
                key={to}
                to={to}
                activeOptions={{ exact: to === "/" }}
                className="text-sm font-bold text-[#1C2B22] transition-colors hover:text-[#0F8B44]"
                activeProps={{ className: "text-[#0F8B44] font-extrabold" }}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-2.5 md:flex">
            {/* Language Switcher */}
            <div className="flex rounded-full border border-gray-200 bg-gray-50 p-1 shadow-2xs" aria-label="Language">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`cursor-pointer rounded-full px-3 py-1 text-xs font-black transition-all ${
                  lang === "en" ? "bg-[#0F8B44] text-white shadow-xs" : "text-[#1C2B22] hover:text-[#0F8B44]"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("es")}
                className={`cursor-pointer rounded-full px-3 py-1 text-xs font-black transition-all ${
                  lang === "es" ? "bg-[#0F8B44] text-white shadow-xs" : "text-[#1C2B22] hover:text-[#0F8B44]"
                }`}
              >
                ES
              </button>
            </div>
            {/* WhatsApp button in Garden Green */}
            <Button variant="whatsapp" size="sm" asChild>
              <a href="https://wa.me/13412583149" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                {t.actions.whatsapp}
              </a>
            </Button>
            {/* Tour button in Vibrant Pink pill */}
            <Link
              to="/tour"
              className="inline-flex items-center justify-center rounded-full bg-[#F24E86] hover:bg-[#D93870] hover:scale-[1.02] text-white font-bold px-5 py-2 text-xs sm:text-sm shadow-sm transition-all duration-200"
            >
              {t.actions.tour}
            </Link>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full text-[#1C2B22]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
        {open && (
          <div className="border-t border-gray-100 bg-white px-4 py-5 shadow-lg md:hidden">
            <nav className="flex flex-col gap-1">
              {links.map(([to, label]) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 font-bold hover:bg-[#F0F6EC] text-[#1C2B22]"
                  activeProps={{ className: "text-[#0F8B44] font-black bg-[#F0F6EC]" }}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
              <div className="flex rounded-full border border-gray-200 bg-gray-50 p-1">
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`rounded-full px-3.5 py-1 text-xs font-black ${
                    lang === "en" ? "bg-[#0F8B44] text-white" : "text-[#1C2B22]"
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang("es")}
                  className={`rounded-full px-3.5 py-1 text-xs font-black ${
                    lang === "es" ? "bg-[#0F8B44] text-white" : "text-[#1C2B22]"
                  }`}
                >
                  ES
                </button>
              </div>
              <Link
                to="/tour"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-[#F24E86] text-white font-bold px-5 py-2 text-xs shadow-sm"
              >
                {t.actions.tour}
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="m-0 p-0">{children}</main>

      <footer className="bg-[#0B5D2D] text-white">
        <div className="section-shell grid gap-10 py-16 md:grid-cols-12">
          {/* Columna 1: Marca, Licencia y Visitas */}
          <div className="md:col-span-4 flex flex-col items-start">
            <Logo light />
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/80 font-medium">
              {lang === "es"
                ? "Hogar de Cuidado Infantil con Licencia · Licencia del Estado de California"
                : "Licensed Family Child Care Facility · State of California License"}
            </p>
            <div className="mt-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs backdrop-blur-xs">
                <span>🗓</span>
                <span>
                  {lang === "es"
                    ? "Visitas con cita previa los sábados (10:00 AM – 1:00 PM)"
                    : "Visits by appointment on Saturdays (10:00 AM – 1:00 PM)"}
                </span>
              </span>
            </div>
          </div>

          {/* Columna 2: Horarios de Cuidado (Turno Diurno y Extendido) */}
          <div className="md:col-span-4 space-y-4">
            <div>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#FDE68A]">
                {lang === "es" ? "HORARIOS DE CUIDADO" : "CARE SCHEDULES"}
              </h3>
              <p className="text-[11px] font-bold uppercase tracking-wider text-white/60 mt-1">
                {lang === "es" ? "Turno Diurno" : "Day Schedule"}
              </p>
              <ul className="mt-1.5 text-white/85 text-xs sm:text-sm font-medium space-y-1">
                <li className="flex items-center justify-between sm:justify-start sm:gap-3">
                  <span className="font-bold text-white">{lang === "es" ? "Lunes a Viernes:" : "Monday – Friday:"}</span>
                  <span>6:00 AM – 3:00 PM</span>
                </li>
                <li className="flex items-center justify-between sm:justify-start sm:gap-3">
                  <span className="font-bold text-white">{lang === "es" ? "Sábado:" : "Saturday:"}</span>
                  <span>9:00 AM – 12:00 PM ({lang === "es" ? "Clases / Actividades" : "Classes / Activities"})</span>
                </li>
              </ul>
            </div>

            <div className="pt-3 border-t border-white/10">
              <p className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                {lang === "es" ? "Turno Extendido / Nocturno" : "Extended / Night Schedule"}
              </p>
              <ul className="mt-1.5 text-white/85 text-xs sm:text-sm font-medium space-y-1">
                <li className="flex items-center justify-between sm:justify-start sm:gap-3">
                  <span className="font-bold text-white">{lang === "es" ? "Lunes a Viernes:" : "Monday – Friday:"}</span>
                  <span>5:00 PM – 11:00 PM</span>
                </li>
                <li className="flex items-center justify-between sm:justify-start sm:gap-3">
                  <span className="font-bold text-white">{lang === "es" ? "Sábado:" : "Saturday:"}</span>
                  <span>9:00 AM – 12:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Columna 3: Ubicación y Contacto Directo */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#FDE68A]">
              {lang === "es" ? "UBICACIÓN Y CONTACTO" : "LOCATION & CONTACT"}
            </h3>
            <div className="text-xs sm:text-sm text-white/85 font-medium space-y-2.5">
              <p className="flex items-start gap-2.5">
                <MapPin className="size-4 shrink-0 text-[#86EFAC] mt-0.5" />
                <a
                  href="https://maps.google.com/?q=190+Goodrich+St,+Hayward,+CA+94544"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-white transition-colors"
                >
                  190 Goodrich St., Hayward, California 94544
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-[#86EFAC]" />
                <a href="tel:+13412583149" className="hover:underline hover:text-white font-semibold transition-colors">
                  (341) 258-3149
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <MessageCircle className="size-4 shrink-0 text-[#86EFAC]" />
                <a
                  href="https://wa.me/13412583149"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-white font-semibold transition-colors"
                >
                  (341) 258-3149
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-[#86EFAC]" />
                <a
                  href="mailto:gardenchildcaregrowing@gmail.com"
                  className="hover:underline hover:text-white font-semibold transition-colors"
                >
                  gardenchildcaregrowing@gmail.com
                </a>
              </p>
            </div>

            <div className="mt-4 flex gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid size-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid size-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <Instagram className="size-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Barra inferior de copyright limpia */}
        <div className="border-t border-white/10 py-5 text-center text-xs text-white/80 font-medium">
          © 2026 Growing Garden Family Child Care. All rights reserved.
        </div>
      </footer>

      {/* Floating WhatsApp Quick-Contact Pill */}
      <a
        href="https://wa.me/13412583149"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-[#0F8B44] px-5 py-3.5 text-sm font-bold text-white shadow-soft transition-all hover:bg-[#0C7338] hover:-translate-y-1 active:translate-y-0"
        aria-label={t.global.chat}
      >
        <span className="relative">
          <MessageCircle className="size-5" />
          <span className="absolute -right-1 -top-1 size-2.5 rounded-full bg-[#F9B200] ring-2 ring-[#0F8B44]" />
        </span>
        <span className="hidden sm:inline">{t.global.chat}</span>
      </a>
    </div>
  );
}

