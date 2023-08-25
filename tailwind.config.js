/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Helvetica,Arial, sans-serif",
      },
      colors: {
        Biru: "#0D28A6",
        Hijau: "#5CB85F",
        "Hijau Lemon": "#92D094",
        Kuning: "#F9CC00",
        Merah: "#FA2C5A",
        "Hijau muda": "#5CB85F",
        "abu-abu": "#CFD4ED",
        "semi-putih": "#F1F3FF",
        "Biru-tua": "#0D28A6",
        border: "#D0D0D0",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
