/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        informatik: "#1570EF",
        automatisierung: '#Eee4e4',
        automatisierungLight: '#E3b5b6',
        robotik: '#1bc531',
        robotikLight: '#D9ecdc',
        meatronik: '#Eccd12',
        meatronikLight: '#Fcf9ea',
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