/** @type {import('tailwindcss').Config} */ module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }
    },
  },
};
