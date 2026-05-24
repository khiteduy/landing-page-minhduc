/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Be Vietnam Pro – thiết kế riêng cho tiếng Việt, dùng làm body font
        sans: ["Be Vietnam Pro", "ui-sans-serif", "system-ui", "sans-serif"],
        // Syne – display/heading font, dùng cho H1, H2
        display: ["Syne", "ui-sans-serif", "sans-serif"],
      },
      colors: {
        brand: {
          50:  "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#475569",
          600: "#2563EB",
          700: "#1d4ed8",
          800: "#1e3a8a",
          900: "#0A0F1C",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(10, 15, 28, 0.05)",
      },
    },
  },
  plugins: [],
};
