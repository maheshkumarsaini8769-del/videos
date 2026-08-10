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
          DEFAULT: '#FFC700',
          300: '#FFE27A',
          400: '#FFD21E',
          500: '#FFC700',
          600: '#DCA400',
        },
        flame: {
          DEFAULT: '#E30613',
          300: '#FF8A7A',
          400: '#FF4D4D',
          500: '#E30613',
          600: '#C0000D',
          700: '#9E000B',
        },
        accent: {
          blue: '#FFC700',
          violet: '#FFC700',
          emerald: '#FFC700',
          orange: '#FFC700',
          pink: '#FFC700',
          sky: '#FFC700',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'Noto Sans Devanagari', 'system-ui', 'sans-serif'],
        body: ['Inter', 'Noto Sans Devanagari', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glowGold: '0 0 20px rgba(255, 199, 0, 0.15)',
        glowBlue: '0 0 20px rgba(227, 6, 19, 0.25)',
        glowRed: '0 0 20px rgba(227, 6, 19, 0.25)',
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
        'ring-shake': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '15%': { transform: 'rotate(-20deg)' },
          '30%': { transform: 'rotate(16deg)' },
          '45%': { transform: 'rotate(-12deg)' },
          '60%': { transform: 'rotate(8deg)' },
          '75%': { transform: 'rotate(-4deg)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        'shine-sweep': 'shine-sweep 3.2s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.2s ease-out infinite',
        'gradient-move': 'gradient-move 8s ease infinite',
        'ring-shake': 'ring-shake 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
