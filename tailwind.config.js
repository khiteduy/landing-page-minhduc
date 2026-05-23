/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesque", "Be Vietnam Pro", "sans-serif"],
        syne: ["Syne", "sans-serif"]
      },
      colors: {
        brand: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#475569",
          600: "#2563EB", // Màu nhấn chính (Electric Blue)
          700: "#1d4ed8",
          800: "#1e3a8a",
          900: "#0A0F1C"  // Chữ chính (Navy cực sẫm)
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(10, 15, 28, 0.05)"
      }
    },
  },
  plugins: [],
};



