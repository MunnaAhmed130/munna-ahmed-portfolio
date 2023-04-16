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
    },
  },
  plugins: [],
};
