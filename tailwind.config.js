/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bone:   '#F7F6F3',
        ink:    '#111111',
        mid:    '#555555',
        rule:   '#E2E1DD',
        accent: '#A89070',
        dark:   '#0E0E0C',
      },
      fontFamily: {
        serif:  ['"Playfair Display"', 'serif'],
        sans:   ['"DM Sans"', 'sans-serif'],
        mono:   ['"DM Mono"', 'monospace'],
      },
      animation: {
        'ken-burns-1': 'kenBurns 24s ease-in-out infinite 0s',
        'ken-burns-2': 'kenBurns 24s ease-in-out infinite 8s',
        'ken-burns-3': 'kenBurns 24s ease-in-out infinite 16s',
        'count-up':    'fadeInUp 0.6s ease forwards',
        'spin-slow':   'spin 8s linear infinite',
        'pulse-dot':   'pulseDot 2s ease-in-out infinite',
        'scroll-bar':  'scrollBar 0s linear',
        'fade-in':     'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        kenBurns: {
          '0%':   { opacity: 0,    transform: 'scale(1.08) translate(0px, 0px)' },
          '5%':   { opacity: 1 },
          '30%':  { opacity: 1,    transform: 'scale(1.0) translate(-8px, -4px)' },
          '38%':  { opacity: 0,    transform: 'scale(0.98) translate(-12px, -6px)' },
          '100%': { opacity: 0,    transform: 'scale(1.08) translate(0px, 0px)' },
        },
        fadeInUp: {
          from: { opacity: 0, transform: 'translateY(16px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to:   { opacity: 1 },
        },
        pulseDot: {
          '0%, 100%': { transform: 'scale(1)', opacity: 1 },
          '50%':      { transform: 'scale(1.5)', opacity: 0.5 },
        },
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(160deg, rgba(14,14,12,0.6) 0%, rgba(14,14,12,0.25) 50%, rgba(14,14,12,0.88) 100%)',
      },
    },
  },
  plugins: [],
}
