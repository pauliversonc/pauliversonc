/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        'figtree': ["Figtree", "sans-serif"],
      },
      screens: {
        'xxxs': '320px',
        'xxs': '390px',
        'xs': '512px',
      },
    },
  },
  plugins: [],
}

