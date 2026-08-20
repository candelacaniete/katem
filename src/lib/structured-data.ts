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
    knowsAbout: dict.servicios.items.map((item) =>
      flattenNewlines(item.title)
    ),
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
            question: "¿Qué es Katem?",
            answer:
              "Katem es un estudio digital boutique e independiente en Buenos Aires. Diseña experiencias digitales, estrategia, productos digitales y sistemas para marcas que quieren ser recordadas.",
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
            question: "¿Por qué elegir Katem?",
            answer: [
              flattenNewlines(dict.why.lead),
              ...dict.why.reasons.map(
                (reason) => `${reason.title}: ${reason.body}`
              ),
            ].join(" "),
          },
          {
            question: "¿Cómo trabaja Katem?",
            answer: dict.metodo.steps
              .map(
                (step) =>
                  `${step.id}. ${step.title}: ${step.description}`
              )
              .join(" "),
          },
          {
            question: "¿Dónde está Katem y cómo contactar?",
            answer: `Katem está en ${site.location} y trabaja con clientes en Argentina y el mundo. Podés escribir a ${site.email} o agendar una llamada de descubrimiento en ${bookingHref}.`,
          },
        ]
      : [
          {
            question: "What is Katem?",
            answer:
              "Katem is an independent boutique digital studio based in Buenos Aires. It designs digital experiences, strategy, digital products, and systems for brands that want to be remembered.",
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
            question: "Why choose Katem?",
            answer: [
              flattenNewlines(dict.why.lead),
              ...dict.why.reasons.map(
                (reason) => `${reason.title}: ${reason.body}`
              ),
            ].join(" "),
          },
          {
            question: "How does Katem work?",
            answer: dict.metodo.steps
              .map(
                (step) =>
                  `${step.id}. ${step.title}: ${step.description}`
              )
              .join(" "),
          },
          {
            question: "Where is Katem and how can I get in touch?",
            answer: `Katem is based in ${site.location} and works with clients in Argentina and worldwide. Email ${site.email} or book a discovery call at ${bookingHref}.`,
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
