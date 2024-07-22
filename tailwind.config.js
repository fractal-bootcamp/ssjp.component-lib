/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'leaf': {
          DEFAULT: '#4CAF50',
          light: '#81C784',
          dark: '#388E3C',
        },
        'sky': {
          DEFAULT: '#87CEEB',
          light: '#ADE0EE',
          dark: '#5CACEE',
        },
        'sun': {
          DEFAULT: '#FFD700',
          light: '#FFE54C',
          dark: '#FFC000',
        },
        'bark': {
          DEFAULT: '#8B4513',
          light: '#A0522D',
          dark: '#693300',
        },
        'cloud': {
          DEFAULT: '#F0F8FF',
          dark: '#E1EBEE',
        },
        'tan': {
          DEFAULT: '#D2B48C',
          light: '#DFC8A8',
          dark: '#C19A6B',
        },
        'wildflower': {
          DEFAULT: '#9370DB',
          light: '#AB82FF',
          dark: '#7A67EE',
        },
        'moss': {
          DEFAULT: '#739E73',
          light: '#8FBC8F',
          dark: '#5E8C5E',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'disabled'],
      textColor: ['active', 'disabled'],
      opacity: ['disabled'],
    },
  },
  plugins: [],
};
