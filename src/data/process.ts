export type ProcessStep = {
  id: string;
  code: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: "contacto",
    code: "01",
    title: "Contacto",
    description:
      "Nos escribís por WhatsApp o Instagram. Contanos qué necesitás, sin guion raro ni formulario eterno.",
  },
  {
    id: "diagnostico",
    code: "02",
    title: "Diagnóstico",
    description:
      "Agendamos una llamada corta. Escuchamos tu negocio, tu audiencia y qué tiene que lograr el sitio.",
  },
  {
    id: "propuesta",
    code: "03",
    title: "Propuesta",
    description:
      "Te armamos un plan concreto: alcance, tiempos y cómo se va a ver. Sin humo, con siguiente paso claro.",
  },
  {
    id: "entrega",
    code: "04",
    title: "Entrega",
    description:
      "Diseñamos, construimos y te dejamos el sitio listo para recibir clientes. Vos seguís atendiendo; nosotros hacemos que funcione.",
  },
];
