/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b",
        },
        accent: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
          950: "#4c0519",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2, 6, 23, 0.12)",
        glow: "0 0 0 1px rgba(99, 102, 241, 0.25), 0 10px 40px rgba(99, 102, 241, 0.15)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(1200px circle at 20% 20%, rgba(244, 63, 94, 0.25), transparent 40%), radial-gradient(1000px circle at 80% 30%, rgba(99, 102, 241, 0.25), transparent 45%)",
      },
    },
  },
  plugins: [],
}
