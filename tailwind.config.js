/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#105761',
        secondary: '#64748b',
      },
      fontFamily: {
        'Olswan': ['Oswald', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

