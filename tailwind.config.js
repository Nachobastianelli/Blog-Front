/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        fondoLibreta:
          "url('https://www.lilinterns.com/static/a4bc426461800af17aa5bec7a04b7a0f/a1be3/texturalibretafondo.webp')",
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
