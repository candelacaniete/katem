export const site = {
  name: "Katem",
  brand: "KATEM®",
  tagline: "ESTUDIO DIGITAL",
  domain: "katem.com.ar",
  url: "https://katem.com.ar",
  email: "hola@katem.com.ar",
  whatsapp: "541131121463",
  instagram: "https://www.instagram.com/katembsas",
  demos: "https://www.katem.store",
  year: 2026,
  location: "Buenos Aires, Argentina",
} as const;

export const bookingHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hola Katem, me gustaría iniciar un proyecto."
)}`;

export const demosHref = site.demos;
