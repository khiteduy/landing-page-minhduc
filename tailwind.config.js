/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#475569",
          600: "#1D4ED8", // Màu nhấn chính (Royal Blue)
          700: "#1e40af",
          800: "#1e3a8a",
          900: "#0F172A"  // Text chính và màu nền sẫm
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.08)"
      }
    },
  },
  plugins: [],
};


