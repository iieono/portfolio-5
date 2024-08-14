/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#393E46",
        accent: "#F2f2f2f2",
        bg: "#ffffff",
        navsize: "100px",
      },
    },
  },
  plugins: [],
};
