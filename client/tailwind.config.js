/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          ibm: ['"IBM Plex Sans"', 'sans-serif'],
          source: ['"Source Sans Pro"', 'sans-serif'],
        },
        colors: {
          primary: '#C13584',
          secondary: '#E1306C',
          border: '#DBDBDB',
          lightGray: '#FAFAFA',
          textMain: '#262626',
          textMuted: '#8E8E8E',
        }
      }
    },
    plugins: [],
  }
  