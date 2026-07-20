export type Service = {
  id: string;
  title: string;
  description: string;
  result: string;
};

export const services: Service[] = [
  {
    id: "landing",
    title: "Landing pages",
    description:
      "Una página clara que cuenta quién sos, qué ofrecés y cómo agendar. Pensada para Instagram y WhatsApp: el visitante entiende y actúa.",
    result: "Más consultas, menos idas y vueltas.",
  },
  {
    id: "institucional",
    title: "Sitios institucionales",
    description:
      "Tu espacio online completo: servicios, historia, preguntas frecuentes y contacto. Se siente profesional sin parecer una clínica fría.",
    result: "Presencia que genera confianza desde el primer scroll.",
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description:
      "Vendé cursos, sesiones o productos digitales sin complicarte. Checkout simple, pagos listos y una experiencia que no ahuyenta.",
    result: "Ventas que no dependen de estar todo el día online.",
  },
];
