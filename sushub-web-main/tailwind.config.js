/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      cursor: {
        // Custom circular cursor using an SVG via base64
        'cursor-circular': 'url("/cursor/custom-cursor.svg") 12 12, pointer',
      },
      fontSize:{
        'fold-title':'',
        'fold-subtitle': '',
        'fold-text': '',
        'fold-subtext': '',
        'mobile-title': '',
        'mobile-subtitle': '',
        'mobile-text':'',
        'mobile-subtext':'',
        'tab-title':'',
        'tab-subtitle': '',
        'tab-text': '',
        'tab-subtext': '',
        'desktop-title': '',
        'desktop-subtitle': '',
        'desktop-text':'',
        'desktop-subtext':'',
      },
      screens:{
        'xs':'320px',
        's':'480px'
      }
    },
  },
  plugins: [nextui()],
}
