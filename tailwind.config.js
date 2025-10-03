/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/views/**/*.ejs", 
    "./views/**/*.ejs",    
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-out forwards',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scroll-fade': {
          opacity: '0'
        }
      })
    }
  ],
}