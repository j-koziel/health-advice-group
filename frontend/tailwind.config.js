/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#96BBBB",
            foreground: "#242929",
            darkBackground: "#242929",
            darkForeground: "#ECF5F5",
            primary: "#89ADAE",
            accent: "#5F8185",
          },
        },
        dark: {
          colors: {
            background: "#242929",
            foreground: "#ECF5F5",
            lightBackground: "#96BBBB",
            lightForeground: "#ECF5F5",
            primary: "#89ADAE",
            accent: "#5F8185",
          },
        },
      },
    }),
  ],
};
