/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif "],
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "space-image": "url('https://i.ibb.co/tQ78SMJ/space.jpg')",
      },
      animation: {
        ripple: `ripple-effect 1s infinite`,
      },
      keyframes: {
        "ripple-effect": {
          "0%": {
            transform: "scale(1)",
            opacity: "0.7",
          },

          "30%": {
            transform: "scale(5)",
            opacity: "0.1",
          },

          "100%": {
            transform: "scale(10)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
