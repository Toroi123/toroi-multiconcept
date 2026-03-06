/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "toroi-purple": "#2A0A4A",
        "toroi-pink": "#E81CFF",
        "toroi-gold": "#FBBF24",
      }
    },
  },
  plugins: [],
}
