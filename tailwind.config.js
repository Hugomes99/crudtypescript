/** @type {import('tailwindcss').Config} */ 

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/*/.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, config }) {
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ]
}