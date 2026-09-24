import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        banat: {
          primary: "#1a1a2e",
          secondary: "#e94560",
          accent: "#0f3460",
          background: "#f8f9fa",
          text: "#16213e",
          muted: "#6c757d",
        },
        "banat-collection": {
          base: "#2d3436",
          accent: "#d63031",
        },
        "banat-project": {
          base: "#6c5ce7",
          accent: "#fdcb6e",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config
