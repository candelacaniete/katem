import type { Metadata } from "next";
import { Fredoka, Plus_Jakarta_Sans, VT323 } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
  weight: ["500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const vt323 = VT323({
  subsets: ["latin"],
  variable: "--font-vt323",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Katem — Sitios que convierten, experiencias que enamoran",
  description:
    "Diseño web y automatizaciones para profesionales del bienestar latinos en USA. Landing pages, sitios institucionales y e-commerce con estética propia.",
  metadataBase: new URL("https://katem.com.ar"),
  openGraph: {
    title: "Katem — Sitios que convierten, experiencias que enamoran",
    description:
      "Diseño web y automatizaciones para psicólogos, coaches y nutricionistas latinos en USA.",
    url: "https://katem.com.ar",
    siteName: "Katem",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${fredoka.variable} ${jakarta.variable} ${vt323.variable} font-body`}
      >
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-tinta focus:px-4 focus:py-2 focus:font-body focus:text-sm focus:font-semibold focus:text-papel"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
