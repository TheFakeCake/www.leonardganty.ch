const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin')

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
    fontFamily: {
      serif: [
        'Lora',
        'ui-serif',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif',
      ],
    },
    extend: {
      keyframes: {
        fadeInFromInvisible: {
          from: {
            visibility: 'visible',
            opacity: 0,
          },
          to: {
            opacity: 1,
          }
        },
        fadeOutToInvisible: {
          from: {
            opacity: 1,
          },
          to: {
            opacity: 0,
            visibility: 'hidden',
          }
        },
      },
      animation: {
        'fade-in-from-invisible': 'fadeInFromInvisible 200ms linear both',
        'fade-out-to-invisible': 'fadeOutToInvisible 200ms linear both',
      },
      colors: {
        gray: colors.warmGray,
        primary: {
          light: colors.red['700'],
          DEFAULT: colors.red['800'],
          dark: '#810e11',
        },
      },
      height: {
        112: '28rem',
        128: '32rem',
        144: '36rem',
        160: '40rem',
        192: '48rem',
      },
      inset: {
        '13': '3.25rem',
      },
      zIndex: {
        max: '9999',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addVariant, e }) {
      addVariant('focus-not-visible', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`focus-not-visible${separator}${className}`)}:focus:not(:focus-visible)`
        })
      })
    })
  ],
};
