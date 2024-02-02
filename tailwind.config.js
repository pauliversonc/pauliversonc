/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dmBlack: '#191919',
        dmBlackTint1: '#2e2e2e',
        dmBlackTint2: '#545454',
        dmWhite: '#EAEADE',
        dmGray: '#909090',
        lmRed: '#FDF2F2',
        lmGreen: '#9BE495',
        dmRed1: '#681A17',
        dmRed2: '#F36F6A',
      },
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

