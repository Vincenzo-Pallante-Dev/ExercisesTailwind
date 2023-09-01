// /** @type {import('tailwindcss').Config} */ module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
//   theme: {
//     screens: {
//       sm: "576px",
//       // => @media (min-width: 576px) { ... }
//     },
//   },
// };

module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
