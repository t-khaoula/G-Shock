/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#D9D9D9",
      },

      colors: {
        primary: "#D9D9D9",
        secondary: "#000",
      },

      fontFamily: {
        publicSans: ["Public Sans", "sans-serif"],
        bebasNeue: ["Bebas Neue", "sans-serif"],
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
