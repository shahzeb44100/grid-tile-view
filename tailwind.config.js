module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        '990': '990px',
      },
      colors: {
        customGray: '#F8F8FB', // Add custom color here
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
