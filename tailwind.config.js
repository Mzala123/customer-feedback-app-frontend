/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    colors:{
     blue: '#132855',
     medium_light_blue:'#233868',
     sky:'#0ea5e9',
     navy_blue: '#0077a7',
     white: '#ffffff',
     white_slate:'#cbd5e1',
     light_orange:'#facc15',
     orange:'#a16207',
     amber:'#f59e0b',
     danger: '#b91c1c',
     gray:"#111827"
     
    },
    extend: {},
  },
  plugins: [],
}
