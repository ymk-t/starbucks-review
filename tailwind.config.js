/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    boxShadow: {
      outline: '0 0 0 3px rgba(0,225,0,0.5)',
      focus: '0 0 0 3px rgba(0,225,0,0.5)'
    }
  },
  transformOrigin: {
    // defaults to these values
    t: 'top',
    tr: 'top right',
    r: 'right',
    br: 'bottom right',
    b: 'bottom',
    bl: 'bottom left',
    l: 'left',
    tl: 'top left'
  },
  translate: {
    // defaults to {}
    '1/2': '50%',
    full: '100%',
    'right-up': ['100%', '-100%'],
    '3d': ['40px', '-60px', '-130px']
  },
  scale: {
    // defaults to {}
    '90': '0.9',
    '100': '1',
    '110': '1.1',
    '-100': '-1',
    'stretched-x': ['2', '0.5'],
    'stretched-y': ['0.5', '2'],
    '3d': ['0.5', '1', '2']
  },
  rotate: {
    // defaults to {}
    '90': '90deg',
    '180': '180deg',
    '270': '270deg',
    '3d': ['0', '1', '0.5', '45deg']
  },
  skew: {
    // defaults to {}
    '-5': '-5deg',
    '5': '5deg'
  },
  perspective: {
    // defaults to {}
    none: 'none',
    '250': '250px',
    '500': '500px',
    '750': '750px',
    '1000': '1000px'
  },
  perspectiveOrigin: {
    // defaults to these values
    t: 'top',
    tr: 'top right',
    r: 'right',
    br: 'bottom right',
    b: 'bottom',
    bl: 'bottom left',
    l: 'left',
    tl: 'top left'
  },
  variants: {
    // all the following default to ['responsive']
    transform: ['responsive', 'hover'],
    transformOrigin: ['responsive'],
    translate: ['responsive', 'hover'],
    scale: ['responsive', 'hover'],
    rotate: ['responsive'],
    skew: ['responsive'],
    perspective: ['responsive'],
    perspectiveOrigin: ['responsive'],
    transformStyle: ['responsive'],
    backfaceVisibility: ['responsive'],
    transformBox: ['responsive']
  },
  plugins: [
    require('tailwindcss-transforms')({
      '3d': false // defaults to false
    })
  ]
}
