/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      sm:'400px',
      md: '830px'
    },
   
    extend: {
      colors:{
        lightBlue: ' rgba(56, 133, 200, 1)',
        hoverBlue:' rgba(56, 133, 200, .8)',
        brown: 'rgba(141, 99, 85, 1)',
        lightBrown: 'rgba(141, 99, 85, .8)',
        black:'rgba(0, 0, 0, 1)',
        gray: 'rgba(240, 241, 243, 1)',
        pink:'rgba(255, 0, 0, 0.38)',
      gradientLight:'rgba(217, 217, 217, 0.1) 0%',
      gradientDark:'rgba(6, 86, 155, 0.87) 100%',
      business:'rgba(56, 133, 200, 0.6)',
      footer:'rgba(19, 24, 37, 1)',
      }
    },
  },
  plugins: [],
}
