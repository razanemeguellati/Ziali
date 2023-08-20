/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},

    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      "2xl": "1536px", 
      "3xl": "1920px", 
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'red': '#FF3D00',
      'green': '#8AC60F',
      'yellow': '#FFD200',
      'blue': '#146C94',
      'lazourdi': '#19A7CE' ,
      'sky': '#AFD3E2' , 
      'white': '#FFFFFF' , 
      'black': '#000000' , 
      'heavygris': '#5E5D5D' , 
      'lightgris' : '#D9D9D9' ,
    }, 

  },
  plugins: [],
}