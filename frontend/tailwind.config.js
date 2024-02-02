/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fillAnimation: {
          "0%": {fill: ""},
          "100%": {fill: "white"}
        }
      },
      animation: {
        fill: "fillAnimation 1s ease-in-out"
      }
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            default: "#ECF5F5",
            background: "#96BBBB",
            foreground: "#242929",
            textColor: "#ECF5F5",
            altBackground: "#242929",
            altForeground: "#ECF5F5",
            primary: "#637f80",
            secondary: "#27474E",
            accent: "#5F8185",
            warning: "#E55D23",
            danger: "#D22B2B",
          },
        },
        dark: {
          colors: {
            default: "#ECF5F5",
            background: "#242929",
            foreground: "#ECF5F5",
            textColor: "#ECF5F5",
            altBackground: "#96BBBB",
            altForeground: "#242929",
            primary: "#637f80",
            secondary: "#27474E",
            accent: "#5F8185",
            warning: "#E55D23",
            danger: "#D22B2B",
          },
        },
      },
    }),
  ],
};
