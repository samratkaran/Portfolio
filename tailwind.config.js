/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {

    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '70':'0.7',
      '80': '0.8',
      '100': '1',
    },
    extend: {
      colors: {
        'navColor': '#FE90AF',
        'textHovColor': '#D8B5FF',
        'mobileBackColor': '#1caecfdb'
      },
    },
  },
  plugins: [],
}

