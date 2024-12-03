/** @type {import('tailwindcss').Config} */
const { nextui, colors } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        readhot: ["Red Hat Display", "sans-serif"],
      },

      colors: {
        primary: " #0E8BFF",
        secondary: "#26395C",
        bgcolor:"#F5FAFF"
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
