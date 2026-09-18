import type { Dictionary } from "./es";
import { bookingHref, site, whatsappHref, whatsappHrefWithText } from "@/lib/site";

const en: Dictionary = {
  meta: {
    title: "KATEM® · Boutique digital studio",
    description:
      "We help brands get more clients with websites, B2B prospecting, ads, and automation. Independent studio based in Buenos Aires.",
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
    ],
    talkCta: {
      label: "TALK TO KATEM",
      href: whatsappHrefWithText(
        "Hola Cande! Vengo de la web de Katem, quiero agendar una llamada"
      ),
    },
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
        "· Type TURNO to book an appointment",
        "· Type INFO to ask about prices/services",
        "· Type LEAD to leave your details for a follow-up",
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
              "Perfect. In a real bot we'd ask for the contact detail next and log it as a lead. (demo)",
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
        title: "AUTOMATION",
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
    secondary: "TALK TO KATEM →",
    email: site.email,
    note: "Buenos Aires / Argentina / World.",
    href: bookingHref,
    secondaryHref: whatsappHrefWithText(
        "Hola Cande! Vengo de la web de Katem, quiero agendar una llamada"
      ),
  },
  footer: {
    brand: site.brand,
    studio: site.tagline,
    links: [
      { href: "/proyectos", label: "PROJECTS" },
      { href: "/desarrollo-web", label: "WEB DEVELOPMENT" },
      { href: "/prospeccion-b2b", label: "B2B PROSPECTING" },
      { href: "/publicidad-digital", label: "DIGITAL ADS" },
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
    mantra: "MADE FOR THE INTERNET.\nNOT FOR TEMPLATES.",
    privacy: { href: "/privacidad", label: "PRIVACY" },
  },
  pages: {
    desarrolloWeb: {
      meta: {
        title: "We build your website · Development · KATEM®",
        description:
          "We build sites and landings with identity, clarity, and conversion. Custom web development from Buenos Aires.",
      },
      label: "SERVICE / 01",
      title: "We build\nyour website.",
      lead: "Your site should explain who you are, what you offer, and why to reach out. In seconds, not paragraphs.",
      visual: {
        windowTitle: "SITE_LAYOUT.exe",
        status: "BUILD · READY",
        browserLabel: "VIEWPORT",
        files: ["index.html", "styles.css", "components/"],
      },
      sections: [
        {
          title: "What it's for",
          body: "We build institutional sites and landings so your brand is understood instantly and generates real inquiries, not just visits.",
        },
        {
          title: "How we approach it",
          body: "Message and structure first. Then design, development, and launch. No generic templates or extra layers.",
        },
      ],
      deliverables: {
        label: "DELIVERABLES",
        faqQuestion: "What do you deliver?",
        items: [
          "Custom site or landing",
          "Visual direction and typography",
          "Clean, maintainable development",
          "Launch and post-launch adjustments",
        ],
      },
      benefits: {
        label: "BENEFITS",
        faqQuestion: "What are the benefits?",
        items: [
          "Clear message from the first scroll",
          "Presence aligned with the brand",
          "Ready to convert inquiries",
          "Clean, easy-to-maintain code",
        ],
      },
      faq: {
        label: "FAQ",
        items: [
          {
            question: "What kind of sites do you build?",
            answer:
              "Institutional sites, landings, and custom experiences. Always with their own identity, never generic templates.",
          },
          {
            question: "How long does a web project take?",
            answer:
              "It depends on scope. A clear landing can ship in a few weeks; a fuller site needs more message, design, and development iterations.",
          },
          {
            question: "Do you include launch and adjustments?",
            answer:
              "Yes. We deliver clean development, launch, and post-launch adjustments so the site is ready to convert.",
          },
          {
            question: "Can we add ads or automation later?",
            answer:
              "Yes. We build the website as the foundation of the pipeline: ads, prospecting, or automation can come next.",
          },
        ],
      },
      cta: "TALK ABOUT A SITE →",
      ctaHref: bookingHref,
      whatsappCta: "LET'S TALK ON WHATSAPP →",
      whatsappHref: whatsappHrefWithText(
        "Hola! Vengo de la web de Katem, me interesa el servicio de desarrollo web"
      ),
    },
    prospectionB2b: {
      meta: {
        title: "Get more B2B clients · Prospecting · KATEM®",
        description:
          "We get clients for B2B companies through commercial prospecting: account research, outreach, and opportunity follow-up in Buenos Aires and Latam.",
      },
      label: "SERVICE / 02",
      title: "We get clients\nfor your B2B company.",
      lead: "Commercial prospecting to reach the right companies, open real conversations, and fill your pipeline with qualified opportunities.",
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
          title: "What it's for",
          body: "If you need more B2B clients and inbound isn't enough, we build outbound acquisition so opportunities show up more consistently.",
        },
        {
          title: "How we approach it",
          body: "We define the ideal customer, build account lists, activate email or LinkedIn outreach, and organize follow-up through to the meeting.",
        },
      ],
      deliverables: {
        label: "DELIVERABLES",
        faqQuestion: "What do you deliver?",
        items: [
          "ICP and messaging definition",
          "Account and decision-maker research",
          "Outreach sequences",
          "Opportunity follow-up system",
        ],
      },
      benefits: {
        label: "BENEFITS",
        faqQuestion: "What are the benefits?",
        items: [
          "More commercial opportunities",
          "Conversations with real accounts",
          "Less dependence on inbound",
          "Organized reply follow-up",
        ],
      },
      faq: {
        label: "FAQ",
        items: [
          {
            question: "How do you help me get more clients?",
            answer:
              "We build a B2B prospecting system: who to contact, what to say, and follow-up until meetings are booked.",
          },
          {
            question: "What kind of companies is this for?",
            answer:
              "B2B businesses that sell to other companies and need a more consistent flow of opportunities, not just inbound.",
          },
          {
            question: "How long until we see results?",
            answer:
              "It depends on the market and offer. First conversations usually appear within the first weeks of active outreach.",
          },
          {
            question: "Do you work from Buenos Aires with Latam clients?",
            answer:
              "Yes. We're based in Buenos Aires and work remotely with companies across Argentina and Latam.",
          },
        ],
      },
      cta: "I WANT MORE CLIENTS →",
      ctaHref: bookingHref,
      whatsappCta: "LET'S TALK ON WHATSAPP →",
      whatsappHref: whatsappHrefWithText(
        "Hola! Vengo de la web de Katem, me interesa la prospección B2B"
      ),
    },
    publicidadDigital: {
      meta: {
        title: "We run your ads · Advertising · KATEM®",
        description:
          "We run digital advertising aimed at qualified demand: creatives, campaigns, and measurement in service of the pipeline.",
      },
      label: "SERVICE / 03",
      title: "We run\nyour ads.",
      lead: "Campaigns that attract people who can buy, not noise that fills the funnel.",
      visual: {
        windowTitle: "CAMPAIGN_RUN.exe",
        status: "SIGNAL · ON",
        flow: ["OFFER", "CREATIVE", "AUDIENCE", "LEAD", "HANDOFF"],
      },
      sections: [
        {
          title: "What it's for",
          body: "We activate ads when the offer is clear and the site can convert. The goal is qualified demand, not empty traffic.",
        },
        {
          title: "How we approach it",
          body: "We align message, creatives, and audiences. We measure inquiries and lead quality, then adjust with judgment, not vanity metrics.",
        },
      ],
      deliverables: {
        label: "DELIVERABLES",
        faqQuestion: "What do you deliver?",
        items: [
          "Acquisition strategy",
          "Creatives and copy",
          "Campaign setup",
          "Results reading and adjustments",
        ],
      },
      benefits: {
        label: "BENEFITS",
        faqQuestion: "What are the benefits?",
        items: [
          "More qualified demand",
          "Budget with clear direction",
          "Creatives tied to the offer",
          "Adjustments based on lead quality",
        ],
      },
      faq: {
        label: "FAQ",
        items: [
          {
            question: "When does it make sense to invest in ads?",
            answer:
              "When the offer is clear and the site can convert. Without that, ads usually bring empty traffic.",
          },
          {
            question: "Which platforms do you run?",
            answer:
              "We choose channels based on the business and ideal customer. The focus is lead quality, not vanity volume.",
          },
          {
            question: "How do you measure results?",
            answer:
              "We measure inquiries and lead quality, then adjust creatives, audiences, and messaging against that.",
          },
          {
            question: "Can you work on an existing website?",
            answer:
              "Yes. We review whether the site is ready to convert and suggest fixes before or during campaigns if needed.",
          },
        ],
      },
      cta: "REVIEW ADS →",
      ctaHref: bookingHref,
      whatsappCta: "LET'S TALK ON WHATSAPP →",
      whatsappHref: whatsappHrefWithText(
        "Hola! Vengo de la web de Katem, me interesa publicidad digital"
      ),
    },
    automatizaciones: {
      meta: {
        title: "We automate your operations · KATEM®",
        description:
          "We automate conversations, tasks, and commercial follow-up with bots, integrations, and clear flows.",
      },
      label: "SERVICE / 04",
      title: "We automate\nyour operations.",
      lead: "Flows that reply, book, and follow up when you're not at the screen.",
      visual: {
        windowTitle: "FLOW_RUNTIME.exe",
        status: "WATCHING",
        flow: ["TRIGGER", "ROUTE", "ACTION", "HANDOFF"],
      },
      sections: [
        {
          title: "What it's for",
          body: "We automate replies, bookings, lead capture, and follow-up to cut operational friction and stop losing opportunities.",
        },
        {
          title: "How we approach it",
          body: "We map the real process, decide what stays human vs automated, and implement clear, maintainable flows.",
        },
      ],
      deliverables: {
        label: "DELIVERABLES",
        faqQuestion: "What do you deliver?",
        items: [
          "Process map to automate",
          "Bot or conversational flow",
          "Integrations with key tools",
          "Human handoff and follow-up",
        ],
      },
      benefits: {
        label: "BENEFITS",
        faqQuestion: "What are the benefits?",
        items: [
          "Response even when you're offline",
          "Fewer repetitive tasks",
          "Leads captured on time",
          "Clear handoff to your team",
        ],
      },
      faq: {
        label: "FAQ",
        items: [
          {
            question: "What can be automated?",
            answer:
              "Initial replies, lead capture, bookings, reminders, and commercial follow-up. Anything that repeats and gets lost across chats.",
          },
          {
            question: "Does it replace the human team?",
            answer:
              "No. We automate the repetitive work and leave a clear handoff so a person takes the conversations that matter.",
          },
          {
            question: "Which tools do you integrate with?",
            answer:
              "Whatever the business stack needs: CRM, calendars, WhatsApp, forms, and other key tools in the process.",
          },
          {
            question: "How long does a flow take to ship?",
            answer:
              "First we map the real process. A focused flow can ship quickly; one with several integrations needs more iteration.",
          },
        ],
      },
      cta: "AUTOMATE A FLOW →",
      ctaHref: bookingHref,
      whatsappCta: "LET'S TALK ON WHATSAPP →",
      whatsappHref: whatsappHrefWithText(
        "Hola! Vengo de la web de Katem, me interesan las automatizaciones"
      ),
    },
    proyectos: {
      meta: {
        title: "Projects · KATEM®",
        description:
          "Selected Katem projects: demos, digital experiences, and systems built for brands.",
      },
      title: "SELECTED PROJECTS",
      lead: "A selection of demos and digital experiences built with the same judgment we bring to every client.",
      cta: "CHAT ON WHATSAPP →",
      ctaHref: whatsappHref,
    },
      },
  analysisForm: {
    eyebrow: "· FREE ANALYSIS",
    title: "Enter your website and we'll run a short analysis",
    subtitle:
      "We review your site and give concrete recommendations to improve your digital presence and get more clients.",
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    phone: "Phone (optional)",
    website: "Website URL",
    submit: "Analyze now",
    sending: "Sending…",
    success: "STATUS · SENT — We'll be in touch soon.",
    error: "Couldn't send. Try again or email us.",
    subject: "New website analysis — Katem",
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
