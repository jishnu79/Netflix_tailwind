/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      height: {
        header: '560px',
        rate: '400px'
      },
      screens: {
        xs: '475px' 
      }
      ,
      fontSize: {
        h1: '2.6rem'
      }
      ,
      colors: {
        main: '#080A1A',
        subMain: '#f20000',
        dry: '#0B0F29',
        star: '#FFB000',
        text: '#C0C0C0',
        border: '#4b5563',
        dryGray: '#E0D5D5'
      }
    },
  },
  plugins: [

  ],
}

