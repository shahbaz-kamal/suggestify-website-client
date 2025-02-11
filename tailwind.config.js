/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-text": "rgb(2, 15, 17)",
        background: "rgb(245, 253, 254)",
        primary: "rgb(45, 199, 225)",
        "primary-20": "rgba(45, 199, 225,0.2)",
        secondary: "rgb(166, 127, 237)",
        "secondary-20": "rgba(166, 127, 237,0.2)",
        accent: "rgb(188, 83, 231)",
      },
    },
  },
  plugins: [require("daisyui")],
};
