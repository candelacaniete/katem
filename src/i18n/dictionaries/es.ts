import { bookingHref, demosHref, site } from "@/lib/site";

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
      { href: "#metodo", label: "MÉTODO" },
      { href: "#estudio", label: "ESTUDIO" },
      { href: "#contacto", label: "CONTACTO" },
    ],
    demos: { href: demosHref, label: "DEMOS" },
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
    ctaSecondary: "INICIAR PROYECTO ↗",
    windowTitle: "KATEM_SYSTEM.exe",
    status: "ESTADO: ONLINE",
    visualLabel: "SISTEMA / IDENTIDAD",
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
    projects: [
      {
        id: "001",
        title: "UNIQ POSITIVO",
        tags: "IDENTIDAD / WEB / ESTRATEGIA",
        href: demosHref,
      },
      {
        id: "002",
        title: "PARQUE PATRICIOS INFORMA",
        tags: "WEB / COMUNICACIÓN",
        href: demosHref,
      },
      {
        id: "003",
        title: "AVANTEM",
        tags: "PRODUCTO / SISTEMA",
        href: demosHref,
      },
      {
        id: "004",
        title: "SANAR VALE LA PENA",
        tags: "IDENTIDAD / EXPERIENCIA",
        href: demosHref,
      },
      {
        id: "005",
        title: "OTROS PROYECTOS",
        tags: "ARCHIVO / DEMOS",
        href: demosHref,
      },
    ],
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
      "Cada proyecto combina diseño, estrategia y tecnología para construir una presencia digital que represente el valor de tu trabajo.",
      "Trabajamos con profesionales y marcas que acompañan personas — psicólogos, terapeutas, coaches, nutricionistas y equipos que necesitan verse tan profesionales como el servicio que ofrecen.",
      "Comunicación clara. Diseño con identidad. Sin soluciones genéricas.",
    ],
    meta: "BUENOS AIRES / ARGENTINA / MUNDO",
  },
  terminal: {
    title: "KATEM / TERMINAL",
    prompt: ">",
    lines: [
      { cmd: "quiénes_somos", out: ["ESTUDIO DIGITAL INDEPENDIENTE"] },
      {
        cmd: "qué_hacemos",
        out: ["DISEÑO", "ESTRATEGIA", "DESARROLLO", "AUTOMATIZACIÓN"],
      },
      { cmd: "dónde", out: ["BUENOS AIRES", "ARGENTINA", "MUNDO"] },
      { cmd: "estado", out: ["ACEPTANDO NUEVOS PROYECTOS"] },
    ],
    placeholder: "escribí un comando…",
    help: [
      "comandos: ayuda, estudio, servicios, proyectos, contacto",
    ],
    responses: {
      ayuda: ["comandos disponibles:", "ayuda · estudio · servicios · proyectos · contacto"],
      estudio: ["estudio digital boutique.", "criterio, diseño y sistemas."],
      servicios: ["experiencias · estrategia · productos · sistemas"],
      proyectos: [`archivo en ${site.demos}`],
      contacto: [`whatsapp / ${site.email}`],
      unknown: ['comando no reconocido.', 'probá escribir "ayuda".'],
    },
  },
  cta: {
    lines: ["TU PRÓXIMO", "MOVIMIENTO", "DIGITAL", "EMPIEZA ACÁ."],
    accent: "EMPIEZA ACÁ.",
    button: "INICIAR PROYECTO ↗",
    note: "Proyectos seleccionados.\nBuenos Aires / Argentina / Mundo.",
    href: bookingHref,
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
