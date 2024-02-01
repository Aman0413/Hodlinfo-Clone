/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(25,29,40)",
        secondary: "rgb(61,198,193)",
        "primary-light": "rgb(46,50,65)",
        "red-primary": "rgb(218,87,87)",
        "text-primary": "rgb(116,118,125)",
      },
    },
  },
  plugins: [],
};
