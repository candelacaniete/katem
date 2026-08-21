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
    links: [
      { href: "#archivo", label: "WORK" },
      { href: "#servicios", label: "SERVICES" },
      { href: "#why", label: "WHY" },
      { href: "#metodo", label: "METHOD" },
      { href: "#estudio", label: "STUDIO" },
      { href: "#contacto", label: "CONTACT" },
    ],
    demos: { href: "#archivo", label: "DEMOS" },
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
    label: "PROTOCOL",
    title: ["WHAT WE", "CAN", "BUILD."],
    items: [
      {
        id: "01",
        title: "DIGITAL\nEXPERIENCES",
        description:
          "Sites and landings built to communicate clearly, convey professionalism, and turn visits into conversations.",
      },
      {
        id: "02",
        title: "DIGITAL\nSTRATEGY",
        description:
          "We define your online presence: message, structure, and automations that simplify daily work.",
      },
      {
        id: "03",
        title: "DIGITAL\nPRODUCTS",
        description:
          "Stores, courses, and digital resources on your own platform — ready to sell without relying on third parties.",
      },
      {
        id: "04",
        title: "SYSTEMS",
        description:
          "Integrations and flows that keep your business working even when you're not at the screen.",
      },
    ],
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
          "We listen to your business, goals, and what the site needs to achieve. A clear conversation.",
      },
      {
        id: "02",
        title: "IDEATE",
        description:
          "We define creative direction and structure. Judgment before templates.",
      },
      {
        id: "03",
        title: "DESIGN",
        description:
          "Composition, typography, and visual identity aligned with your brand.",
      },
      {
        id: "04",
        title: "BUILD",
        description:
          "Clean, fast, maintainable development. Technology in service of outcomes.",
      },
      {
        id: "05",
        title: "LAUNCH",
        description:
          "We publish, refine, and leave you with a professional online presence.",
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
    secondary: "START A PROJECT →",
    email: site.email,
    note: "Buenos Aires / Argentina / World.",
    href: bookingHref,
    secondaryHref: emailHref,
  },
  footer: {
    brand: site.brand,
    studio: site.tagline,
    links: [
      { href: "#archivo", label: "WORK" },
      { href: "#servicios", label: "SERVICES" },
      { href: "#estudio", label: "STUDIO" },
      { href: "#contacto", label: "CONTACT" },
    ],
    social: [
      { href: site.instagram, label: "INSTAGRAM", external: true },
      { href: `mailto:${site.email}`, label: "EMAIL", external: false },
    ],
    copy: `© ${site.year} KATEM`,
    location: "BUENOS AIRES, ARGENTINA",
    mantra: "MADE FOR THE INTERNET.\nNOT FOR TEMPLATES.",
  },
};

export default en;
