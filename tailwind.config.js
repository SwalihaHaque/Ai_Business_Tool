/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto'],
      },
      colors: {
        'bg-quartz': '#D6D6FF',
        'custom-gray': '#53535399',
        'custom-dashgray': ' #3D3D3D',

      },
    },
  },
  plugins: [require("daisyui")]
}

