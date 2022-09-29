/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
