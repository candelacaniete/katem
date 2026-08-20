import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, locales, type Locale } from "./i18n/config";

function withLocaleHeader(response: NextResponse, locale: Locale) {
  response.headers.set("x-locale", locale);
  return response;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/demos") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocale) {
    if (pathname === "/es" || pathname.startsWith("/es/")) {
      const url = request.nextUrl.clone();
      url.pathname = pathname.replace(/^\/es/, "") || "/";
      return NextResponse.redirect(url);
    }

    const locale = (pathname.split("/")[1] || defaultLocale) as Locale;
    return withLocaleHeader(NextResponse.next(), locale);
  }

  if (pathname === "/") {
    const rewrite = NextResponse.rewrite(
      new URL(`/${defaultLocale}`, request.url)
    );
    return withLocaleHeader(rewrite, defaultLocale);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg|robots.txt|sitemap.xml|opengraph-image|twitter-image).*)"],
};
