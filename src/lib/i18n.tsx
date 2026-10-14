import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type Language = "en" | "es";

export interface TranslationDictionary {
  nav: {
    home: string;
    about: string;
    programs: string;
    tour: string;
    contact: string;
  };
  actions: {
    tour: string;
    whatsapp: string;
    learn: string;
    inquire: string;
    rsvp: string;
    next: string;
    back: string;
    submit: string;
  };
  global: {
    eyebrow: string;
    openHouse: string;
    day: string;
    night: string;
    dayTime: string;
    nightTime: string;
    license: string;
    address: string;
    serviceArea: string;
    phone: string;
    email: string;
    chat: string;
    detailsPending: string;
    copyright: string;
  };
  home: {
    title: string;
    intro: string;
    badges: string[];
    rating: string;
    collage: string;
    metrics: string[][];
    programKicker: string;
    programTitle: string;
    flexibleTitle: string;
    flexibleText: string;
    founderKicker: string;
    founderTitle: string;
    founderQuote: string;
    reviewsTitle: string;
    reviews: string[][];
    bannerTitle: string;
    bannerText: string;
  };
  about: {
    kicker: string;
    title: string;
    intro: string;
    timeline: string[][];
    pillarsTitle: string;
    pillars: string[][];
    spacesTitle: string;
    spaces: string[][];
    safetyTitle: string;
    safety: string[];
  };
  programs: {
    kicker: string;
    title: string;
    intro: string;
    groups: string[][];
    routine: string;
    routines: string[];
    calculator: string;
    calcIntro: string;
    modes: string[];
    shifts: string[];
    quantity: string[];
    starting: string;
    from: string;
    included: string;
    inclusions: string[];
    disclaimer: string;
  };
  tour: {
    kicker: string;
    title: string;
    intro: string;
    steps: string[][];
    formTitle: string;
    formSteps: string[];
    date: string;
    time: string;
    saturday: string;
    age: string;
    name: string;
    phone: string;
    notes: string;
    complete: string;
    completeText: string;
    faqTitle: string;
    faqs: string[][];
  };
  contact: {
    kicker: string;
    title: string;
    intro: string;
    cards: string[][];
    location: string;
    locationText: string;
    hours: string;
    weekdays: string;
    saturday: string;
    formTitle: string;
    name: string;
    email: string;
    phone: string;
    language: string;
    interest: string;
    message: string;
    success: string;
  };
  programsData: {
    infants: string[];
    toddlers: string[];
    preschool: string[];
    after: string[];
  };
}

const copy: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      programs: "Our Programs",
      tour: "Our Daycare",
      contact: "Contact",
    },
    actions: {
      tour: "Schedule a Tour",
      whatsapp: "WhatsApp",
      learn: "Learn more",
      inquire: "Inquire for Availability",
      rsvp: "RSVP for Saturday",
      next: "Continue",
      back: "Back",
      submit: "Send inquiry",
    },
    global: {
      eyebrow: "Care from 1 to 13 Years · 24-Hour Flexible Schedules",
      openHouse: "Free Saturday Tour: 10:00 AM – 1:00 PM",
      day: "Day Schedule",
      night: "Night Schedule",
      dayTime: "Mon–Fri: 6:00 AM – 3:00 PM | Sat: Project Class 9:00 AM – 12:00 PM, Open House 10:00 AM – 1:00 PM | Sun: Closed",
      nightTime: "Mon–Fri: 5:00 PM – 11:00 PM | Sat: 9:00 AM – 12:00 PM",
      license: "Licensed Family Child Care Facility · State of California License",
      address: "190 Goodrich St., Hayward, California 94544",
      serviceArea: "Hayward, California and nearby Alameda County areas",
      phone: "(341) 258-3149",
      email: "gardenchildcaregrowing@gmail.com",
      chat: "Chat with Francisca",
      detailsPending: "Direct attention with Francisca",
      copyright: "© 2026 Growing Garden Family Child Care. All rights reserved.",
    },
    home: {
      title: "A second home where children grow, learn, and thrive happily",
      intro: "Over 26 years of experience & loving devotion providing a safe, family-oriented, and nurturing space in Hayward, California.",
      badges: ["26+ Years of Experience & Devotion", "Bilingual English & Spanish", "Day & Night Shifts Available", "Hourly Drop-In & Daily Care"],
      rating: "5.0 parent rating",
      collage: "Children tending a garden with their caregiver",
      metrics: [
        ["Small groups", "Attentive care"],
        ["CPR + First Aid", "Certified"],
        ["Gated + sanitized", "Thoughtful spaces"],
        ["Balanced snacks", "Wholesome fuel"],
      ],
      programKicker: "Care that grows with them",
      programTitle: "A rhythm for every little learner",
      flexibleTitle: "Care that flexes with real family life",
      flexibleText: "Hourly drop-in care and daily passes offer a trusted place to land when work shifts, appointments, or changing schedules need a little extra support.",
      founderKicker: "Meet the founder",
      founderTitle: "Francisca has spent 26+ years making childhood feel safe, joyful, and full of possibility.",
      founderQuote: "I believe children flourish when they are deeply known. Our garden is a place where they can be curious, build confidence, and always feel at home.",
      reviewsTitle: "Kind words from our garden families",
      reviews: [
        ["Francisca notices the small things—what makes our daughter laugh, what helps her settle, and what sparks her curiosity.", "Maya's family", "Preschool"],
        ["Night care has been a gift for our family. Dinner, play, and bedtime feel calm and consistent.", "Leo's family", "Toddler"],
        ["The bilingual environment feels natural and joyful. Our son comes home singing in both languages.", "Nico's family", "Pre-K"],
      ],
      bannerTitle: "Come see our little garden in bloom",
      bannerText: "Free open house every Saturday, 10:00 AM–1:00 PM. Meet Francisca, explore the spaces, and ask every question.",
    },
    about: {
      kicker: "A life devoted to little beginnings",
      title: "Francisca’s story is rooted in care",
      intro: "For more than 26 years, Francisca has helped young children feel secure enough to explore, express themselves, and grow at their own pace.",
      timeline: [
        ["1999", "A calling begins", "Francisca begins her work in early childhood education, learning that trust is the foundation of every milestone."],
        ["2008", "Families become community", "Years of close partnership with parents shape a deeply responsive, home-like approach."],
        ["Today", "Growing Garden opens", "A small bilingual program brings experienced care, playful learning, and flexible schedules together in Hayward."],
      ],
      pillarsTitle: "The roots of our garden",
      pillars: [
        ["Play-based learning", "Children investigate, imagine, build, and make meaning through purposeful play."],
        ["Emotional security", "Predictable rhythms and responsive care help every child feel safe and understood."],
        ["Bilingual immersion", "English and Spanish live naturally in songs, stories, conversation, and daily routines."],
        ["Outdoor curiosity", "Fresh air, movement, and garden discovery make nature part of the classroom."],
      ],
      spacesTitle: "Made for calm, creativity & movement",
      spaces: [
        ["Nap haven", "A quiet, dimmable retreat with individual sleep spaces and attentive supervision."],
        ["Creative corners", "Open-ended art, sensory materials, books, and building toys at child height."],
        ["Outdoor garden", "A gated play yard for growing, climbing, digging, and noticing the seasons."],
      ],
      safetyTitle: "Your child’s wellbeing, thoughtfully protected",
      safety: [
        "CPR and First Aid certified care",
        "Secure arrivals and authorized pickup",
        "Daily cleaning and sanitizing routines",
        "Age-appropriate sleep practices",
        "Documented emergency readiness",
        "Clear illness and medication policies",
      ],
    },
    programs: {
      kicker: "Programs & flexible rates",
      title: "The right care for your child—and your calendar",
      intro: "Choose a consistent weekly rhythm or flexible support. Every program blends nurturing routines, play, language, movement, and outdoor time.",
      groups: [
        ["Infant Care", "3–18 months", "Connection-led care with feeding, rest, sensory play, and one-to-one language."],
        ["Toddlers", "18–36 months", "Movement, early independence, songs, sensory discovery, and gentle social learning."],
        ["Pre-K", "3–5 years", "Playful literacy, early math, art, science, and school-ready confidence."],
        ["After-School", "5–10 years", "A calm landing place for snack, homework support, making, and outdoor play."],
      ],
      routine: "Daily rhythm",
      routines: ["Welcome & settle", "Learning invitation", "Garden time", "Meal & connection", "Rest / quiet choice", "Creative afternoon"],
      calculator: "Build a care estimate",
      calcIntro: "Explore sample starting rates. Final tuition and availability are confirmed directly with Francisca.",
      modes: ["Full-Time Monthly", "Part-Time Days", "Hourly Drop-In Care"],
      shifts: ["Day Care · 6 AM–3 PM", "Night Care · 5 PM–11 PM"],
      quantity: ["Months", "Days per week", "Hours"],
      starting: "Sample estimate",
      from: "Starting at",
      included: "Included in care",
      inclusions: ["Balanced meals & snacks", "Daily family updates", "Learning materials", "Diapers & personal supplies brought from home"],
      disclaimer: "Sample pricing for planning only; confirm current rates and enrollment details with Francisca.",
    },
    tour: {
      kicker: "Tour & admissions",
      title: "A gentle start to a lasting partnership",
      intro: "Getting to know your family comes first. Visit the garden, share what your child needs, and take each step at a comfortable pace.",
      steps: [
        ["01", "Schedule a tour", "Choose a private visit or join our free Saturday open house."],
        ["02", "Family meet & greet", "Talk through routines, temperament, care needs, and your ideal schedule."],
        ["03", "Welcome & orientation", "Complete enrollment details and help your child ease into their new rhythm."],
      ],
      formTitle: "Plan your visit",
      formSteps: ["Visit", "Your child", "About you"],
      date: "Preferred date",
      time: "Time slot",
      saturday: "Saturday Open House",
      age: "Child’s age group",
      name: "Parent / guardian name",
      phone: "Phone number",
      notes: "Anything you'd like Francisca to know?",
      complete: "Your tour request is ready",
      completeText: "Thank you. Francisca will follow up once confirmed contact details are connected.",
      faqTitle: "Questions families often ask",
      faqs: [
        ["Is there a minimum for drop-in care?", "Drop-in minimums depend on the day and current availability. Francisca will confirm the best option for your schedule."],
        ["How does the night-care dinner routine work?", "Night care follows a calm family-style rhythm with dinner, quiet play, hygiene, and rest preparation."],
        ["Do children need to be potty trained?", "No. Readiness is individual, and toilet learning is supported through respectful, consistent partnership with families."],
        ["What is the illness policy?", "Families receive clear health guidance before enrollment, including when children should rest at home and return to care."],
      ],
    },
    contact: {
      kicker: "Let’s connect",
      title: "Tell us what your family needs",
      intro: "Questions about a schedule, age group, or flexible care? Reach out in the way that feels easiest.",
      cards: [
        ["WhatsApp", "Start a quick conversation"],
        ["Call", "Speak directly with Francisca"],
        ["Email", "Send a detailed inquiry"],
      ],
      location: "Our Hayward garden",
      locationText: "Located in Hayward, California. For family privacy and safety, the exact address is shared with confirmed tour guests.",
      hours: "Hours that meet real life",
      weekdays: "Monday–Friday",
      saturday: "Saturday open house",
      formTitle: "Send an inquiry",
      name: "Parent / guardian name",
      email: "Email address",
      phone: "Phone number",
      language: "Preferred language",
      interest: "Program of interest",
      message: "How can we support your family?",
      success: "Thank you—your inquiry is ready for Francisca.",
    },
    programsData: {
      infants: ["Infants", "Secure bonds & sensory discovery", "Responsive feeding", "Tummy time & movement", "Songs in English & Spanish"],
      toddlers: ["Toddlers", "Independence through playful routines", "Sensory exploration", "Language-rich play", "Outdoor movement"],
      preschool: ["Preschool", "Curiosity that builds school confidence", "Early literacy & math", "Creative projects", "Friendship skills"],
      after: ["After-School", "A calm, enriching end to the day", "Homework support", "Garden play", "Art & maker time"],
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      programs: "Nuestros Programas",
      tour: "Nuestro Hogar",
      contact: "Contacto",
    },
    actions: {
      tour: "Agenda una Visita",
      whatsapp: "WhatsApp",
      learn: "Conoce más",
      inquire: "Consulta Disponibilidad",
      rsvp: "Reserva el Sábado",
      next: "Continuar",
      back: "Atrás",
      submit: "Enviar consulta",
    },
    global: {
      eyebrow: "Cuidado de 1 a 13 años · Horarios flexibles las 24 horas",
      openHouse: "Open House los sábados: 10:00 AM – 1:00 PM",
      day: "Turno Diurno",
      night: "Turno Nocturno",
      dayTime: "Lun–Vie: 6:00 AM – 3:00 PM | Sáb: Clase de Proyectos 9:00 AM – 12:00 PM, Open House 10:00 AM – 1:00 PM | Dom: Cerrado",
      nightTime: "Lun–Vie: 5:00 PM – 11:00 PM | Sáb: 9:00 AM – 12:00 PM",
      license: "Hogar de Cuidado Infantil con Licencia del Estado de California",
      address: "190 Goodrich St., Hayward, California 94544",
      serviceArea: "Hayward, California y áreas cercanas del Condado de Alameda",
      phone: "(341) 258-3149",
      email: "gardenchildcaregrowing@gmail.com",
      chat: "Habla con Francisca",
      detailsPending: "Atención directa con Francisca",
      copyright: "© 2026 Growing Garden Family Child Care. Todos los derechos reservados.",
    },
    home: {
      title: "Un segundo hogar donde los niños crecen, aprenden y prosperan felices",
      intro: "Más de 26 años de experiencia y vocación brindando un espacio seguro, familiar y lleno de amor en Hayward, California.",
      badges: ["Más de 26 años de experiencia y vocación", "Bilingüe Inglés y Español", "Turnos de día y noche disponibles", "Cuidado por hora y por día"],
      rating: "Calificación 5.0 de padres",
      collage: "Niños cuidando el jardín con su maestra",
      metrics: [
        ["Grupos pequeños", "Atención cercana"],
        ["RCP + Primeros Auxilios", "Certificada"],
        ["Espacio seguro y limpio", "Ambientes cuidados"],
        ["Meriendas balanceadas", "Nutrición saludable"],
      ],
      programKicker: "Cuidado que crece con ellos",
      programTitle: "Un ritmo para cada pequeño aprendiz",
      flexibleTitle: "Cuidado flexible para la vida familiar real",
      flexibleText: "El cuidado por hora y los pases diarios ofrecen un lugar confiable cuando el trabajo, las citas o los cambios de horario requieren apoyo.",
      founderKicker: "Conoce a la fundadora",
      founderTitle: "Francisca lleva más de 26 años haciendo de la infancia una etapa segura, alegre y llena de posibilidades.",
      founderQuote: "Creo que los niños florecen cuando son verdaderamente conocidos. Nuestro jardín les permite explorar, ganar confianza y sentirse siempre en casa.",
      reviewsTitle: "Palabras de nuestras familias",
      reviews: [
        ["Francisca nota los pequeños detalles: qué hace reír a nuestra hija y qué despierta su curiosidad.", "Familia de Maya", "Preescolar"],
        ["El cuidado nocturno ha sido un regalo. La cena, el juego y el descanso se sienten tranquilos.", "Familia de Leo", "Niños pequeños"],
        ["El ambiente bilingüe es natural y alegre. Nuestro hijo vuelve cantando en ambos idiomas.", "Familia de Nico", "Pre-K"],
      ],
      bannerTitle: "Ven a conocer nuestro jardín",
      bannerText: "Visita gratuita cada sábado, de 10:00 AM a 1:00 PM. Conoce a Francisca, recorre los espacios y pregunta todo lo que quieras.",
    },
    about: {
      kicker: "Una vida dedicada a los primeros años",
      title: "La historia de Francisca nace del cuidado",
      intro: "Durante más de 26 años, Francisca ha ayudado a niños pequeños a sentirse seguros para explorar, expresarse y crecer a su ritmo.",
      timeline: [
        ["1999", "Comienza una vocación", "Francisca inicia su labor en educación infantil y descubre que la confianza sostiene cada logro."],
        ["2008", "Las familias forman comunidad", "Años de colaboración cercana dan forma a un enfoque sensible y hogareño."],
        ["Hoy", "Nace Growing Garden", "Un pequeño programa bilingüe une experiencia, aprendizaje mediante el juego y horarios flexibles en Hayward."],
      ],
      pillarsTitle: "Las raíces de nuestro jardín",
      pillars: [
        ["Aprendizaje con juego", "Los niños investigan, imaginan y construyen significado mediante el juego."],
        ["Seguridad emocional", "Ritmos predecibles y cuidado sensible ayudan a cada niño a sentirse comprendido."],
        ["Inmersión bilingüe", "Inglés y español viven en canciones, cuentos, conversaciones y rutinas."],
        ["Curiosidad al aire libre", "El movimiento y el jardín hacen de la naturaleza parte del aula."],
      ],
      spacesTitle: "Espacios para la calma, creatividad y movimiento",
      spaces: [
        ["Rincón de descanso", "Un refugio tranquilo con espacios individuales y supervisión atenta."],
        ["Rincones creativos", "Arte, materiales sensoriales, libros y construcción al alcance de los niños."],
        ["Jardín exterior", "Un patio seguro para cultivar, trepar, cavar y observar las estaciones."],
      ],
      safetyTitle: "El bienestar de tu hijo, cuidadosamente protegido",
      safety: [
        "Cuidado certificado en RCP y primeros auxilios",
        "Llegadas seguras y recogida autorizada",
        "Rutinas diarias de limpieza",
        "Prácticas de sueño apropiadas",
        "Preparación documentada para emergencias",
        "Políticas claras de enfermedad y medicamentos",
      ],
    },
    programs: {
      kicker: "Programas y tarifas flexibles",
      title: "El cuidado adecuado para tu hijo y tu calendario",
      intro: "Elige una rutina semanal o apoyo flexible. Cada programa combina cuidado, juego, lenguaje, movimiento y tiempo al aire libre.",
      groups: [
        ["Bebés", "3–18 meses", "Cuidado basado en el vínculo, alimentación, descanso, juego sensorial y lenguaje individual."],
        ["Niños pequeños", "18–36 meses", "Movimiento, independencia temprana, canciones y aprendizaje social amable."],
        ["Pre-K", "3–5 años", "Lectura, matemáticas, arte, ciencia y confianza para la escuela mediante el juego."],
        ["Después de clases", "5–10 años", "Un espacio tranquilo para merendar, hacer tareas, crear y jugar afuera."],
      ],
      routine: "Ritmo diario",
      routines: ["Bienvenida", "Invitación a aprender", "Tiempo en el jardín", "Comida y conexión", "Descanso", "Tarde creativa"],
      calculator: "Calcula tu cuidado",
      calcIntro: "Explora tarifas iniciales de muestra. Francisca confirma la matrícula final y disponibilidad.",
      modes: ["Mensual tiempo completo", "Días de medio tiempo", "Cuidado por hora"],
      shifts: ["Día · 6 AM–3 PM", "Noche · 5 PM–11 PM"],
      quantity: ["Meses", "Días por semana", "Horas"],
      starting: "Estimado de muestra",
      from: "Desde",
      included: "Incluido en el cuidado",
      inclusions: ["Comidas y meriendas balanceadas", "Actualizaciones diarias", "Materiales de aprendizaje", "Pañales y artículos personales desde casa"],
      disclaimer: "Precios de muestra para planificación; confirma tarifas y detalles con Francisca.",
    },
    tour: {
      kicker: "Visitas y admisión",
      title: "Un comienzo amable para una relación duradera",
      intro: "Conocer a tu familia es lo primero. Visita el jardín, cuéntanos lo que necesita tu hijo y avanza a tu propio ritmo.",
      steps: [
        ["01", "Agenda una visita", "Elige una visita privada o nuestro evento gratuito del sábado."],
        ["02", "Encuentro familiar", "Conversemos sobre rutinas, personalidad, necesidades y horarios."],
        ["03", "Bienvenida y orientación", "Completa la inscripción y acompaña a tu hijo en su nueva rutina."],
      ],
      formTitle: "Planea tu visita",
      formSteps: ["Visita", "Tu hijo", "Sobre ti"],
      date: "Fecha preferida",
      time: "Horario",
      saturday: "Evento del sábado",
      age: "Grupo de edad",
      name: "Nombre del padre, madre o tutor",
      phone: "Teléfono",
      notes: "¿Algo que Francisca deba saber?",
      complete: "Tu solicitud de visita está lista",
      completeText: "Gracias. Francisca se comunicará cuando los datos de contacto estén confirmados.",
      faqTitle: "Preguntas frecuentes",
      faqs: [
        ["¿Hay un mínimo para cuidado por hora?", "El mínimo depende del día y la disponibilidad. Francisca confirmará la mejor opción."],
        ["¿Cómo funciona la cena en el turno nocturno?", "El turno nocturno sigue un ritmo tranquilo con cena, juego, higiene y preparación para descansar."],
        ["¿Deben saber usar el baño?", "No. Cada niño tiene su ritmo y el aprendizaje se acompaña respetuosamente con la familia."],
        ["¿Cuál es la política de enfermedad?", "Las familias reciben pautas claras de salud antes de inscribirse."],
      ],
    },
    contact: {
      kicker: "Conversemos",
      title: "Cuéntanos qué necesita tu familia",
      intro: "¿Preguntas sobre horarios, edades o cuidado flexible? Comunícate de la forma más cómoda.",
      cards: [
        ["WhatsApp", "Inicia una conversación rápida"],
        ["Llamar", "Habla directamente con Francisca"],
        ["Correo", "Envía una consulta detallada"],
      ],
      location: "Nuestro jardín en Hayward",
      locationText: "Ubicado en Hayward, California. Por privacidad y seguridad, compartimos la dirección exacta con visitas confirmadas.",
      hours: "Horarios para la vida real",
      weekdays: "Lunes–viernes",
      saturday: "Visita del sábado",
      formTitle: "Envía una consulta",
      name: "Nombre del padre, madre o tutor",
      email: "Correo electrónico",
      phone: "Teléfono",
      language: "Idioma preferido",
      interest: "Programa de interés",
      message: "¿Cómo podemos apoyar a tu familia?",
      success: "Gracias—tu consulta está lista para Francisca.",
    },
    programsData: {
      infants: ["Bebés", "Vínculos seguros y descubrimiento sensorial", "Alimentación sensible", "Movimiento", "Canciones en inglés y español"],
      toddlers: ["Niños pequeños", "Independencia mediante rutinas de juego", "Exploración sensorial", "Juego con lenguaje", "Movimiento exterior"],
      preschool: ["Preescolar", "Curiosidad que crea confianza escolar", "Lectura y matemáticas", "Proyectos creativos", "Habilidades sociales"],
      after: ["Después de clases", "Un final tranquilo y enriquecedor", "Apoyo con tareas", "Juego en el jardín", "Arte y creación"],
    },
  },
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const value = useMemo(() => ({ lang, setLang, t: copy[lang] }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used within LanguageProvider");
  return value;
}
