/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      colors: {
        luxury: {
          50: '#faf7ff',
          100: '#f4edff',
          200: '#ebdcff',
          300: '#dcc0ff',
          400: '#c699ff',
          500: '#b366ff',
          600: '#a342ff',
          700: '#932be5',
          800: '#7b25c0',
          900: '#66209e',
          950: '#44106b',
        },
        mystic: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
        divine: {
          50: '#f8f6ff',
          100: '#f1ecff',
          200: '#e5dcff',
          300: '#d1bdff',
          400: '#b895ff',
          500: '#9c6cff',
          600: '#8b4ff7',
          700: '#7938e3',
          800: '#6631bf',
          900: '#552a9c',
          950: '#351869',
        },
        gold: {
          50: '#fffef0',
          100: '#fffcdb',
          200: '#fff8b6',
          300: '#fff186',
          400: '#ffe355',
          500: '#ffd320',
          600: '#f5b800',
          700: '#cc9500',
          800: '#a37402',
          900: '#865f08',
          950: '#4f3600',
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'sparkle': 'sparkle 2s linear infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(179, 102, 255, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(179, 102, 255, 0.8), 0 0 30px rgba(179, 102, 255, 0.6)' }
        },
        sparkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(0.8)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'mystic-gradient': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'divine-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(255, 211, 32, 0.4), transparent)',
      },
      boxShadow: {
        'luxury': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'mystic': '0 0 20px rgba(179, 102, 255, 0.3)',
        'divine': '0 0 30px rgba(156, 108, 255, 0.4)',
        'gold': '0 0 25px rgba(245, 184, 0, 0.5)',
      }
    },
  },
  plugins: [],
};
