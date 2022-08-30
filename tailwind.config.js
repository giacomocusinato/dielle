/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '24px',
        xl: '48px',
      },
    },
    extend: {
      fontFamily: {
        avenir: ['Avenir Next Condensed', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        sans: ['Fira Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
