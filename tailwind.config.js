/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      blue: "#2964FC",
      black: "#1E1E1E",
     darkBlue:"#0F1E5F",
     footerblue:"#0E1E5E",
     footertext:"#62688F",
     divider:"#0E1E5E"
    },

    fontFamily: {
      PJ: ['Plus Jakarta Sans'],
    },
    screens: {
      // "2xl": { max: "1535px" },
      // // => @media (max-width: 1535px) { ... }

      // xl: { max: "1279px" },
      // // => @media (max-width: 1279px) { ... }

      // lg: { max: "1180px" },
      // // => @media (max-width: 1023px) { ... }

      md: { max: "1180px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "769px" },
  
      xs:{max:"460px"}

     
    },

  },
  plugins: [],
}

