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
        papel: "#F3EBDD",
        tinta: "#241621",
        "rosa-katem": "#E8A8BC",
        "rosa-suave": "#F7DDE4",
        neon: "#FF2EC4",
        grid: "#AECBDA",
      },
      fontFamily: {
        display: ["var(--font-fredoka)", "sans-serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
        accent: ["var(--font-vt323)", "monospace"],
      },
      boxShadow: {
        neon: "0 0 0 1px #FF2EC4, 0 0 18px rgba(255, 46, 196, 0.45)",
        "neon-soft": "0 0 22px rgba(255, 46, 196, 0.28)",
      },
      backgroundImage: {
        "papel-grid":
          "linear-gradient(rgba(174, 203, 218, 0.38) 1px, transparent 1px), linear-gradient(90deg, rgba(174, 203, 218, 0.38) 1px, transparent 1px)",
      },
      backgroundSize: {
        "papel-grid": "28px 28px",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
