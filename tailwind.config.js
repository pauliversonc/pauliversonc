/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Josefin Sans', 'sans-serif'],
        'secondary': ['Poppins', 'sans-serif']
      },
      screens: {
        '1mbr': '340px',
        '2mbr': '400px',
        '3mbr': '512px',
        '4mbr': '640px',
      },
    },
  },
  plugins: [],
}

