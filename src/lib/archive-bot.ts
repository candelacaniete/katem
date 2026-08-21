export type BotIntent = "TURNO" | "INFO" | "LEAD";

export type FlowOption = {
  id: string;
  label: string;
};

export type FlowStep = {
  prompt: string;
  options?: FlowOption[];
  storeAs?: string;
  /** When set, choosing an option plays this reply (by option id) then ends the flow. */
  replyByOption?: Record<string, string>;
};

const INTENT_KEYWORDS: Record<BotIntent, string[]> = {
  TURNO: [
    "turno",
    "reservar",
    "agendar",
    "cita",
    "appointment",
    "book",
    "booking",
  ],
  INFO: [
    "info",
    "informacion",
    "precio",
    "precios",
    "cuanto",
    "costo",
    "price",
    "prices",
    "cost",
    "service",
    "services",
    "servicio",
    "servicios",
  ],
  LEAD: [
    "lead",
    "contacto",
    "contactar",
    "datos",
    "contact",
    "details",
  ],
};

const INTENT_ORDER: BotIntent[] = ["TURNO", "INFO", "LEAD"];

export function normalizeBotInput(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function matchBotIntent(value: string): BotIntent | null {
  const normalized = normalizeBotInput(value);
  if (!normalized) return null;

  for (const intent of INTENT_ORDER) {
    if (
      INTENT_KEYWORDS[intent].some((keyword) => normalized.includes(keyword))
    ) {
      return intent;
    }
  }

  return null;
}

export function interpolateFlowText(
  template: string,
  vars: Record<string, string>
) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => vars[key] ?? "");
}

export function typingDelayMs() {
  return 600 + Math.floor(Math.random() * 301);
}
