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
        "rose-light": "#BE123C1A",
        "gray-300": "#D1D5DB",
        "gray-400": "#9CA3AF",
        "gray-900": "#111827",
        "eclipse-100": "#F3F4F680",
        "video-100": "#404040",
        "rating-100": "#E8E8E8",
        "rating-200": "#666666",
      },
    },
  },
  plugins: [],
};
