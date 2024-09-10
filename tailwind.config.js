/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        fondoLibreta: `url('src/assets/texturalibretafondo.webp')`,
      },
      screens: {
        xs: "415px",
        header: "909px",
        content: "1500px",
        contentXL: "2300px",
      },
    },
  },
  plugins: [],
};
