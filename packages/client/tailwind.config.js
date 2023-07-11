/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        NanumSquare: ['NanumSquare', 'sans-serif'],
        BMJua: ['BMJua', 'sans-serif'],
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
        24: '1.5rem',
      },
    },
  },
  plugins: [],
};
