/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    screens: {
      sm: { max: '600px' },
      xs: { max: '480px' }
    }
  },

  plugins: [require('tailwind-scrollbar'), require('tailwind-scrollbar-hide')]
}
