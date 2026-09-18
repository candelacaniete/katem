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
    servicesLabel: "SERVICIOS",
    services: [
      { href: "/desarrollo-web", label: "DESARROLLO WEB" },
      { href: "/prospeccion-b2b", label: "PROSPECCIÓN B2B" },
      { href: "/publicidad-digital", label: "PUBLICIDAD DIGITAL" },
      { href: "/automatizaciones", label: "AUTOMATIZACIONES" },
    ],
    links: [
      { href: "/proyectos", label: "PROYECTOS" },
      { href: "/contacto", label: "CONTACTO" },
    ],
    demos: { href: "/proyectos", label: "DEMOS" },
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
    ctaPrimaryHref: "/proyectos",
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
    label: "ECOSISTEMA",
    title: ["LO QUE", "PODEMOS", "CONSTRUIR."],
    enter: "ENTRAR →",
    items: [
      {
        id: "01",
        title: "DESARROLLO\nWEB",
        description:
          "Sitios y landings pensados para comunicar con claridad, transmitir profesionalismo y convertir visitas en consultas.",
        signal: "SIGNAL STABLE",
        href: "/desarrollo-web",
      },
      {
        id: "02",
        title: "PROSPECCIÓN\nB2B",
        description:
          "Sistemas de prospección para acercar tu negocio a las empresas correctas: investigación, outreach y seguimiento.",
        signal: "SIGNAL ACTIVE",
        href: "/prospeccion-b2b",
      },
      {
        id: "03",
        title: "PUBLICIDAD\nDIGITAL",
        description:
          "Campañas y creatividades orientadas a captar demanda cualificada y alimentar tu pipeline comercial.",
        signal: "SIGNAL STABLE",
        href: "/publicidad-digital",
      },
      {
        id: "04",
        title: "AUTOMATI-\nZACIONES",
        description:
          "Bots, integraciones y flujos que automatizan tareas, conversaciones y procesos cuando no estás frente a la pantalla.",
        signal: "SIGNAL STABLE",
        href: "/automatizaciones",
      },
    ],
  },
  pipeline: {
    label: "KATEM_PIPELINE.exe",
    title: "UNA WEB ES EL PUNTO DE PARTIDA.",
    lead: "Construimos sistemas digitales que conectan presencia, adquisición y seguimiento para generar oportunidades comerciales de forma más constante.",
    flow: ["ATTRACT", "CONVERT", "CONNECT", "FOLLOW UP"],
    steps: [
      {
        id: "01",
        title: "PRESENCIA",
        description:
          "Construimos una web o landing preparada para convertir interés en consultas.",
      },
      {
        id: "02",
        title: "ADQUISICIÓN",
        description:
          "Identificamos empresas y decisores que encajan con tu cliente ideal.",
      },
      {
        id: "03",
        title: "OUTREACH",
        description:
          "Activamos conversaciones con mensajes personalizados por email y LinkedIn.",
      },
      {
        id: "04",
        title: "SISTEMA",
        description:
          "Organizamos respuestas, seguimiento y oportunidades para que sepas qué está pasando en cada etapa.",
      },
    ],
    cta: "QUIERO CONSTRUIR MI PIPELINE →",
    href: bookingHref,
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
          "Escuchamos tu negocio, tus objetivos y qué tiene que lograr el sistema digital. Una conversación clara.",
      },
      {
        id: "02",
        title: "DEFINIR",
        description:
          "Priorizamos alcance, mensaje y arquitectura. Criterio antes que plantillas.",
      },
      {
        id: "03",
        title: "CONSTRUIR",
        description:
          "Diseño y desarrollo limpio, rápido y mantenible. Tecnología al servicio del resultado.",
      },
      {
        id: "04",
        title: "ACTIVAR",
        description:
          "Publicamos, conectamos adquisición y dejamos los flujos listos para operar.",
      },
      {
        id: "05",
        title: "MEDIR",
        description:
          "Revisamos señales, conversiones y oportunidades para iterar con evidencia.",
      },
    ],
  },
  estudio: {
    label: "ESTUDIO",
    title: ["KATEM", "NACIÓ DE UNA", "INCONFORMIDAD."],
    command: "$ cat about.txt",
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
    secondary: "IR A CONTACTO →",
    email: site.email,
    note: "Buenos Aires / Argentina / Mundo.",
    href: bookingHref,
    secondaryHref: "/contacto",
  },
  footer: {
    brand: site.brand,
    studio: site.tagline,
    links: [
      { href: "/proyectos", label: "PROYECTOS" },
      { href: "/desarrollo-web", label: "DESARROLLO WEB" },
      { href: "/prospeccion-b2b", label: "PROSPECCIÓN B2B" },
      { href: "/contacto", label: "CONTACTO" },
    ],
    social: [
      { href: site.instagram, label: "INSTAGRAM", external: true },
      { href: `mailto:${site.email}`, label: "EMAIL", external: false },
    ],
    copy: `© ${site.year} KATEM`,
    location: "BUENOS AIRES, ARGENTINA",
    mantra: "HECHO PARA INTERNET.\nNO PARA PLANTILLAS.",
    privacy: { href: "/privacidad", label: "PRIVACIDAD" },
  },
  pages: {
    desarrolloWeb: {
      meta: {
        title: "Desarrollo web — KATEM®",
        description:
          "Sitios y landings con identidad, claridad y conversión. Desarrollo web a medida desde Buenos Aires.",
      },
      label: "SERVICIO / 01",
      title: "DESARROLLO WEB",
      lead: "Tu sitio tiene que explicar quién sos, qué ofrecés y por qué escribirte — en segundos, no en párrafos.",
      visual: {
        windowTitle: "SITE_LAYOUT.exe",
        status: "BUILD · READY",
        browserLabel: "VIEWPORT",
        files: ["index.html", "styles.css", "components/"],
      },
      sections: [
        {
          title: "Para qué sirve",
          body: "Armamos sitios institucionales y landings para que tu marca se entienda al instante y genere consultas reales — no solo visitas.",
        },
        {
          title: "Cómo lo encaramos",
          body: "Primero mensaje y estructura. Después diseño, desarrollo y publicación. Sin plantillas genéricas ni capas de más.",
        },
      ],
      deliverables: {
        label: "ENTREGABLES",
        items: [
          "Sitio o landing a medida",
          "Dirección visual y tipografía",
          "Desarrollo limpio y mantenible",
          "Publicación y ajustes de lanzamiento",
        ],
      },
      cta: "HABLAR DE UN SITIO →",
      ctaHref: bookingHref,
    },
    prospectionB2b: {
      meta: {
        title: "Prospección B2B — KATEM®",
        description:
          "Sistemas de prospección B2B: investigación de cuentas, outreach personalizado y seguimiento de oportunidades.",
      },
      label: "SERVICIO / 02",
      title: "PROSPECCIÓN B2B",
      lead: "Un sistema para llegar a las empresas correctas con un mensaje claro — y saber qué hacer con cada respuesta.",
      visual: {
        windowTitle: "OUTBOUND_SYS.exe",
        status: "PIPELINE · LIVE",
        rows: [
          { key: "ICP", value: "LOCKED", bar: 10 },
          { key: "ACCOUNTS", value: "MAPPED", bar: 8 },
          { key: "OUTREACH", value: "ACTIVE", bar: 7 },
          { key: "FOLLOW-UP", value: "QUEUED", bar: 6 },
        ],
        flow: ["RESEARCH", "CONTACT", "REPLY", "MEETING"],
      },
      sections: [
        {
          title: "Para qué sirve",
          body: "Cuando el inbound no alcanza, armamos adquisición B2B para generar oportunidades de forma más constante.",
        },
        {
          title: "Cómo lo encaramos",
          body: "Definimos el cliente ideal, armamos listas de cuentas, activamos outreach por email o LinkedIn, y organizamos el seguimiento.",
        },
      ],
      deliverables: {
        label: "ENTREGABLES",
        items: [
          "Definición de ICP y mensajes",
          "Investigación de cuentas y decisores",
          "Secuencias de outreach",
          "Sistema de seguimiento de oportunidades",
        ],
      },
      cta: "ARMAR MI PIPELINE →",
      ctaHref: bookingHref,
    },
    publicidadDigital: {
      meta: {
        title: "Publicidad digital — KATEM®",
        description:
          "Publicidad digital orientada a demanda cualificada: creatividades, campañas y medición al servicio del pipeline.",
      },
      label: "SERVICIO / 03",
      title: "PUBLICIDAD DIGITAL",
      lead: "Campañas para atraer gente que puede comprar — no para llenar el embudo de ruido.",
      visual: {
        windowTitle: "CAMPAIGN_RUN.exe",
        status: "SIGNAL · ON",
        flow: ["OFFER", "CREATIVE", "AUDIENCE", "LEAD", "HANDOFF"],
      },
      sections: [
        {
          title: "Para qué sirve",
          body: "Activamos publicidad cuando la oferta está clara y el sitio puede convertir. El objetivo es demanda cualificada, no tráfico vacío.",
        },
        {
          title: "Cómo lo encaramos",
          body: "Alineamos mensaje, creatividades y audiencias. Medimos consultas y calidad de leads, y ajustamos con criterio — no con vanidad.",
        },
      ],
      deliverables: {
        label: "ENTREGABLES",
        items: [
          "Estrategia de captación",
          "Creatividades y copy",
          "Configuración de campañas",
          "Lectura de resultados y ajustes",
        ],
      },
      cta: "REVISAR PUBLICIDAD →",
      ctaHref: bookingHref,
    },
    automatizaciones: {
      meta: {
        title: "Automatizaciones — KATEM®",
        description:
          "Bots, integraciones y flujos que automatizan conversaciones, tareas y seguimiento comercial.",
      },
      label: "SERVICIO / 04",
      title: "AUTOMATIZACIONES",
      lead: "Flujos que responden, agendan y hacen seguimiento cuando vos no estás frente a la pantalla.",
      visual: {
        windowTitle: "FLOW_RUNTIME.exe",
        status: "WATCHING",
        flow: ["TRIGGER", "ROUTE", "ACTION", "HANDOFF"],
      },
      sections: [
        {
          title: "Para qué sirve",
          body: "Automatizamos respuestas, reservas, captura de leads y seguimiento para bajar fricción operativa y no perder oportunidades.",
        },
        {
          title: "Cómo lo encaramos",
          body: "Mapeamos el proceso real, decidimos qué queda humano y qué puede ser automático, e implementamos flujos claros y mantenibles.",
        },
      ],
      deliverables: {
        label: "ENTREGABLES",
        items: [
          "Mapa del proceso a automatizar",
          "Bot o flujo conversacional",
          "Integraciones con herramientas clave",
          "Handoff humano y seguimiento",
        ],
      },
      cta: "AUTOMATIZAR UN FLUJO →",
      ctaHref: bookingHref,
    },
    proyectos: {
      meta: {
        title: "Proyectos — KATEM®",
        description:
          "Proyectos seleccionados de Katem: demos, experiencias digitales y sistemas construidos para marcas.",
      },
      label: "ARCHIVO",
      title: "PROYECTOS",
      lead: "Una selección de demos y experiencias digitales construidas con el mismo criterio que llevamos a cada cliente.",
    },
    contacto: {
      meta: {
        title: "Contacto — KATEM®",
        description:
          "Agendá una llamada de descubrimiento o escribinos para iniciar un proyecto con Katem.",
      },
      label: "CONTACTO",
      title: "EMPECEMOS.",
      lead: "Contanos qué estás construyendo. Si hay fit, agendamos una llamada de descubrimiento.",
      primary: "AGENDAR LLAMADA →",
      secondary: "ESCRIBIR POR EMAIL →",
      note: "Buenos Aires / Argentina / Mundo.",
      primaryHref: bookingHref,
      secondaryHref: emailHref,
    },
  },

  privacy: {
    meta: {
      title: "Política de Privacidad",
      description:
        "Política de privacidad de Katem: cómo recopilamos, usamos y protegemos datos personales.",
    },
    label: "LEGAL",
    title: "Política de Privacidad",
    updated: "Última actualización: 13 de septiembre de 2026",
    intro:
      "En Katem respetamos la privacidad de las personas que se contactan con nosotros.",
    sections: [
      {
        title: "Datos que recopilamos",
        body: "Podemos recopilar nombre, correo electrónico, teléfono, nombre de empresa, sitio web y la información que la persona decida compartir mediante formularios, redes sociales, correo electrónico o reuniones.",
      },
      {
        title: "Para qué usamos los datos",
        body: "Usamos estos datos para responder consultas, evaluar si nuestros servicios pueden ser relevantes, enviar información solicitada y, cuando corresponda, coordinar una llamada comercial.\n\nNo vendemos, alquilamos ni cedemos datos personales a terceros para fines comerciales.",
      },
      {
        title: "Conservación y seguridad",
        body: "Conservamos los datos únicamente durante el tiempo necesario para las finalidades indicadas y aplicamos medidas razonables para protegerlos contra accesos no autorizados.",
      },
      {
        title: "Derechos",
        body: `La persona titular de los datos puede solicitar acceso, actualización, rectificación o eliminación de su información escribiendo a ${site.email}.`,
      },
      {
        title: "Contacto",
        body: `Para cualquier consulta sobre esta política o el uso de datos personales, escribinos a ${site.email}.`,
      },
    ],
    back: "← Volver a Katem",
  },
};

export type Dictionary = typeof es;
export default es;
