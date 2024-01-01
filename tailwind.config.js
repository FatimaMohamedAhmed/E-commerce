/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor: "#7BD3EA",
        secondaryColor: "#FFC0D9 "
      } 
     
    },
  },
  plugins: [],
}

