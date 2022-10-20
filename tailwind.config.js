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
      colors: {
        'dielle': '#00A19A',
      },
      fontFamily: {
        avenir: ['Avenir Next LT Pro', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        sans: ['Fira Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
