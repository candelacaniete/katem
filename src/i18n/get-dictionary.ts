import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/es";

const dictionaries = {
  es: () => import("./dictionaries/es").then((m) => m.default),
  en: () => import("./dictionaries/en").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
