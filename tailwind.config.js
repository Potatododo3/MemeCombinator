/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#F7B239',
          green: '#44924C',
          blue: '#00A8E8',
          dark: '#1E293B'
        },
        meme: {
          yellow: {
            light: '#FFD280',
            DEFAULT: '#F7B239',
            dark: '#D99000'
          },
          green: {
            light: '#5AB463',
            DEFAULT: '#44924C',
            dark: '#367239'
          },
          blue: {
            light: '#40BFFF',
            DEFAULT: '#00A8E8',
            dark: '#0076A3'
          }
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Impact"', '"Arial Black"', 'sans-serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 0.3s infinite',
        'pulse-glow': 'glow 2s infinite',
      },
    },
  },
  plugins: [],
};