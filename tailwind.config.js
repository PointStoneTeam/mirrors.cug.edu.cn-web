module.exports = {
  purge: ['./src/components/**/*.js', './src/pages/**/*.js'],
  theme: {
    extend: {
      inset:{
        '16': '4rem',
        '12': '3rem',
      },
      colors: {
        'apple-gray': '#f5f5f7',
      }
    },
    
  },
  variants: {},
  plugins: [],
}
