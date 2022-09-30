/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        backg:
          "linear-gradient(179.89deg, #090D2A 0.09%, #090D2A 89.58%, #09344C 93.26%, #09FBFB 107.91%)",
      }),
    },
  },
  plugins: [],
};
