/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "374px",
      // => @media (min-width: 576px) { ... }

      md: "767px",
      // => @media (min-width: 960px) { ... }

      lg: "1023px",
      // => @media (min-width: 1440px) { ... }
      xl: "1200px",
    },
    extend: {
      colors: {
        "rose-700": "#BE123C",
      },
    },
  },
  plugins: [],
};
