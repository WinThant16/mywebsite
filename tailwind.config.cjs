/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        centra: ['CentraNo2', 'sans-serif'],
        evil: ['EvilEmpire', 'sans-serif'], 
        sans: ['CentraNo2', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

