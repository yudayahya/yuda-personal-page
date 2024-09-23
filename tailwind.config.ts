import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
        'custom-gray': {
          600: '#333333'
        }
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
      widests: '.25em',
    }
  },
  plugins: [],
}

export default config;
