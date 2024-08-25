/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        creator: ['Creator'],
      },
      flex: {
        '2': '2 1 0%',
      },
    },
  },
  plugins: [],
}