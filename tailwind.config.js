/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': {
          900: '#000000',
          600: '#111',
          300: '#888'
        },
        'custom-pink': {
          600: '#C23AAE'
        },
      },
    },
    letterSpacing: {
      tightest: '-.2em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    }
  },
  plugins: [],
}
