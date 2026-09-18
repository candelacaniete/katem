import type { Dictionary } from "@/i18n/dictionaries/es";
import type { Locale } from "@/i18n/config";
import { absoluteUrl } from "@/lib/seo";
import { bookingHref, site } from "@/lib/site";

function flattenNewlines(value: string) {
  return value.replace(/\n/g, " ").replace(/\s+/g, " ").trim();
}

export function buildStructuredData(locale: Locale, dict: Dictionary) {
  const pageUrl = absoluteUrl(locale);
  const phone = `+${site.whatsapp}`;

  const organization = {
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    alternateName: site.brand,
    url: site.url,
    email: site.email,
    telephone: phone,
    description: dict.meta.description,
    foundingLocation: {
      "@type": "Place",
      name: site.location,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Buenos Aires",
      addressCountry: "AR",
    },
    areaServed: [
      { "@type": "City", name: "Buenos Aires" },
      { "@type": "Country", name: "Argentina" },
      { "@type": "Place", name: "Worldwide" },
    ],
    sameAs: [site.instagram],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.email,
        telephone: phone,
        availableLanguage: ["Spanish", "English"],
        url: bookingHref,
      },
    ],
  };

  const professionalService = {
    "@type": "ProfessionalService",
    "@id": `${site.url}/#studio`,
    name: site.brand,
    url: pageUrl,
    image: `${site.url}/opengraph-image`,
    description: dict.meta.description,
    telephone: phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Buenos Aires",
      addressCountry: "AR",
    },
    areaServed: ["Buenos Aires", "Argentina", "Worldwide"],
    knowsAbout: [
      ...dict.servicios.items.map((item) => flattenNewlines(item.title)),
      ...(locale === "es"
        ? [
            "conseguir más clientes",
            "prospección B2B",
            "conseguir clientes B2B",
            "adquisición de clientes",
          ]
        : [
            "get more clients",
            "B2B prospecting",
            "get B2B clients",
            "customer acquisition",
          ]),
    ],
    makesOffer: dict.servicios.items.map((item) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: flattenNewlines(item.title),
        description: item.description,
      },
    })),
    parentOrganization: { "@id": `${site.url}/#organization` },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.brand,
    description: dict.meta.description,
    inLanguage: locale === "es" ? "es-AR" : "en",
    publisher: { "@id": `${site.url}/#organization` },
  };

  const faqEntities =
    locale === "es"
      ? [
          {
            question: "¿Cómo conseguir más clientes con Katem?",
            answer:
              "Katem ayuda a conseguir más clientes con sitios pensados para convertir, prospección B2B, publicidad digital y automatizaciones. El foco es generar oportunidades comerciales reales, no solo presencia online.",
          },
          {
            question: "¿Qué es la prospección B2B de Katem?",
            answer:
              "Es un sistema para conseguir clientes B2B: investigamos cuentas, armamos mensajes, activamos outreach y hacemos seguimiento hasta agendar reuniones.",
          },
          {
            question: "¿Qué servicios ofrece Katem?",
            answer: dict.servicios.items
              .map(
                (item) =>
                  `${flattenNewlines(item.title)}: ${item.description}`
              )
              .join(" "),
          },
          {
            question: "¿Qué es el pipeline digital de Katem?",
            answer: [
              dict.pipeline.lead,
              ...dict.pipeline.steps.map(
                (step) => `${step.id}. ${step.title}: ${step.description}`
              ),
            ].join(" "),
          },
          {
            question: "¿Por qué elegir Katem?",
            answer: [
              flattenNewlines(dict.why.lead),
              ...dict.why.reasons.map(
                (reason) => `${reason.title}: ${reason.body}`
              ),
            ].join(" "),
          },
          {
            question: "¿Dónde está Katem y cómo contactar?",
            answer: `Katem está en ${site.location} y trabaja con clientes en Argentina y Latam. Podés pedir un análisis de tu web, escribir a ${site.email} o agendar una llamada en ${bookingHref}.`,
          },
        ]
      : [
          {
            question: "How can Katem help me get more clients?",
            answer:
              "Katem helps brands get more clients with conversion-focused websites, B2B prospecting, digital ads, and automation. The goal is real commercial opportunities, not just online presence.",
          },
          {
            question: "What is Katem's B2B prospecting?",
            answer:
              "It's a system to get B2B clients: we research accounts, craft messaging, run outreach, and follow up until meetings are booked.",
          },
          {
            question: "What services does Katem offer?",
            answer: dict.servicios.items
              .map(
                (item) =>
                  `${flattenNewlines(item.title)}: ${item.description}`
              )
              .join(" "),
          },
          {
            question: "What is Katem's digital pipeline?",
            answer: [
              dict.pipeline.lead,
              ...dict.pipeline.steps.map(
                (step) => `${step.id}. ${step.title}: ${step.description}`
              ),
            ].join(" "),
          },
          {
            question: "Why choose Katem?",
            answer: [
              flattenNewlines(dict.why.lead),
              ...dict.why.reasons.map(
                (reason) => `${reason.title}: ${reason.body}`
              ),
            ].join(" "),
          },
          {
            question: "Where is Katem and how can I get in touch?",
            answer: `Katem is based in ${site.location} and works with clients across Argentina and Latam. You can request a website analysis, email ${site.email}, or book a call at ${bookingHref}.`,
          },
        ];

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqEntities.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, professionalService, website, faqPage],
  };
}
