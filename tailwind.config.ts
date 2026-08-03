import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        bg: "#0A0A0A",
        surface: "#141414",
        card: "#1A1A1A",
        accent: "#F59E0B",
        "accent-hover": "#D97706",
      },
    },
  },
  plugins: [],
};
export default config;
