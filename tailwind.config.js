/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Updated Primary Color
        primary: '#bd93f9', // New primary color #6750A4 #9877ba
        secondary: '#f8f8f2', // Foreground
        dark: '#282a36', // Background
        draculacurrent: '#44475a', // Current Line
        draculaselect: '#44475a', // Selection
        draculacomment: '#6272a4', // Comment
        draculacyan: '#8be9fd',
        cyanlight: '#a2c8ee',
        draculacyangrey: '#96ACB1',
        draculagreen: '#50fa7b', // Green
        draculaorange: '#ffb86c', // Orange
        draculapink: '#ff79c6', // Pink
        draculapurple: '#bd93f9', // Purple
        draculared: '#ff5555', // Red
        draculayellow: '#f1fa8c', // Yellow
        mdprimary: '#D3BCFD',
        mdonprimary: '#38265C',
        mdsecondary: '#CDC2DB',
        mdonsecondary: '#342D40', 
        mdsecondarycontainer: '#342D40',
        surface: '#DED8E0',
        onprimary: '#38265C',
        onsecondary: '#342D40',
        onsurface: '#36343A'

        /* 
        Background: #2C2C2C (slate gray)
        Primary Text: #E4E4E4 (light gray)
        Accent 1: #A8DADC (light cyan)
        Accent 2: #FFC1CC (soft pink)
        Button/CTA: #B39CD0 (lavender)
        */

      },
      fontFamily: {
        sans: ['Ubuntu', 'sans'],
      },
      fontWeight: {
        normal: '100',
        bold: '700',
      },
      boxShadow: {
        custom: '-2px 8px 0 0', // Definición de sombra
      }
    },
  },
  plugins: [],
};