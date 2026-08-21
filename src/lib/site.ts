export const site = {
  name: "Katem",
  brand: "KATEM®",
  tagline: "ESTUDIO DIGITAL",
  domain: "katem.com.ar",
  url: "https://katem.com.ar",
  email: "candelacanete@katem.com.ar",
  whatsapp: "541131121463",
  instagram: "https://www.instagram.com/katembsas",
  demos: "https://www.katem.store",
  year: 2026,
  location: "Buenos Aires, Argentina",
} as const;

export const bookingHref = "https://calendar.app.google/bL7uXed3AjdYejF96";

export const emailHref = `mailto:${site.email}?subject=${encodeURIComponent(
  "Quiero iniciar un proyecto con Katem"
)}`;

export const demosHref = site.demos;
