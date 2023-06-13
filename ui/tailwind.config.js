/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        centered: "2px 2px 20px -5px rgba(0,0,0,0.3)",
      },

      colors: {
        primary: {
          50: "#fff4ed",
          100: "#ffe7d5",
          200: "#fecbaa",
          300: "#fca675",
          400: "#fa743a",
          500: "#f85217",
          600: "#e9370d",
          700: "#c1260d",
          800: "#992013",
          900: "#7b1e13",
          950: "#430b07",
        },

        secondary: {
          50: "#f5f6fa",
          100: "#eaecf4",
          200: "#d0d6e7",
          300: "#a6b3d3",
          400: "#778cb9",
          500: "#556da2",
          600: "#425587",
          700: "#37466d",
          800: "#303d5c",
          900: "#283047",
          950: "#1d2234",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
