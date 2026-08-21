import { bookingHref, emailHref, site } from "@/lib/site";

const es = {
  meta: {
    title: "KATEM® — Estudio digital boutique",
    description:
      "Diseñamos experiencias digitales para marcas que quieren ser recordadas. Estudio independiente en Buenos Aires.",
  },
  skip: "Saltar al contenido",
  skipBoot: "Saltar intro",
  nav: {
    brand: site.brand,
    studio: site.tagline,
    links: [
      { href: "#archivo", label: "TRABAJO" },
      { href: "#servicios", label: "SERVICIOS" },
      { href: "#why", label: "POR QUÉ" },
      { href: "#metodo", label: "MÉTODO" },
      { href: "#estudio", label: "ESTUDIO" },
      { href: "#contacto", label: "CONTACTO" },
    ],
    demos: { href: "#archivo", label: "DEMOS" },
    lang: { es: "ES", en: "EN" },
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  boot: {
    brand: site.brand,
    studio: site.tagline,
    lines: [
      "INICIANDO SISTEMA...",
      "CARGANDO IDENTIDAD...",
      "CARGANDO EXPERIENCIA...",
      "CARGANDO SISTEMA...",
    ],
    welcome: "BIENVENIDA A KATEM.",
  },
  cursor: {
    open: "ABRIR",
    view: "VER",
    explore: "EXPLORAR",
    enter: "ENTRAR →",
  },
  hero: {
    line1: "TU MARCA",
    line2Before: "MERECE ",
    line2Accent: "MÁS",
    line3: "QUE UNA WEB.",
    sub: "Diseñamos experiencias digitales\npara marcas que quieren ser recordadas.",
    ctaPrimary: "VER PROYECTOS →",
    ctaSecondary: "AGENDAR LLAMADA DE DESCUBRIMIENTO →",
    windowTitle: "KATEM_SYSTEM.exe",
    status: "STATUS: ACCEPTING PROJECTS",
    visualLabel: "SYSTEM / DIGITAL EXPERIENCE",
    systemRows: [
      { id: "01", label: "STRATEGY", state: "ONLINE" },
      { id: "02", label: "DESIGN", state: "ONLINE" },
      { id: "03", label: "DEVELOPMENT", state: "ONLINE" },
      { id: "04", label: "AUTOMATION", state: "ONLINE" },
    ],
    signalLabel: "SIGNAL",
    signalBar: "████████████ 100%",
  },
  statement: {
    blocks: [
      ["NO HACEMOS", "SOLO WEBS."],
      ["CREAMOS", "EXPERIENCIAS", "DIGITALES."],
      ["QUE LA GENTE", "RECUERDA."],
    ],
  },
  archivo: {
    label: "ARCHIVO",
    title: "PROYECTOS SELECCIONADOS",
    view: "VER →",
    openBot: "PROBAR →",
    kindWeb: "[WEB]",
    kindBot: "[BOT]",
    projects: [
      {
        id: "001",
        title: "NOVA",
        kind: "web" as const,
        tags: "IDENTITY / STRATEGY / DIGITAL",
        href: "/demos/nova",
        external: false,
        subtitle: "Creative Consultancy · Landing",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "002",
        title: "NORTE",
        kind: "web" as const,
        tags: "INSTITUTIONAL / ARCHITECTURE",
        href: "/demos/norte",
        external: false,
        subtitle: "Architecture & Design · Institucional",
        image:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "003",
        title: "MORROW",
        kind: "web" as const,
        tags: "ECOMMERCE / DIGITAL PRODUCT",
        href: "/demos/morrow",
        external: false,
        subtitle: "Objects · Ecommerce",
        image:
          "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "004",
        title: "BOT",
        kind: "bot" as const,
        tags: "AUTOMATION / CONVERSATION",
        href: "#archivo-bot",
        external: false,
        subtitle: "Asistente conversacional · Demo",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
      },
    ],
    bot: {
      windowTitle: "ARCHIVE_004.EXE",
      close: "CERRAR",
      inputPlaceholder: "Escribí TURNO, INFO o LEAD…",
      send: "ENVIAR",
      typing: "escribiendo…",
      welcome:
        "Hola. Soy un bot que Katem puede construir para tu negocio. Elegí qué querés probar:",
      menu: [
        "— Escribí TURNO para reservar un turno",
        "— Escribí INFO para consultar precios/servicios",
        "— Escribí LEAD para dejar tus datos y que te contacten",
      ],
      fallback:
        "No te seguí del todo. Probá con TURNO, INFO o LEAD.",
      fallbackFinal:
        "Sin problema. Acá van de nuevo las opciones:",
      ctaText: "¿Querés algo así para tu negocio?",
      ctaLink: "Hablemos →",
      ctaHref: bookingHref,
      menuAgain: "Volver al menú",
      stepHint: "DEMO / ELEGÍ UNA OPCIÓN",
      ctaHint: "DEMO / CTA",
      flows: {
        TURNO: [
          {
            prompt:
              "Perfecto. Vamos a reservar un turno (demo). ¿Para qué servicio sería?",
            options: [
              { id: "corte", label: "Corte" },
              { id: "color", label: "Color" },
              { id: "otro", label: "Otro servicio" },
            ],
            storeAs: "servicio",
          },
          {
            prompt: "Anotado para {servicio}. ¿Qué día te viene bien?",
            options: [
              { id: "hoy", label: "Hoy" },
              { id: "semana", label: "Esta semana" },
              { id: "proxima", label: "La semana que viene" },
            ],
            storeAs: "dia",
          },
          {
            prompt:
              "Listo: turno simulado confirmado para {servicio}, {dia}. En un bot real esto quedaría en tu agenda.",
          },
        ],
        INFO: [
          {
            prompt: "¿Sobre qué te gustaría info?",
            options: [
              { id: "precios", label: "Precios" },
              { id: "servicios", label: "Servicios" },
              { id: "horarios", label: "Horarios" },
            ],
            storeAs: "tema",
            replyByOption: {
              precios:
                "Precios demo: se configuran según tu negocio. Esta demo no cotiza en vivo.",
              servicios:
                "Servicios demo: consultas, reservas y seguimiento de leads.",
              horarios:
                "Horarios demo: un bot real respondería con tu agenda real (ej. lun–vie 10–18).",
            },
          },
        ],
        LEAD: [
          {
            prompt: "¿Cómo preferís que te contactemos?",
            options: [
              { id: "whatsapp", label: "WhatsApp" },
              { id: "email", label: "Email" },
              { id: "llamada", label: "Llamada" },
            ],
            storeAs: "canal",
          },
          {
            prompt:
              "Perfecto, en un bot real ahí te pediría el dato de contacto y quedaría cargado como lead. (demo)",
          },
        ],
      },
    },
  },
  servicios: {
    label: "PROTOCOLO",
    title: ["LO QUE", "PODEMOS", "CONSTRUIR."],
    items: [
      {
        id: "01",
        title: "EXPERIENCIAS\nDIGITALES",
        description:
          "Sitios y landings pensados para comunicar con claridad, transmitir profesionalismo y convertir visitas en consultas.",
      },
      {
        id: "02",
        title: "ESTRATEGIA\nDIGITAL",
        description:
          "Definimos el camino de tu presencia online: mensaje, estructura y automatizaciones que simplifican tu trabajo diario.",
      },
      {
        id: "03",
        title: "PRODUCTOS\nDIGITALES",
        description:
          "Tiendas, cursos y recursos digitales desde una plataforma propia, lista para vender sin depender de terceros.",
      },
      {
        id: "04",
        title: "SISTEMAS",
        description:
          "Integraciones y flujos que hacen que tu negocio siga trabajando incluso cuando vos no estás frente a la pantalla.",
      },
    ],
  },
  why: {
    label: "CRITERIOS",
    title: "¿POR QUÉ KATEM?",
    lead: "No necesitás otra web.\nNecesitás una presencia digital que funcione.",
    reasons: [
      {
        id: "01",
        title: "SIN PLANTILLAS",
        body: "No empezamos desde una plantilla. Diseñamos la experiencia alrededor de tu negocio, tu audiencia y tus objetivos.",
      },
      {
        id: "02",
        title: "DISEÑO + ESTRATEGIA",
        body: "No separamos estética de estrategia. Cada decisión visual tiene una razón.",
      },
      {
        id: "03",
        title: "HECHO PARA TU NEGOCIO",
        body: "Desde una landing hasta un ecommerce o un sistema digital, construimos lo que realmente necesitás.",
      },
      {
        id: "04",
        title: "COLABORACIÓN PERSONAL",
        body: "Trabajás directamente con el estudio. Comunicación clara, decisiones rápidas y un proceso sin capas innecesarias.",
      },
    ],
    closing: ["TU NEGOCIO ES ÚNICO.", "TU WEB TAMBIÉN DEBERÍA SERLO."],
    cta: "CONSTRUYÁMOSLO →",
    href: bookingHref,
  },
  metodo: {
    label: "MÉTODO",
    title: "CÓMO LO HACEMOS",
    steps: [
      {
        id: "01",
        title: "ENTENDER",
        description:
          "Escuchamos tu negocio, tus objetivos y qué tiene que lograr el sitio. Una conversación clara por WhatsApp.",
      },
      {
        id: "02",
        title: "IDEAR",
        description:
          "Definimos dirección creativa y estructura. Criterio antes que plantillas.",
      },
      {
        id: "03",
        title: "DISEÑAR",
        description:
          "Composición, tipografía e identidad visual alineadas a la personalidad de tu marca.",
      },
      {
        id: "04",
        title: "CONSTRUIR",
        description:
          "Desarrollo limpio, rápido y mantenible. Tecnología al servicio del resultado.",
      },
      {
        id: "05",
        title: "LANZAR",
        description:
          "Publicamos, ajustamos y te dejamos lista una presencia online profesional.",
      },
    ],
  },
  estudio: {
    label: "ESTUDIO",
    title: ["KATEM", "NACIÓ DE UNA", "INCONFORMIDAD."],
    paragraphs: [
      "Creemos que internet debería sentirse menos genérico.",
      "Combinamos diseño, estrategia y tecnología para construir experiencias digitales que hacen que un negocio sea más fácil de entender, confiar y recordar.",
      "Trabajamos con profesionales, marcas y equipos que tienen algo que vale la pena construir.",
      "Comunicación clara.\nDiseño con identidad.\nTecnología con propósito.",
    ],
    meta: "BUENOS AIRES / ARGENTINA / MUNDO",
    windowTitle: "KATEM_OS",
    windowSubtitle: "ESTUDIO DIGITAL INDEPENDIENTE",
    windowPlaces: ["BUENOS AIRES", "ARGENTINA", "MUNDO"],
    windowCapabilities: ["DISEÑO", "ESTRATEGIA", "DESARROLLO", "AUTOMATIZACIÓN"],
    windowStatus: "ESTADO: ONLINE",
  },
  cta: {
    lines: ["TU PRÓXIMO MOVIMIENTO DIGITAL", "EMPIEZA ACÁ."],
    accent: "EMPIEZA ACÁ.",
    button: "AGENDAR LLAMADA →",
    secondary: "INICIAR UN PROYECTO →",
    email: site.email,
    note: "Buenos Aires / Argentina / Mundo.",
    href: bookingHref,
    secondaryHref: emailHref,
  },
  footer: {
    brand: site.brand,
    studio: site.tagline,
    links: [
      { href: "#archivo", label: "TRABAJOS" },
      { href: "#servicios", label: "SERVICIOS" },
      { href: "#estudio", label: "ESTUDIO" },
      { href: "#contacto", label: "CONTACTO" },
    ],
    social: [
      { href: site.instagram, label: "INSTAGRAM", external: true },
      { href: `mailto:${site.email}`, label: "EMAIL", external: false },
    ],
    copy: `© ${site.year} KATEM`,
    location: "BUENOS AIRES, ARGENTINA",
    mantra: "HECHO PARA INTERNET.\nNO PARA PLANTILLAS.",
  },
};

export type Dictionary = typeof es;
export default es;
