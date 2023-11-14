/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zenDots: "'Zen Dots', sans-serif",
      },
      boxShadow: {
        "button-shadow": "0 3px 20px 0px #0C85E9",
      },
      screens: {
        "tablet": { 'max': "768px" },
        "mobile-m": { 'max': "425px" },
        "mobile-sm": { 'max': "320px" },
      },
    },
  },
  plugins: [],
};
