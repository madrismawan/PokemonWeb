/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
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
      colors: {
        bug:'bug',
        dark:'dark',
        dragon:'#FF7000',
        electric:'electric',
        fairy:'fairy',
        fighting:'fighting',
        fire:'#FF7000',
        flying:'flying',
        ghost:'ghost',
        grass:'#4fa748',
        ground:'ground',
        ice:'ice',
        normal:'normal',
        poison:'poison',
        psychic:'psychic',
        rock:'rock',
        steel:'steel',
        water:'water'
      }
    },
  },
  plugins: [],
}