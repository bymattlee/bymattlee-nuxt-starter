const { pxToEm, fontFallbacks } = require('./tailwindUtilities.js')

module.exports = {
  mode: 'jit',
  theme: {
    screens: {
      xs: pxToEm(480),
      sm: pxToEm(768),
      md: pxToEm(1024),
      lg: pxToEm(1280),
      xl: pxToEm(1440),
      xxl: pxToEm(1800),
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      'grey-dark': {
        1: '#111',
        2: '#222',
        3: '#333',
        4: '#444',
        5: '#555',
        6: '#666',
      },
      'grey-light': {
        a: '#aaa',
        c: '#ccc',
      },
    },
    fontFamily: {
      body: ['Open Sans', ...fontFallbacks],
      heading: ['Montserrat', ...fontFallbacks],
    },
    fontSize: {
      0: '0',
      10: '1rem',
      12: '1.2rem',
      14: '1.4rem',
      16: '1.6rem',
      18: '1.8rem',
      22: '2.2rem',
      24: '2.4rem',
      28: '2.8rem',
      30: '3rem',
      36: '3.6rem',
      48: '4.8rem',
    },
    lineHeight: {
      none: '1',
      tight: '1.2',
      normal: '1.4',
      loose: '1.8',
    },
    letterSpacing: {
      tightest: '-0.1rem',
      tighter: '-0.05rem',
      tight: '-0.025rem',
      normal: '0',
      wide: '0.025rem',
      wider: '0.05rem',
      widest: '0.1rem',
    },
    spacing: {
      0: '0',
      1: '0.1rem',
      2: '0.2rem',
      3: '0.3rem',
      4: '0.4rem',
      5: '0.5rem',
      8: '0.8rem',
      10: '1rem',
      15: '1.5rem',
      20: '2rem',
      25: '2.5rem',
      30: '3rem',
      35: '3.5rem',
      40: '4rem',
      45: '4.5rem',
      50: '5rem',
      55: '5.5rem',
      60: '6rem',
      65: '6.5rem',
      70: '7rem',
      75: '7.5rem',
      80: '8rem',
      85: '8.5rem',
      90: '9rem',
      95: '9.5rem',
      100: '10rem',
      110: '11rem',
      120: '12rem',
      130: '13rem',
      140: '14rem',
      150: '15rem',
      160: '16rem',
      170: '17rem',
      180: '18rem',
      190: '19rem',
      200: '20rem',
      210: '21rem',
      220: '22rem',
      230: '23rem',
      240: '24rem',
      250: '25rem',
    },
    borderWidth: {
      DEFAULT: '0.1rem',
      0: '0',
      1: '0.1rem',
      2: '0.2rem',
      4: '0.3rem',
      6: '0.4rem',
      8: '0.8rem',
    },
    borderRadius: {
      DEFAULT: '1rem',
      none: '0',
      full: '9999rem',
    },
    zIndex: {
      auto: 'auto',
      below: '-1',
      0: '0',
      1: '10',
      2: '20',
      3: '30',
      4: '40',
      5: '50',
      6: '60',
      7: '70',
      8: '80',
      9: '90',
      10: '100',
      header: '500',
      'menu-overlay': '400',
    },
    transitionDuration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    transitionTimingFunction: {
      linear: 'linear',
      in: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      out: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      'in-out': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    },
  },
  corePlugins: {
    container: false,
    aspectRatio: false,
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
  content: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.js',
    './nuxt.config.js',
  ],
}
