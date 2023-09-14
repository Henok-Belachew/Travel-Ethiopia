/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,html}", "./index.html"],
  theme: {
    extend: {
      spacing: {
        '40': '40px', // Add a new padding size
        '96': '96px', // Add another new padding size
      },
      colors:{
        "light-grey": "#656565",
        "light-orange": "#ffcf92"

      }
    },
  },
  plugins: [],
}

