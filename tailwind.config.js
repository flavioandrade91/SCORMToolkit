/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./public/assets/**/*.{png,jpg,svg}"
  ],
  theme: {
    extend: {
        fontFamily: {
            'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
            'roboto': ['"Roboto"', 'sans-serif'],           
        },
        colors: {
          // cores principais 
          
          // font color
            'text-color-01': '#6F2282', 
        },
        backgroundImage: {
            'banner-header': 'url("../../assets/BannerHeader.svg")',
        },
    },
  },
  plugins: [],
}
