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
      "Escribinos por WhatsApp. Queremos conocer tu proyecto y entender qué necesitás.",
  },
  {
    id: "diagnostico",
    code: "02",
    title: "Diagnóstico",
    description:
      "Agendamos una llamada para conocer tu negocio, tus objetivos y definir qué tipo de sitio tiene más sentido para vos.",
  },
  {
    id: "propuesta",
    code: "03",
    title: "Propuesta",
    description:
      "Recibís una propuesta clara con alcance, tiempos de entrega y presupuesto definidos.",
  },
  {
    id: "desarrollo",
    code: "04",
    title: "Desarrollo",
    description:
      "Diseñamos, desarrollamos y publicamos tu sitio para que puedas empezar a recibir clientes con una presencia online profesional.",
  },
];
