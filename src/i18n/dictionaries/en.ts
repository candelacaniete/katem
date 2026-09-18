import type { Dictionary } from "./es";
import { bookingHref, emailHref, site } from "@/lib/site";

const en: Dictionary = {
  meta: {
    title: "KATEM® — Boutique digital studio",
    description:
      "We design digital experiences for brands that want to be remembered. Independent studio based in Buenos Aires.",
  },
  skip: "Skip to content",
  skipBoot: "Skip intro",
  nav: {
    brand: site.brand,
    studio: site.tagline,
    servicesLabel: "SERVICES",
    services: [
      { href: "/desarrollo-web", label: "WEB DEVELOPMENT" },
      { href: "/prospeccion-b2b", label: "B2B PROSPECTING" },
      { href: "/publicidad-digital", label: "DIGITAL ADS" },
      { href: "/automatizaciones", label: "AUTOMATION" },
    ],
    links: [
      { href: "/proyectos", label: "PROJECTS" },
      { href: "/contacto", label: "CONTACT" },
    ],
    demos: { href: "/proyectos", label: "DEMOS" },
    lang: { es: "ES", en: "EN" },
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  boot: {
    brand: site.brand,
    studio: site.tagline,
    lines: [
      "STARTING SYSTEM...",
      "LOADING IDENTITY...",
      "LOADING EXPERIENCE...",
      "LOADING SYSTEM...",
    ],
    welcome: "WELCOME TO KATEM.",
  },
  cursor: {
    open: "OPEN",
    view: "VIEW",
    explore: "EXPLORE",
    enter: "ENTER →",
  },
  hero: {
    line1: "YOUR BRAND",
    line2Before: "DESERVES ",
    line2Accent: "MORE",
    line3: "THAN A WEBSITE.",
    sub: "We design digital experiences\nfor brands that want to be remembered.",
    ctaPrimary: "VIEW PROJECTS →",
    ctaPrimaryHref: "/proyectos",
    ctaSecondary: "BOOK A DISCOVERY CALL →",
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
      ["WE DON'T MAKE", "JUST WEBSITES."],
      ["WE CREATE", "DIGITAL", "EXPERIENCES."],
      ["THAT PEOPLE", "REMEMBER."],
    ],
  },
  archivo: {
    label: "ARCHIVE",
    title: "SELECTED PROJECTS",
    view: "VIEW →",
    openBot: "TRY →",
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
        subtitle: "Architecture & Design · Institutional",
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
        subtitle: "Conversational assistant · Demo",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
      },
    ],
    bot: {
      windowTitle: "ARCHIVE_004.EXE",
      close: "CLOSE",
      inputPlaceholder: "Type TURNO, INFO, or LEAD…",
      send: "SEND",
      typing: "typing…",
      welcome:
        "Hi. I'm a bot Katem can build for your business. Choose what you want to try:",
      menu: [
        "— Type TURNO to book an appointment",
        "— Type INFO to ask about prices/services",
        "— Type LEAD to leave your details for a follow-up",
      ],
      fallback:
        "I didn't catch that. Try TURNO, INFO, or LEAD.",
      fallbackFinal:
        "No worries. Here are the options again:",
      ctaText: "Want something like this for your business?",
      ctaLink: "Let's talk →",
      ctaHref: bookingHref,
      menuAgain: "Back to menu",
      stepHint: "DEMO / PICK AN OPTION",
      ctaHint: "DEMO / CTA",
      flows: {
        TURNO: [
          {
            prompt:
              "Perfect. Let's book an appointment (demo). Which service would it be for?",
            options: [
              { id: "corte", label: "Haircut" },
              { id: "color", label: "Color" },
              { id: "otro", label: "Other service" },
            ],
            storeAs: "servicio",
          },
          {
            prompt: "Noted for {servicio}. Which day works best?",
            options: [
              { id: "hoy", label: "Today" },
              { id: "semana", label: "This week" },
              { id: "proxima", label: "Next week" },
            ],
            storeAs: "dia",
          },
          {
            prompt:
              "Done: simulated booking confirmed for {servicio}, {dia}. In a real bot this would land on your calendar.",
          },
        ],
        INFO: [
          {
            prompt: "What would you like info about?",
            options: [
              { id: "precios", label: "Prices" },
              { id: "servicios", label: "Services" },
              { id: "horarios", label: "Hours" },
            ],
            storeAs: "tema",
            replyByOption: {
              precios:
                "Demo pricing: configured per business. This demo doesn't quote live rates.",
              servicios:
                "Demo services: inquiries, bookings, and lead follow-up.",
              horarios:
                "Demo hours: a real bot would answer from your live schedule (e.g. Mon–Fri 10–18).",
            },
          },
        ],
        LEAD: [
          {
            prompt: "How would you prefer we contact you?",
            options: [
              { id: "whatsapp", label: "WhatsApp" },
              { id: "email", label: "Email" },
              { id: "llamada", label: "Call" },
            ],
            storeAs: "canal",
          },
          {
            prompt:
              "Perfect — in a real bot we'd ask for the contact detail next and log it as a lead. (demo)",
          },
        ],
      },
    },
  },
  servicios: {
    label: "ECOSYSTEM",
    title: ["WHAT WE", "CAN", "BUILD."],
    enter: "ENTER →",
    items: [
      {
        id: "01",
        title: "WEB\nDEVELOPMENT",
        description:
          "Sites and landings built to communicate clearly, convey professionalism, and turn visits into conversations.",
        signal: "SIGNAL STABLE",
        href: "/desarrollo-web",
      },
      {
        id: "02",
        title: "B2B\nPROSPECTING",
        description:
          "Prospecting systems to connect your business with the right companies: research, outreach, and follow-up.",
        signal: "SIGNAL ACTIVE",
        href: "/prospeccion-b2b",
      },
      {
        id: "03",
        title: "DIGITAL\nADS",
        description:
          "Campaigns and creatives aimed at capturing qualified demand and feeding your commercial pipeline.",
        signal: "SIGNAL STABLE",
        href: "/publicidad-digital",
      },
      {
        id: "04",
        title: "AUTOMA-\nTION",
        description:
          "Bots, integrations, and flows that automate tasks, conversations, and processes when you're not at the screen.",
        signal: "SIGNAL STABLE",
        href: "/automatizaciones",
      },
    ],
  },
  pipeline: {
    label: "KATEM_PIPELINE.exe",
    title: "A WEBSITE IS THE STARTING POINT.",
    lead: "We build digital systems that connect presence, acquisition, and follow-up to generate commercial opportunities more consistently.",
    flow: ["ATTRACT", "CONVERT", "CONNECT", "FOLLOW UP"],
    steps: [
      {
        id: "01",
        title: "PRESENCE",
        description:
          "We build a website or landing ready to turn interest into inquiries.",
      },
      {
        id: "02",
        title: "ACQUISITION",
        description:
          "We identify companies and decision-makers that match your ideal customer.",
      },
      {
        id: "03",
        title: "OUTREACH",
        description:
          "We start conversations with personalized messages via email and LinkedIn.",
      },
      {
        id: "04",
        title: "SYSTEM",
        description:
          "We organize replies, follow-up, and opportunities so you know what is happening at every stage.",
      },
    ],
    cta: "I WANT TO BUILD MY PIPELINE →",
    href: bookingHref,
  },
  why: {
    label: "CRITERIA",
    title: "WHY KATEM?",
    lead: "You don't need another website.\nYou need a digital presence that works.",
    reasons: [
      {
        id: "01",
        title: "NO TEMPLATES",
        body: "We never start from a template. We design the experience around your business, audience, and goals.",
      },
      {
        id: "02",
        title: "DESIGN + STRATEGY",
        body: "We don't separate aesthetics from strategy. Every visual decision has a reason.",
      },
      {
        id: "03",
        title: "BUILT FOR YOUR BUSINESS",
        body: "From a landing page to ecommerce or a full digital system, we build what you actually need.",
      },
      {
        id: "04",
        title: "PERSONAL COLLABORATION",
        body: "You work directly with the studio. Clear communication, fast decisions, and a process without unnecessary layers.",
      },
    ],
    closing: ["YOUR BUSINESS IS UNIQUE.", "YOUR WEBSITE SHOULD BE TOO."],
    cta: "LET'S BUILD IT →",
    href: bookingHref,
  },
  metodo: {
    label: "METHOD",
    title: "HOW WE WORK",
    steps: [
      {
        id: "01",
        title: "UNDERSTAND",
        description:
          "We listen to your business, goals, and what the digital system needs to achieve. A clear conversation.",
      },
      {
        id: "02",
        title: "DEFINE",
        description:
          "We prioritize scope, message, and architecture. Judgment before templates.",
      },
      {
        id: "03",
        title: "BUILD",
        description:
          "Clean, fast, maintainable design and development. Technology in service of outcomes.",
      },
      {
        id: "04",
        title: "ACTIVATE",
        description:
          "We publish, connect acquisition, and leave the flows ready to operate.",
      },
      {
        id: "05",
        title: "MEASURE",
        description:
          "We review signals, conversions, and opportunities to iterate with evidence.",
      },
    ],
  },
  estudio: {
    label: "STUDIO",
    title: ["KATEM", "WAS BORN FROM", "RESTLESSNESS."],
    command: "$ cat about.txt",
    paragraphs: [
      "We believe the internet should feel less generic.",
      "We combine design, strategy and technology to build digital experiences that make businesses easier to understand, trust and remember.",
      "We work with professionals, brands and teams that have something worth building.",
      "Clear communication.\nDesign with identity.\nTechnology with purpose.",
    ],
    meta: "BUENOS AIRES / ARGENTINA / WORLDWIDE",
    windowTitle: "KATEM_OS",
    windowSubtitle: "INDEPENDENT DIGITAL STUDIO",
    windowPlaces: ["BUENOS AIRES", "ARGENTINA", "WORLDWIDE"],
    windowCapabilities: ["DESIGN", "STRATEGY", "DEVELOPMENT", "AUTOMATION"],
    windowStatus: "STATUS: ONLINE",
  },
  cta: {
    lines: ["YOUR NEXT DIGITAL MOVE", "STARTS HERE."],
    accent: "STARTS HERE.",
    button: "BOOK A DISCOVERY CALL →",
    secondary: "GO TO CONTACT →",
    email: site.email,
    note: "Buenos Aires / Argentina / World.",
    href: bookingHref,
    secondaryHref: "/contacto",
  },
  footer: {
    brand: site.brand,
    studio: site.tagline,
    links: [
      { href: "/proyectos", label: "PROJECTS" },
      { href: "/desarrollo-web", label: "WEB DEVELOPMENT" },
      { href: "/prospeccion-b2b", label: "B2B PROSPECTING" },
      { href: "/contacto", label: "CONTACT" },
    ],
    social: [
      { href: site.instagram, label: "INSTAGRAM", external: true },
      { href: `mailto:${site.email}`, label: "EMAIL", external: false },
    ],
    copy: `© ${site.year} KATEM`,
    location: "BUENOS AIRES, ARGENTINA",
    mantra: "MADE FOR THE INTERNET.\nNOT FOR TEMPLATES.",
    privacy: { href: "/privacidad", label: "PRIVACY" },
  },
  pages: {
    desarrolloWeb: {
      meta: {
        title: "Web development — KATEM®",
        description:
          "Custom sites and landings with identity, clarity, and conversion. Web development from Buenos Aires.",
      },
      label: "SERVICE / 01",
      title: "WEB DEVELOPMENT",
      lead: "A digital presence that communicates clearly, feels professional, and turns visits into conversations.",
      sections: [
        {
          title: "What it's for",
          body: "We build institutional sites, landings, and digital experiences so your brand is understood quickly and generates real commercial conversations.",
        },
        {
          title: "How we approach it",
          body: "We start with message and structure. Then design, development, and launch — no generic templates or unnecessary layers.",
        },
      ],
      deliverables: {
        label: "DELIVERABLES",
        items: [
          "Custom site or landing",
          "Visual direction and typography",
          "Clean, maintainable development",
          "Launch and post-launch adjustments",
        ],
      },
      cta: "TALK ABOUT A SITE →",
      ctaHref: bookingHref,
    },
    prospectionB2b: {
      meta: {
        title: "B2B prospecting — KATEM®",
        description:
          "B2B prospecting systems: account research, personalized outreach, and opportunity follow-up.",
      },
      label: "SERVICE / 02",
      title: "B2B PROSPECTING",
      lead: "A system to connect your business with the right companies — through research, personalized contact, and follow-up.",
      sections: [
        {
          title: "What it's for",
          body: "We design B2B acquisition when you need more consistent opportunities without relying only on inbound.",
        },
        {
          title: "How we approach it",
          body: "We define the ideal customer, build account lists, activate email/LinkedIn outreach, and organize follow-up so you know what is happening.",
        },
      ],
      deliverables: {
        label: "DELIVERABLES",
        items: [
          "ICP and messaging definition",
          "Account and decision-maker research",
          "Outreach sequences",
          "Opportunity follow-up system",
        ],
      },
      cta: "BUILD MY PIPELINE →",
      ctaHref: bookingHref,
    },
    publicidadDigital: {
      meta: {
        title: "Digital advertising — KATEM®",
        description:
          "Digital advertising aimed at qualified demand: creatives, campaigns, and measurement in service of the pipeline.",
      },
      label: "SERVICE / 03",
      title: "DIGITAL ADS",
      lead: "Campaigns designed to capture qualified demand and feed your commercial system — not to burn budget.",
      sections: [
        {
          title: "What it's for",
          body: "We activate advertising when the offer is clear and the presence is ready to convert. The goal is the right people, not empty traffic.",
        },
        {
          title: "How we approach it",
          body: "We align message, creatives, and audiences with your offer. We measure useful signals (inquiries, leads, quality) and adjust with judgment.",
        },
      ],
      deliverables: {
        label: "DELIVERABLES",
        items: [
          "Acquisition strategy",
          "Creatives and copy",
          "Campaign setup",
          "Results reading and adjustments",
        ],
      },
      cta: "REVIEW ADS →",
      ctaHref: bookingHref,
    },
    automatizaciones: {
      meta: {
        title: "Automation — KATEM®",
        description:
          "Bots, integrations, and flows that automate conversations, tasks, and commercial follow-up.",
      },
      label: "SERVICE / 04",
      title: "AUTOMATION",
      lead: "Systems that keep running when you're not at the screen: bots, integrations, and workflows.",
      sections: [
        {
          title: "What it's for",
          body: "We automate replies, bookings, lead capture, and follow-up to reduce operational friction and stop losing opportunities.",
        },
        {
          title: "How we approach it",
          body: "We map the real process, define what should stay human vs automated, and implement clear, maintainable flows.",
        },
      ],
      deliverables: {
        label: "DELIVERABLES",
        items: [
          "Process map to automate",
          "Bot or conversational flow",
          "Integrations with key tools",
          "Human handoff and follow-up",
        ],
      },
      cta: "AUTOMATE A FLOW →",
      ctaHref: bookingHref,
    },
    proyectos: {
      meta: {
        title: "Projects — KATEM®",
        description:
          "Selected Katem projects: demos, digital experiences, and systems built for brands.",
      },
      label: "ARCHIVE",
      title: "PROJECTS",
      lead: "A selection of demos and digital experiences built with the same judgment we bring to every client.",
    },
    contacto: {
      meta: {
        title: "Contact — KATEM®",
        description:
          "Book a discovery call or email us to start a project with Katem.",
      },
      label: "CONTACT",
      title: "LET'S START.",
      lead: "Tell us what you're building. If there's a fit, we book a discovery call.",
      primary: "BOOK A CALL →",
      secondary: "WRITE AN EMAIL →",
      note: "Buenos Aires / Argentina / World.",
      primaryHref: bookingHref,
      secondaryHref: emailHref,
    },
  },

  privacy: {
    meta: {
      title: "Privacy Policy",
      description:
        "Katem privacy policy: how we collect, use, and protect personal data.",
    },
    label: "LEGAL",
    title: "Privacy Policy",
    updated: "Last updated: September 13, 2026",
    intro:
      "At Katem we respect the privacy of people who get in touch with us.",
    sections: [
      {
        title: "Data we collect",
        body: "We may collect name, email, phone number, company name, website, and information people choose to share through forms, social media, email, or meetings.",
      },
      {
        title: "How we use the data",
        body: "We use this data to answer inquiries, assess whether our services may be relevant, send requested information, and, when appropriate, coordinate a commercial call.\n\nWe do not sell, rent, or share personal data with third parties for commercial purposes.",
      },
      {
        title: "Retention and security",
        body: "We keep data only for as long as needed for the purposes stated above and apply reasonable measures to protect it against unauthorized access.",
      },
      {
        title: "Rights",
        body: `Data subjects may request access, updates, correction, or deletion of their information by writing to ${site.email}.`,
      },
      {
        title: "Contact",
        body: `For any questions about this policy or the use of personal data, email us at ${site.email}.`,
      },
    ],
    back: "← Back to Katem",
  },
};

export default en;
