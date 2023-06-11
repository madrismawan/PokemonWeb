/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  blocklist: [
    'list-item',
  ],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif']
    },
    screens: {
      'sm': '620px',
      'md': '768px',
      'lg': '1240px',
      'xl': '1560px',
    },
    extend: {
    },
  },
  plugins: [],
}