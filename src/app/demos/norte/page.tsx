import { Cormorant_Garamond, Manrope } from "next/font/google";
import type { Metadata } from "next";
import { NorteHome } from "@/components/demos/norte/NorteHome";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-norte-display",
  weight: ["400", "500", "600"],
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-norte-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "NORTE — Architecture & Design",
  description:
    "Spaces built to outlive trends. Architecture studio demo by Katem.",
};

export default function NortePage() {
  return (
    <div className={`${display.variable} ${body.variable} font-[family-name:var(--font-norte-body)]`}>
      <NorteHome />
    </div>
  );
}
