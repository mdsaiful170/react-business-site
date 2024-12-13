/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

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
        "custom-1": "0px 8px 18px 0px #171E370D",
        "custom-2": "0px 14px 44px 0px #189EFF0F",
        "custom-3": "0px 4px 3px 0px #00000040",
        "custom-4": " 0px -1px 0px 0px #9A9FBF1A inset",

      },
      backgroundImage: {
        gradientwithimg: `linear-gradient(180.12deg, rgba(39, 68, 124, 0.2) 18.55%, rgba(38, 57, 92, 0.156) 38.23%, rgba(38, 57, 92, 0) 107.91%), url('../from-img.png')`,
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
