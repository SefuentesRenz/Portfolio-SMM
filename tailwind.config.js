/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#dc2626",
          dark: "#111827",
        },
      },
    },
  },
  plugins: [],
};