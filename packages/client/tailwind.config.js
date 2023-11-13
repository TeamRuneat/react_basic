/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        NanumSquare: ['NanumSquare', 'sans-serif'],
        Archivo: ['Archivo', 'sans-serif'],
        BMJua: ['BMJua', 'sans-serif'],
      },
      backgroundImage: {
        banner: 'url(\'../public/images/banner.jpg\')',
      },
      fontSize: {
        10: '0.625rem',
        11: '0.688rem',
        12: '0.75rem',
        14: '0.875rem',
        15: '0.938rem',
        16: '1rem',
        18: '1.125rem',
        20: '1.25rem',
        22: '1.375rem',
        24: '1.5rem',
        26: '1.625rem',
        28: '1.75rem'
      },
      colors: {
        main: '#009389',
        sub: '#00A89C',
        darkgray: '#777777',
        dim: '#eeeeee',
      },
      animation: {
        bounce1: 'bounce 2s ease-in-out infinite ',
        bounce2: 'bounce 2s 0.5s ease-in-out infinite ',
        bounce3: 'bounce 2s 1s ease-in-out infinite ',
        bounce4: 'slider 1s',
      },
      keyframes: {
        bounce: {
          '0%, 20%': { trasnsform: 'translate(0,0)' },
          '50%': {
            transform: 'translateY(-150%)',
          },
          '85%, 100%': {
            trasnsform: 'translate(0,0)',
          },
        },
        slider: {
          '0%': {
            transform: 'translateY(-30%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
