/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'ios-active': '#006ee6',
        'ios-inactive': '#00254d'
      }
    },
  },
  plugins: [],
}
