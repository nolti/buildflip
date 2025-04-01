/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Updated Primary Color
        primary: '#6750A4', // New primary color
        secondary: '#f8f8f2', // Foreground
        dark: '#282a36', // Background
        'dracula-current': '#44475a', // Current Line
        'dracula-selection': '#44475a', // Selection
        'dracula-comment': '#6272a4', // Comment
        'dracula-cyan': '#8be9fd', // Cyan
        'dracula-green': '#50fa7b', // Green
        'dracula-orange': '#ffb86c', // Orange
        'dracula-pink': '#ff79c6', // Pink
        'dracula-purple': '#bd93f9', // Purple
        'dracula-red': '#ff5555', // Red
        'dracula-yellow': '#f1fa8c', // Yellow
      },
      fontFamily: {
        sans: ['Montserrat', 'sans'],
      },
      fontWeight: {
        normal: '100',
        bold: '700',
      },
    },
  },
  plugins: [],
};