import { bookingHref, site, whatsappHref, whatsappHrefWithText } from "@/lib/site";

const es = {
  meta: {
    title: "KATEM® · Estudio digital boutique",
    description:
      "Ayudamos a marcas a conseguir más clientes con sitios, prospección B2B, publicidad y automatizaciones. Estudio independiente en Buenos Aires.",
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
    ],
    talkCta: {
      label: "HABLAR CON KATEM",
      href: whatsappHrefWithText(
        "Hola Cande! Vengo de la web de Katem, quiero agendar una llamada"
      ),
    },
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
        "· Escribí TURNO para reservar un turno",
        "· Escribí INFO para consultar precios/servicios",
        "· Escribí LEAD para dejar tus datos y que te contacten",
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
        title: "AUTOMATIZACIONES",
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
    secondary: "HABLAR CON KATEM →",
    email: site.email,
    note: "Buenos Aires / Argentina / Mundo.",
    href: bookingHref,
    secondaryHref: whatsappHrefWithText(
        "Hola Cande! Vengo de la web de Katem, quiero agendar una llamada"
      ),
  },
  footer: {
    brand: site.brand,
    studio: site.tagline,
    links: [
      { href: "/proyectos", label: "PROYECTOS" },
      { href: "/desarrollo-web", label: "DESARROLLO WEB" },
      { href: "/prospeccion-b2b", label: "PROSPECCIÓN B2B" },
      { href: "/publicidad-digital", label: "PUBLICIDAD DIGITAL" },
    ],
    social: [
      { href: site.instagram, label: "INSTAGRAM", external: true },
      {
        href: whatsappHrefWithText(
        "Hola Cande! Vengo de la web de Katem, quiero agendar una llamada"
      ),
        label: "WHATSAPP",
        external: true,
      },
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
        title: "Construimos tu web · Desarrollo · KATEM®",
        description:
          "Construimos sitios y landings con identidad, claridad y conversión. Desarrollo web a medida desde Buenos Aires.",
      },
      label: "SERVICIO / 01",
      title: "Construimos\ntu web.",
      lead: "Tu sitio tiene que explicar quién sos, qué ofrecés y por qué escribirte. En segundos, no en párrafos.",
      visual: {
        windowTitle: "SITE_LAYOUT.exe",
        status: "BUILD · READY",
        browserLabel: "VIEWPORT",
        files: ["index.html", "styles.css", "components/"],
      },
      sections: [
        {
          title: "Para qué sirve",
          body: "Armamos sitios institucionales y landings para que tu marca se entienda al instante y genere consultas reales, no solo visitas.",
        },
        {
          title: "Cómo lo encaramos",
          body: "Primero mensaje y estructura. Después diseño, desarrollo y publicación. Sin plantillas genéricas ni capas de más.",
        },
      ],
      deliverables: {
        label: "ENTREGABLES",
        faqQuestion: "¿Qué me entregan?",
        items: [
          "Sitio o landing a medida",
          "Dirección visual y tipografía",
          "Desarrollo limpio y mantenible",
          "Publicación y ajustes de lanzamiento",
        ],
      },
      benefits: {
        label: "BENEFICIOS",
        faqQuestion: "¿Cuáles son los beneficios?",
        items: [
          "Mensaje claro desde el primer scroll",
          "Presencia alineada a la marca",
          "Base lista para convertir consultas",
          "Código limpio y fácil de mantener",
        ],
      },
      faq: {
        label: "PREGUNTAS FRECUENTES",
        items: [
          {
            question: "¿Qué tipo de sitios construyen?",
            answer:
              "Sitios institucionales, landings y experiencias a medida. Siempre con identidad propia, no plantillas genéricas.",
          },
          {
            question: "¿Cuánto tarda un proyecto web?",
            answer:
              "Depende del alcance. Una landing clara puede salir en pocas semanas; un sitio más completo lleva más iteraciones de mensaje, diseño y desarrollo.",
          },
          {
            question: "¿Incluyen publicación y ajustes?",
            answer:
              "Sí. Entregamos desarrollo limpio, publicación y ajustes de lanzamiento para que el sitio quede listo para convertir.",
          },
          {
            question: "¿Puedo sumar ads o automatizaciones después?",
            answer:
              "Sí. Construimos la web como base del pipeline: después se puede activar publicidad, prospección o automatizaciones.",
          },
        ],
      },
      cta: "HABLAR DE UN SITIO →",
      ctaHref: bookingHref,
      whatsappCta: "HABLEMOS POR WHATSAPP →",
      whatsappHref: whatsappHrefWithText(
        "Hola! Vengo de la web de Katem, me interesa el servicio de desarrollo web"
      ),
    },
    prospectionB2b: {
      meta: {
        title: "Conseguir más clientes B2B · Prospección · KATEM®",
        description:
          "Conseguimos clientes para empresas B2B con prospección comercial: investigación de cuentas, outreach y seguimiento de oportunidades en Buenos Aires y Latam.",
      },
      label: "SERVICIO / 02",
      title: "Conseguimos clientes\npara tu empresa B2B.",
      lead: "Prospección comercial para llegar a las empresas correctas, abrir conversaciones reales y llenar tu pipeline con oportunidades calificadas.",
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
          body: "Si necesitás conseguir más clientes B2B y el inbound no alcanza, armamos adquisición outbound para generar oportunidades de forma más constante.",
        },
        {
          title: "Cómo lo encaramos",
          body: "Definimos el cliente ideal, armamos listas de cuentas, activamos outreach por email o LinkedIn, y organizamos el seguimiento hasta la reunión.",
        },
      ],
      deliverables: {
        label: "ENTREGABLES",
        faqQuestion: "¿Qué me entregan?",
        items: [
          "Definición de ICP y mensajes",
          "Investigación de cuentas y decisores",
          "Secuencias de outreach",
          "Sistema de seguimiento de oportunidades",
        ],
      },
      benefits: {
        label: "BENEFICIOS",
        faqQuestion: "¿Cuáles son los beneficios?",
        items: [
          "Más oportunidades comerciales",
          "Conversaciones con cuentas reales",
          "Menos dependencia del inbound",
          "Seguimiento ordenado de respuestas",
        ],
      },
      faq: {
        label: "PREGUNTAS FRECUENTES",
        items: [
          {
            question: "¿Cómo me ayudan a conseguir más clientes?",
            answer:
              "Armamos un sistema de prospección B2B: definimos a quién contactar, con qué mensaje, y hacemos seguimiento hasta agendar reuniones.",
          },
          {
            question: "¿Para qué tipo de empresas funciona?",
            answer:
              "Para negocios B2B que venden a otras empresas y necesitan un flujo más constante de oportunidades, no solo inbound.",
          },
          {
            question: "¿Cuánto tarda en verse resultado?",
            answer:
              "Depende del mercado y la oferta. En general, las primeras conversaciones aparecen en las primeras semanas de outreach activo.",
          },
          {
            question: "¿Trabajan desde Buenos Aires con clientes de Latam?",
            answer:
              "Sí. Estamos en Buenos Aires y trabajamos con empresas de Argentina y Latam de forma remota.",
          },
        ],
      },
      cta: "QUIERO CONSEGUIR CLIENTES →",
      ctaHref: bookingHref,
      whatsappCta: "HABLEMOS POR WHATSAPP →",
      whatsappHref: whatsappHrefWithText(
        "Hola! Vengo de la web de Katem, me interesa la prospección B2B"
      ),
    },
    publicidadDigital: {
      meta: {
        title: "Activamos tu publicidad · Ads · KATEM®",
        description:
          "Activamos publicidad digital orientada a demanda cualificada: creatividades, campañas y medición al servicio del pipeline.",
      },
      label: "SERVICIO / 03",
      title: "Activamos\ntu publicidad.",
      lead: "Campañas para atraer gente que puede comprar, no para llenar el embudo de ruido.",
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
          body: "Alineamos mensaje, creatividades y audiencias. Medimos consultas y calidad de leads, y ajustamos con criterio, no con vanidad.",
        },
      ],
      deliverables: {
        label: "ENTREGABLES",
        faqQuestion: "¿Qué me entregan?",
        items: [
          "Estrategia de captación",
          "Creatividades y copy",
          "Configuración de campañas",
          "Lectura de resultados y ajustes",
        ],
      },
      benefits: {
        label: "BENEFICIOS",
        faqQuestion: "¿Cuáles son los beneficios?",
        items: [
          "Demanda más calificada",
          "Presupuesto con dirección clara",
          "Creatividades atadas a la oferta",
          "Ajustes según calidad de leads",
        ],
      },
      faq: {
        label: "PREGUNTAS FRECUENTES",
        items: [
          {
            question: "¿Cuándo tiene sentido invertir en ads?",
            answer:
              "Cuando la oferta está clara y el sitio puede convertir. Sin eso, la publicidad suele traer tráfico vacío.",
          },
          {
            question: "¿Qué plataformas manejan?",
            answer:
              "Definimos canales según el negocio y el cliente ideal. El foco es calidad de leads, no volumen vanidoso.",
          },
          {
            question: "¿Cómo miden resultados?",
            answer:
              "Medimos consultas y calidad de leads, y ajustamos creatividades, audiencias y mensajes con ese criterio.",
          },
          {
            question: "¿Pueden trabajar sobre una web existente?",
            answer:
              "Sí. Revisamos si la web está lista para convertir y, si hace falta, proponemos ajustes antes o durante las campañas.",
          },
        ],
      },
      cta: "REVISAR PUBLICIDAD →",
      ctaHref: bookingHref,
      whatsappCta: "HABLEMOS POR WHATSAPP →",
      whatsappHref: whatsappHrefWithText(
        "Hola! Vengo de la web de Katem, me interesa publicidad digital"
      ),
    },
    automatizaciones: {
      meta: {
        title: "Automatizamos tu operación · KATEM®",
        description:
          "Automatizamos conversaciones, tareas y seguimiento comercial con bots, integraciones y flujos claros.",
      },
      label: "SERVICIO / 04",
      title: "Automatizamos\ntu operación.",
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
        faqQuestion: "¿Qué me entregan?",
        items: [
          "Mapa del proceso a automatizar",
          "Bot o flujo conversacional",
          "Integraciones con herramientas clave",
          "Handoff humano y seguimiento",
        ],
      },
      benefits: {
        label: "BENEFICIOS",
        faqQuestion: "¿Cuáles son los beneficios?",
        items: [
          "Respuesta aunque no estés online",
          "Menos tareas repetitivas",
          "Leads capturados a tiempo",
          "Handoff claro al equipo humano",
        ],
      },
      faq: {
        label: "PREGUNTAS FRECUENTES",
        items: [
          {
            question: "¿Qué se puede automatizar?",
            answer:
              "Respuestas iniciales, captura de leads, reservas, recordatorios y seguimiento comercial. Todo lo que hoy se repite y se pierde entre chats.",
          },
          {
            question: "¿Reemplaza al equipo humano?",
            answer:
              "No. Automatizamos lo repetitivo y dejamos handoff claro para que una persona tome las conversaciones que importan.",
          },
          {
            question: "¿Con qué herramientas se integran?",
            answer:
              "Según el stack del negocio: CRM, calendarios, WhatsApp, formularios y otras herramientas clave del proceso.",
          },
          {
            question: "¿Cuánto tarda implementar un flujo?",
            answer:
              "Primero mapeamos el proceso real. Un flujo acotado puede salir rápido; uno con varias integraciones lleva más iteraciones.",
          },
        ],
      },
      cta: "AUTOMATIZAR UN FLUJO →",
      ctaHref: bookingHref,
      whatsappCta: "HABLEMOS POR WHATSAPP →",
      whatsappHref: whatsappHrefWithText(
        "Hola! Vengo de la web de Katem, me interesan las automatizaciones"
      ),
    },
    proyectos: {
      meta: {
        title: "Proyectos · KATEM®",
        description:
          "Proyectos seleccionados de Katem: demos, experiencias digitales y sistemas construidos para marcas.",
      },
      title: "PROYECTOS SELECCIONADOS",
      lead: "Una selección de demos y experiencias digitales construidas con el mismo criterio que llevamos a cada cliente.",
      cta: "HABLAR POR WHATSAPP →",
      ctaHref: whatsappHref,
    },
  },
  analysisForm: {
    eyebrow: "· ANÁLISIS GRATUITO",
    title: "Ingresá tu web y te hacemos un breve análisis",
    subtitle:
      "Revisamos tu sitio y te damos recomendaciones concretas para mejorar tu presencia digital y conseguir más clientes.",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Email",
    phone: "Teléfono (opcional)",
    website: "URL de tu web",
    submit: "Analizar ahora",
    sending: "Enviando…",
    success: "STATUS · SENT — Te escribimos pronto.",
    error: "No se pudo enviar. Probá de nuevo o escribinos por email.",
    subject: "Nuevo análisis web — Katem",
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
