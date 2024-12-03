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
        bgcolor: "#F5FAFF",
        default: "#FFFFFF",
      },
      boxShadow: {
        "custom-1": "0px 8px 18px 0px #171E370D", // Your first custom shadow
        "custom-2": "0px 14px 44px 0px #189EFF0F", // Your second custom shadow
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
