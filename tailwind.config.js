module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          pale: '#26A69A',
        }
      },
      height: {
          four: '40vh',
          five: '50vh',   
          six: "60vh", 
          seven: '70vh',
          eight: '80vh',
          nine: '90vh',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    },
  },
  plugins: [],
}
