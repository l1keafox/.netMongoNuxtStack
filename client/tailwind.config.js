/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
    fontFamily: {
      mukta:["Mukta", "sans-serif"],
      josefin:["Josefin Sans", "sans-serif"],
      roboto:["Roboto", "sans-serif"],
      grotesk:["Hanken Grotesk", "sans-serif"],
    }    
  },
  plugins: [],
}