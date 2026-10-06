import type { Config } from "tailwindcss";

/**
 * Tokens alignés sur https://itrs-dem-prototype.vercel.app/
 * (--color-surface, --color-accent, --color-user-bubble)
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dem: {
          surface: "#f5f5f7",
          accent: "#0071e3",
          "user-bubble": "#d5dde8",
          body: "#18181b",
          muted: "#71717a",
          icon: "#52525b",
          border: "#e4e4e7",
          separator: "#f4f4f5",
          card: "#ffffff",
        },
      },
      borderRadius: {
        "dem-sm": "0.5rem",
        "dem-md": "0.75rem",
        "dem-lg": "1rem",
        "dem-xl": "1.5rem",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Text"',
          '"Segoe UI"',
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        panel: "0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.04)",
        fab: "0 4px 14px rgba(0, 113, 227, 0.28)",
        card: "0 1px 2px rgba(0, 0, 0, 0.04), 0 8px 24px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
