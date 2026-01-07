/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#2dd4bf',
          600: '#14b8a6'
        },
        surface: {
          light: '#f8fafc',
          DEFAULT: '#0f1724'
        }
      }
    },
  },
  plugins: [],
}
