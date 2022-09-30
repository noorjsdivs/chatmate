/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      sml: "667px",
      md: "768px",
      mdl: "1024px",
      xl: "1200px",
    },
    extend: {
      fontFamily: {
        bodyFont: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: "#11175D",
        buttonBg: "#5F35F5",
      },
    },
  },
  plugins: [],
};
