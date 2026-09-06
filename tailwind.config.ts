import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#121212",
        "purple-black": "#1A1518",
        "off-white": "#F2EBE6",
        pink: "#C97B8F",
        rose: "#D4A0AE",
        bubble: "#E8A4B8",
        violet: "#8B7A9E",
        lavender: "#C9BDD4",
        "ui-gray": "#C0C0C0",
        navy: "#000080",
        beige: "#DED7CC",
        screen: "#0D0D0D",
        "win-shadow": "#808080",
        "win-dark": "#404040",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        accent: ["var(--font-accent)", "system-ui", "sans-serif"],
        "accent-pinyon": ["var(--font-accent-pinyon)", "cursive"],
        "accent-allura": ["var(--font-accent-allura)", "cursive"],
        "accent-imperial": ["var(--font-accent-imperial)", "cursive"],
      },
      boxShadow: {
        window: "2px 2px 0 rgba(0,0,0,0.45)",
        "win-out": "inset 1px 1px 0 #fff, inset -1px -1px 0 #404040",
        "win-in": "inset 1px 1px 0 #808080, inset -1px -1px 0 #fff",
      },
      backgroundImage: {
        "katem-grid":
          "linear-gradient(rgba(242, 235, 230, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(242, 235, 230, 0.07) 1px, transparent 1px)",
        "katem-dots":
          "radial-gradient(rgba(242, 235, 230, 0.14) 0.6px, transparent 0.7px)",
      },
      backgroundSize: {
        "katem-grid": "48px 48px",
        "katem-dots": "22px 22px",
      },
      maxWidth: {
        content: "80rem",
      },
      transitionTimingFunction: {
        katem: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
