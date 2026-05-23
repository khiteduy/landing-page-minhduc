/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f7ff",
          100: "#deeeff",
          200: "#b5dbff",
          300: "#7ec3ff",
          400: "#43a6ff",
          500: "#1786ff",
          600: "#0068e6",
          700: "#0052b4",
          800: "#054894",
          900: "#0b3d78"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.08)"
      }
    },
  },
  plugins: [],
};
