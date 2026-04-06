/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'canvas': '#F4E6D4',
        'card': '#FFF4DC',
        'primary': '#C4451C',
        'secondary': '#5D4037',
        'accent': '#C7856A',
        'sidebar': '#e5d3b3',
        'content': '#f4ece1',
      },
    },
  },
  plugins: [],
}
