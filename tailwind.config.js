/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E5BFF',
        secondary: '#E94A47',
        back: '#F5F5F7'
      }
    },
  },
  plugins: [],
}