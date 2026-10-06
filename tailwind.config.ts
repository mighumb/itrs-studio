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
        studio: {
          canvas: "#f4f6f8",
          surface: "#ffffff",
          border: "#e2e8f0",
          muted: "#64748b",
          accent: "#0f766e",
          header: "#ffffff",
        },
      },
      boxShadow: {
        panel: "0 8px 30px rgba(15, 23, 42, 0.08)",
        fab: "0 4px 14px rgba(15, 118, 110, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
