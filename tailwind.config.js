/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mukta: ['"Mukta"', "cursive"],
      },
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
      screens: {
      'xxs': '214px',
      
      'xs': '414px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '1100px',
      // => @media (min-width: 768px) { ... }

      'lg': '1650px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1920px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '2564px',
      // => @media (min-width: 1536px) { ... }
    }
    },
  },
  plugins: [],
};
