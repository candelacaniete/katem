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
        black: "#070609",
        "purple-black": "#100A16",
        "off-white": "#F5F0F5",
        pink: "#FF4FD8",
        violet: "#8B5CF6",
        lavender: "#DCC6FF",
        "ui-gray": "#1A171D",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        accent: ["var(--font-accent)", "cursive"],
        "accent-pinyon": ["var(--font-accent-pinyon)", "cursive"],
        "accent-allura": ["var(--font-accent-allura)", "cursive"],
        "accent-imperial": ["var(--font-accent-imperial)", "cursive"],
      },
      boxShadow: {
        "glow-pink": "0 0 24px rgba(255, 79, 216, 0.28)",
        "glow-violet": "0 0 28px rgba(139, 92, 246, 0.22)",
        window: "0 24px 80px rgba(0, 0, 0, 0.55)",
      },
      backgroundImage: {
        "katem-grid":
          "linear-gradient(rgba(245, 240, 245, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 240, 245, 0.04) 1px, transparent 1px)",
        "katem-dots":
          "radial-gradient(rgba(245, 240, 245, 0.12) 0.6px, transparent 0.7px)",
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
