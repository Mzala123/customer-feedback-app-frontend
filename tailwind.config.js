/** @type {import('tailwindcss').Config} */
const colors  = require('tailwindcss/colors')
module.exports = {
  content: [ "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
   
    extend: {
      colors:{
        primary : colors.blue,
        gray: colors.gray,
        blue: '#1DA1F2',
        medium_light_blue:'#233868',
        dark_blue:'#19294e',
        light_sky_blue:'#c2e7ff',
        lightblue: '#EFF9FF',
        sky:'#0ea5e9',
        navy_blue: '#0077a7',
        white: '#ffffff',
        white_slate:'#cbd5e1',
        light_orange:'#facc15',
        light:'#AABBE2',
        lighter:'#E1E8ED',
        lighest:'#F5F8FA',
        orange:'#a16207',
        amber:'#f59e0b',
        danger: '#b91c1c',
       
       },
    },
  },
  plugins: [],
}
