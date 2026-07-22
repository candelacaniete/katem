export type Service = {
  id: string;
  title: string;
  description: string;
  pointsIntro: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: "landing",
    title: "Landing Pages",
    description:
      "Ideal para profesionales que quieren empezar con una presencia online clara y enfocada en convertir visitas en consultas.",
    pointsIntro: "Es para vos si:",
    points: [
      "Querés dejar de depender únicamente de Instagram.",
      "Necesitás un lugar donde enviar a tus potenciales clientes.",
      "Buscás transmitir profesionalismo desde el primer contacto.",
      "Querés facilitar el paso de visitante a consulta.",
    ],
  },
  {
    id: "institucional",
    title: "Sitio institucional",
    description:
      "Un sitio completo donde tu marca cuenta quién sos, cómo trabajás y por qué elegirte.",
    pointsIntro: "Es para vos si:",
    points: [
      "Querés generar más confianza antes de la primera sesión.",
      "Tenés varios servicios o especialidades.",
      "Buscás fortalecer tu marca personal.",
      "Necesitás una presencia digital sólida a largo plazo.",
    ],
  },
  {
    id: "ecommerce",
    title: "Tienda online",
    description:
      "Vendé cursos, programas, sesiones o recursos digitales desde una plataforma propia.",
    pointsIntro: "Es para vos si:",
    points: [
      "Querés generar ingresos más allá de las sesiones individuales.",
      "Tenés productos digitales o pensás lanzarlos.",
      "Buscás automatizar cobros y entregas.",
      "Querés que tu negocio siga vendiendo incluso cuando no estás trabajando.",
    ],
  },
];
