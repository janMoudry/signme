/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Encode Sans SC", "sans-serif"],
      },
      backgroundColor: {
        primary: "#FFA447",
        primaryDark: "#FF7F00",
      },
      textColor: {
        primary: "#FFA447",
        primaryDark: "#FF7F00",
      },
      borderColor: {
        primary: "#FFA447",
        primaryDark: "#FF7F00",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
