/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./public/assets/**/*.{png,jpg,svg}",
    "./src/styles/variaveis.css"
  ],
  theme: {
    center: true,
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
        white: '#ffffff',
        lightGray01: '#eeeeee',
        lightGray02: '#cccccc',
        lightGray03: '#BBBBBB',
        gray: '#555555',
        middleGray: '#B0B0B0',
        black: '#000000',
        blue: '#007bff',
        darkBlue: '#0056b3',
        purple: '#6F2282',
        lightPurple: '#DBC7DF',
        lightOrange: '#FCBA5A',
        red: '#ff0000',
        darkRed: '#cc0000',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Roboto Condensed', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
