module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './lib/**/*.{js,ts,jsx,tsx}',
    ],
    safelist: ['ol-attribution', 'ol-control'], // can't use regex in JIT mode
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        112: '28rem',
        128: '32rem',
        144: '36rem',
        160: '40rem',
        192: '48rem',
      },
      zIndex: {
        max: '9999',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
