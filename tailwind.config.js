const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora', ...defaultTheme.fontFamily.serif],
      },
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
        primary: {
          light: colors.red['700'],
          DEFAULT: colors.red['800'],
          dark: '#810e11',
        },
        tapHighlight: 'rgba(129 14 17 / 20%)',
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
      margin: {
        'footer-wave-height': 'var(--footer-wave-height)',
      },
      padding: {
        'footer-wave-height': 'var(--footer-wave-height)',
      },
      zIndex: {
        max: '9999',
      },
    },
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
