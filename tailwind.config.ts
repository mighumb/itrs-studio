import type { Config } from "tailwindcss";

/**
 * ITRS / Ekara design tokens — sourced from Figma DS (file Fwn3pUkAQweQvuf2MVnqLH).
 * e.g. button/primary/filled/default/background → #057b80
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
        itrs: {
          primary: "#057b80",
          "primary-foreground": "#fefefe",
          body: "#292929",
          muted: "#7c7c7c",
          icon: "#464646",
          "input-text": "#656565",
          border: "#bdbdbd",
          separator: "#efefef",
          surface: {
            lightest: "#fefefe",
            lighter: "#f9f9f9",
            light: "#f6f6f6",
            canvas: "#f4f4f4",
          },
          secondary: "#464646",
          "icon-button": "#dcdcdc",
        },
      },
      borderRadius: {
        "itrs-xs": "8px",
        "itrs-m": "16px",
        "itrs-xl": "24px",
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        panel:
          "0 4px 16px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.04)",
        fab: "0 4px 14px rgba(5, 123, 128, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
