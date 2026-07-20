export const site = {
  name: "Katem",
  domain: "katem.com.ar",
  url: "https://katem.com.ar",
  email: "hola@katem.com.ar",
  /** Update with the real WhatsApp business number (country code, no +). */
  whatsapp: "5491112345678",
  year: new Date().getFullYear(),
} as const;

export const bookingHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hola Katem, me gustaría agendar una llamada de diagnóstico."
)}`;

export const navLinks = [
  { href: "#servicios", label: "Qué hacemos" },
  { href: "#para-quien", label: "Para quién" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#por-que", label: "Por qué Katem" },
] as const;
