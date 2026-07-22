export const site = {
  name: "Katem",
  domain: "katem.com.ar",
  url: "https://katem.com.ar",
  email: "hola@katem.com.ar",
  whatsapp: "541131121463",
  instagram: "https://www.instagram.com/katembsas",
  demos: "https://www.katem.store",
  year: new Date().getFullYear(),
} as const;

export const bookingHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hola Katem, me gustaría agendar una llamada de diagnóstico."
)}`;

export const demosHref = site.demos;

export type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

export const navLinks: NavLink[] = [
  { href: "#servicios", label: "Qué hacemos" },
  { href: "#para-quien", label: "Para quién" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#por-que", label: "Por qué Katem" },
  { href: demosHref, label: "Ver demos", external: true },
];
