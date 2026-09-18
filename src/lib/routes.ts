import type { Locale } from "@/i18n/config";
import { localePath } from "@/lib/seo";

export const siteRoutes = {
  home: "",
  desarrolloWeb: "/desarrollo-web",
  prospectionB2b: "/prospeccion-b2b",
  publicidadDigital: "/publicidad-digital",
  automatizaciones: "/automatizaciones",
  proyectos: "/proyectos",
  privacidad: "/privacidad",
} as const;

export type SiteRouteKey = keyof typeof siteRoutes;

/** Spanish paths that must be rewritten (not redirected) to /es/... */
export const esRewritePaths: string[] = [
  "/",
  siteRoutes.privacidad,
  siteRoutes.desarrolloWeb,
  siteRoutes.prospectionB2b,
  siteRoutes.publicidadDigital,
  siteRoutes.automatizaciones,
  siteRoutes.proyectos,
];

export function href(locale: Locale, route: SiteRouteKey | string) {
  if (route in siteRoutes) {
    return localePath(locale, siteRoutes[route as SiteRouteKey]);
  }
  return localePath(locale, route);
}

export function barePathFromPathname(pathname: string) {
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const stripped = pathname.slice(3);
    return stripped || "/";
  }
  return pathname || "/";
}
