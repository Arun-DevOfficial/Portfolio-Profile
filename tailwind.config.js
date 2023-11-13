/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Gfont: ["Roboto Mono", "monospace", "Roboto Slab", "serif"],
        HeaderFont: "Headerfont",
        Content: [
          "Poppins",
          "sans-serif",
          " monospace",
          "Roboto Slab",
          "serif",
        ],
        logo: "Logo",
        Profile1: "Profile",
        Profile2: "Profile1",
      },
    },
  },
  plugins: [],
};
