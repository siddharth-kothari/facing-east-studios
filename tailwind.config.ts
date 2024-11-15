import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        nunito: ['"Nunito Sans"', "sans-serif"],
        anton: ['"Anton"', "sans-serif"],
      },
      screens: {
        "2xl": "1300px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
} satisfies Config;
