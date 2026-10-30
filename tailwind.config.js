/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        altimate: {
          bg: '#080807',
          'bg-secondary': '#11100E',
          'bg-card': '#141311',
          primary: '#F4F0E8',
          secondary: '#B8B0A3',
          gold: '#D6B779',
          'gold-light': '#E8CF9B',
          'gold-dark': '#B59458',
          bronze: '#986A3C',
          amber: '#C4823F',
          darkbronze: '#1E1812',
          mutedteal: '#1B2C2D',
          darkgreen: '#121F1A',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'float-reverse': 'float-reverse 15s ease-in-out infinite',
        'spin-slow': 'spin 22s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(0.5deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-0.5deg)' },
        }
      }
    },
  },
  plugins: [],
}

