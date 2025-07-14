/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            fontFamily: {
                'black-han': ['"Black Han Sans"', 'sans-serif'],
                'noto': ['"Noto Sans"', 'sans-serif'],
            },
            colors: {
              brown : {
                500 : '#964b00cc',
                600 : '#aa550a',
              }
              ,
              beige : '#ffedc8e6'
              ,
              mocha: {
                mousse: '#964B00'
              },
              lemon:{
                yellow: '#FFD400',
                beige: '#fff3cd'
              } 
              
            }

        },
        
    },
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    plugins: [],
}



