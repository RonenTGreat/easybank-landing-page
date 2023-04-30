/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const colors = require('tailwindcss/colors');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      'dark-blue': 'hsl(233, 26%, 24%)',
      'lime-green': 'hsl(136, 65%, 51%)',
      'bright-cyan': 'hsl(192, 70%, 51%)',
      'grayish-blue': 'hsl(233, 8%, 62%)',
      'light-grayish-blue': 'hsl(220, 16%, 96%)',
      'very-light-gray': 'hsl(0, 0%, 98%)'
    },
  },
  plugins: [],
}

