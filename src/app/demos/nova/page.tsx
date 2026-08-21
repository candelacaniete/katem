import { Archivo, Inter } from "next/font/google";
import type { Metadata } from "next";
import { NovaHome } from "@/components/demos/nova/NovaHome";

const display = Archivo({
  subsets: ["latin"],
  variable: "--font-nova-display",
  weight: ["500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-nova-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "NOVA — Creative Consultancy",
  description:
    "Brand strategy & creative direction for companies ready to move differently. Demo by Katem.",
};

export default function NovaPage() {
  return (
    <div className={`${display.variable} ${body.variable} font-[family-name:var(--font-nova-body)]`}>
      <NovaHome />
    </div>
  );
}
