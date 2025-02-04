/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-text": "rgb(2, 15, 17)",
        background: "rgb(245, 253, 254)",
        primary: "rgb(45, 199, 225)",
        secondary: "rgb(166, 127, 237)",
        accent: "rgb(188, 83, 231)",
        footer: "#DCE6E7",
        login: '#ECF6F1',
        stroke:'rgba(17, 17, 17, 0.1)'
      },
    },
  },
  plugins: [require("daisyui")],
};
