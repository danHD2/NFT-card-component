/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.css",
    "./src/App.jsx",
    "./src/index.css",
    "./src/main.jsx"
  ],
  theme: {
    fontFamily :{
      sans: ['Outfit', 'sans-serif']
    },
    extend: {
      colors: {
        softBlue: "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
        mainBlue: "hsl(217, 54%, 11%)",
        cardBlue: "hsl(216, 50%, 16%)",
        lineBlue: "(line): hsl(215, 32%, 27%)"
      }
    },
  },
  plugins: [],
}

