import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, locales } from "./i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocale) {
    // Keep Spanish at `/` — redirect `/es` → `/`
    if (pathname === "/es" || pathname.startsWith("/es/")) {
      const url = request.nextUrl.clone();
      url.pathname = pathname.replace(/^\/es/, "") || "/";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  // Spanish lives at `/` via rewrite; English at `/en`.
  if (pathname === "/") {
    return NextResponse.rewrite(new URL(`/${defaultLocale}`, request.url));
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg).*)"],
};
