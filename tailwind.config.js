/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0A0A0C',
        navy: {
          950: '#08080A',
          900: '#0A0A0C',
          800: '#101014',
          700: '#15151B',
          600: '#1C1C24',
          500: '#24242E',
        },
        gold: {
          DEFAULT: '#E9E9EE',
          300: '#F4F4F7',
          400: '#E9E9EE',
          500: '#E9E9EE',
          600: '#B7B7C0',
        },
        flame: {
          DEFAULT: '#CDCDD5',
          400: '#DADAE1',
          500: '#CDCDD5',
          600: '#8E8E9B',
        },
        accent: {
          blue: '#98A6B8',
          violet: '#98A6B8',
          emerald: '#98A6B8',
          orange: '#98A6B8',
          pink: '#98A6B8',
          sky: '#98A6B8',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'Noto Sans Devanagari', 'system-ui', 'sans-serif'],
        body: ['Inter', 'Noto Sans Devanagari', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glowGold: '0 0 20px rgba(255, 255, 255, 0.06)',
        glowBlue: '0 0 20px rgba(255, 255, 255, 0.06)',
        glowRed: '0 0 20px rgba(255, 255, 255, 0.06)',
        card: '0 10px 40px -12px rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'radial-grid':
          'linear-gradient(rgba(148, 163, 184, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.04) 1px, transparent 1px)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'shine-sweep': {
          '0%': { transform: 'translateX(-150%) skewX(-20deg)' },
          '60%, 100%': { transform: 'translateX(250%) skewX(-20deg)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.5' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.6' },
        },
        'gradient-move': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        'shine-sweep': 'shine-sweep 3.2s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.2s ease-out infinite',
        'gradient-move': 'gradient-move 8s ease infinite',
      },
    },
  },
  plugins: [],
}
