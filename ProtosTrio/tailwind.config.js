/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          dark:   '#1A5C4E',
          mid:    '#1F6F5F',
          light:  '#2FA084',
          bright: '#3BBFA0',
          glow:   '#4BDFB8',
          muted:  '#E0FFF5',
          faint:  '#A8FFE4',
        },
        surface: {
          950: '#010806',
          900: '#050F0C',
          800: '#0A1C17',
          700: '#102820',
          600: '#183D2E',
        },
      },
      animation: {
        'float':        'float 7s ease-in-out infinite',
        'float-slow':   'float 11s ease-in-out infinite',
        'float-fast':   'float 5s ease-in-out infinite',
        'pulse-glow':   'pulseGlow 3s ease-in-out infinite',
        'gradient-x':   'gradientX 8s ease infinite',
        'orbit':        'orbit 22s linear infinite',
        'orbit-rev':    'orbitRev 18s linear infinite',
        'fade-up':      'fadeUp 0.7s ease forwards',
        'shimmer':      'shimmer 2.5s linear infinite',
        'scan':         'scan 4s ease-in-out infinite',
        'blink':        'blink 1.2s step-end infinite',
        'morph':        'morph 10s ease-in-out infinite',
      },
      keyframes: {
        float:      { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-18px)' } },
        pulseGlow:  { '0%,100%': { opacity: '0.35' }, '50%': { opacity: '0.9' } },
        gradientX:  { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
        orbit:      { '0%': { transform: 'rotate(0deg) translateX(90px) rotate(0deg)' }, '100%': { transform: 'rotate(360deg) translateX(90px) rotate(-360deg)' } },
        orbitRev:   { '0%': { transform: 'rotate(0deg) translateX(60px) rotate(0deg)' }, '100%': { transform: 'rotate(-360deg) translateX(60px) rotate(360deg)' } },
        fadeUp:     { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        shimmer:    { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        scan:       { '0%,100%': { transform: 'translateY(-100%)' }, '50%': { transform: 'translateY(400%)' } },
        blink:      { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        morph:      { '0%,100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' }, '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' } },
      },
      backgroundSize: { '300%': '300%', '200%': '200%' },
    },
  },
  plugins: [],
};
