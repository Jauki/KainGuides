/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        informatik: "#1570EF",
        blueLight: "#F0F9FF",
        primary: "#7F56D9",
        primary50: "#F9F5FF",
        success50: "#ECFDF3",
        success500: "#12B76A"
      }
    },
  },
  plugins: [],
}