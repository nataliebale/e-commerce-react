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
        "grey-light": "#e7ebef",
        // "dark-blue": "#2b2731"
        "dark-blue": "#141422",
        "dark-grey": "#25252b",
        // "grey-light": "#ebebeb",
        // "grey-light": "#ededed",
        // "grey-light": "#f3efff",
      },
    },
  },
  plugins: [],
};
