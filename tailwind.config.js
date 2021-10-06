module.exports = {
  purge: {
    enable: true,
    content: ["./pages/**/*.js", "./components/**/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'ocean-green': {
  DEFAULT: '#48BB78',
  '50': '#EFF9F3',
  '100': '#DDF2E6',
  '200': '#B8E4CA',
  '300': '#92D7AF',
  '400': '#6DC993',
  '500': '#48BB78',
  '600': '#389860',
  '700': '#2B7249',
  '800': '#1D4D31',
  '900': '#0F2819'
},
'santas-gray': {
  DEFAULT: '#A6A4BC',
  '50': '#E7E6ED',
  '100': '#DFDFE7',
  '200': '#D1D0DC',
  '300': '#C3C1D1',
  '400': '#B4B3C7',
  '500': '#A6A4BC',
  '600': '#8784A4',
}
      },
      animation: {
        none: 'none',
        spin: 'spin 2s linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
      },
    },
  },
  variants: {
    extend: {
      transitionProperty: ['responsive', 'motion-safe', 'motion-reduce']
    },
  },
  
  

  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};

//backgroundClip :['hover','focus']