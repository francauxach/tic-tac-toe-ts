module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'gochi': ['Gochi Hand']
      },
      height: {
        '26': '6.5rem'
      },
      width: {
        '26': '6.5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
