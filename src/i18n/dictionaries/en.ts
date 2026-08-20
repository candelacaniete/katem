import type { Dictionary } from "./es";
import { bookingHref, demosHref, site } from "@/lib/site";

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
      { href: "#metodo", label: "METHOD" },
      { href: "#estudio", label: "STUDIO" },
      { href: "#contacto", label: "CONTACT" },
    ],
    demos: { href: demosHref, label: "DEMOS" },
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
    ctaSecondary: "START A PROJECT ↗",
    windowTitle: "KATEM_SYSTEM.exe",
    status: "STATUS: ONLINE",
    visualLabel: "SYSTEM / IDENTITY",
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
    projects: [
      {
        id: "001",
        title: "UNIQ POSITIVO",
        tags: "IDENTITY / WEB / STRATEGY",
        href: demosHref,
      },
      {
        id: "002",
        title: "PARQUE PATRICIOS INFORMA",
        tags: "WEB / COMMUNICATION",
        href: demosHref,
      },
      {
        id: "003",
        title: "AVANTEM",
        tags: "PRODUCT / SYSTEM",
        href: demosHref,
      },
      {
        id: "004",
        title: "SANAR VALE LA PENA",
        tags: "IDENTITY / EXPERIENCE",
        href: demosHref,
      },
      {
        id: "005",
        title: "OTHER PROJECTS",
        tags: "ARCHIVE / DEMOS",
        href: demosHref,
      },
    ],
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
    paragraphs: [
      "Every project combines design, strategy, and technology to build a digital presence that reflects the value of your work.",
      "We work with professionals and brands that support people — psychologists, therapists, coaches, nutritionists, and teams who need to look as professional as the service they offer.",
      "Clear communication. Design with identity. No generic solutions.",
    ],
    meta: "BUENOS AIRES / ARGENTINA / WORLD",
  },
  terminal: {
    title: "KATEM / TERMINAL",
    prompt: ">",
    lines: [
      { cmd: "who_we_are", out: ["INDEPENDENT DIGITAL STUDIO"] },
      {
        cmd: "what_we_do",
        out: ["DESIGN", "STRATEGY", "DEVELOPMENT", "AUTOMATION"],
      },
      { cmd: "where", out: ["BUENOS AIRES", "ARGENTINA", "WORLD"] },
      { cmd: "status", out: ["ACCEPTING NEW PROJECTS"] },
    ],
    placeholder: "type a command…",
    help: ["commands: help, studio, services, projects, contact"],
    responses: {
      ayuda: ["available commands:", "help · studio · services · projects · contact"],
      estudio: ["boutique digital studio.", "judgment, design, systems."],
      servicios: ["experiences · strategy · products · systems"],
      proyectos: [`archive at ${site.demos}`],
      contacto: [`whatsapp / ${site.email}`],
      unknown: ["command not recognized.", 'try typing "help".'],
    },
  },
  cta: {
    lines: ["YOUR NEXT", "DIGITAL", "MOVE", "STARTS HERE."],
    accent: "STARTS HERE.",
    button: "START A PROJECT ↗",
    note: "Selected projects.\nBuenos Aires / Argentina / World.",
    href: bookingHref,
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
