/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'current',
      'black': '#1d1b1b',
      'white': '#ffffff',
      'red': '#ff0000',
      'gray': '#eeeeee',
      'red': '#ff0000',
      'blue': {
        DEFAULT: '#3460c1',
        100: '#3460c1',
        80: '#5d80cd',
        60: '#85a0da',
        40: '#aebfe6',
        20: '#d6dff3',
      },
      'orange': {
        DEFAULT: '#ff9d00',
        100: '#ff9d00',
        80: '#ffb133',
        60: '#ffc466',
        40: '#ffd899',
        20: '#ffebcc',
      },
      'green': {
        DEFAULT: '#3cf37f',
        100: '#3cf37f',
        80: '#63f599',
        60: '#8af8b2',
        40: '#b1facc',
        20: '#d8fde5',
      }
    },
    extend: {},
  },
  plugins: [],
}