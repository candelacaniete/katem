export type DemoStatus = "live" | "soon";

export type Demo = {
  id: string;
  title: string;
  niche: string;
  description: string;
  href?: string;
  status: DemoStatus;
  statusLabel: string;
};

/**
 * Add new demos here — the Portfolio section maps this list.
 * Set `href` when a live preview URL is ready.
 */
export const demos: Demo[] = [
  {
    id: "psicologos",
    title: "Demo para psicólogos",
    niche: "Bienestar · terapia",
    description:
      "Landing pensada para terapeutas latinos en USA: agenda clara, tono cálido y un camino corto de Instagram a consulta.",
    status: "soon",
    statusLabel: "> status: building_",
  },
];
