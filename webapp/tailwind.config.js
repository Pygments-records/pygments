const colors = {
  white: '#FCF6F2',
  black: '#1a1a1a',
  dark: '#000000',
  purple: '#9D63C6',
  footerBg: '#856ef7',
  darkPurple: '#1D1830',
  blue: '#65B8C4',
  skyBlue: '#00E6FF',
  electricBlue: '#4F4FFF',
  orange: '#F3934F',
  yellow: '#FFBE0B',
  transp: '#FFFFFF00',
  none: '#FFFFFF00',
  gray: '#B5B5B5',
}

const colorsListRegex = `(${Object.keys(colors).join('|')})`

module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    { pattern: new RegExp(`^bg-${colorsListRegex}`), variants: ['hover', 'hover:after'] },
    { pattern: new RegExp(`^text-${colorsListRegex}`), variants: ['hover', 'hover:after'] },
    { pattern: new RegExp(`^border-${colorsListRegex}`) },
  ],
  theme: {
    colors,
    fontFamily: {
      pygments: ['Inter'],
      heading: ['Agrandir', 'sans-serif'],
      text: ['Agrandir', 'sans-serif'],
    },
    backgroundImage: {
      'pygments-wave': "url('/public/PygmentsWaves.svg')",
    },
  },
  plugins: [],
}
