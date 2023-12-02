/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0ACF83",
        secondary: "#6359ec",
        dark: "#7F7F7F",
        grey: "#BABABA",
        "grey-light": "#f3efff",
      },
    },
  },
  plugins: [],
};
