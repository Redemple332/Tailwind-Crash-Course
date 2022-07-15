/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#FFFFF',
        secondary: {
          100: "#E2E2D5",
          200: "#888883"
        }
      },
      fontFamily:{
        body: ['Roboto']
      }
    },
  },
  plugins: [],
}
