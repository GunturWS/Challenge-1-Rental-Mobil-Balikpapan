/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Helvetica",
      },
      colors: {
        Biru: "#0D28A6",
        Hijau: "#5CB85F",
        "Hijau Lemon": "#92D094",
        "Hijau muda": "#5CB85F",
        "abu-abu": "#CFD4ED",
        "semi-putih": "#F1F3FF",
        border: "#D0D0D0",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
