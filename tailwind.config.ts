import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        myblue: "#00F5FC",
        mpink: "#f13ad0",
        background: "background",
        foreground: "var(--foreground)",
      },
      dropShadow: {
        "button": "2px 4px 6px black"
      },
    },

  },
  plugins: [],
} satisfies Config;
