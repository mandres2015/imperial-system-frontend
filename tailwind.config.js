/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'light-black': '#555',
        main: '#1B4D89',
        secondary: '#6DB784',
      },
      screens: {},
      maxWidth: {
        200: '200px',
      },
    },
  },
  plugins: [],
}
