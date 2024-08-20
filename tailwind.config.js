/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-image": "url('/img/fondo.webp')",
      },
      boxShadow: {
        "box-shadow-left":
          "-webkit-box-shadow: -8px 1px 175px -1px rgba(247,250,250,0.67)",
        "-moz-box-shadow": "-8px 1px 175px -1px rgba(247,250,250,0.67)",
        "box-shadow": "-8px 1px 175px -1px rgba(247,250,250,0.67)",
      },
    },
  },
  plugins: [],
};
