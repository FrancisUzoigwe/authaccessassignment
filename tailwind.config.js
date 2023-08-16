/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Nova Oval"],
      },
      transitionDuration: {
        durate: ["transition-all 450ms"],
      },
    },
  },
  plugins: [],
};
