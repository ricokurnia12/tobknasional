/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        primary: '#FF3A44',
        secondary: '#FFBD00',
        fontprimary: '#333333',
        fontsecondary: '#4F4F4F',
      },
      screens: {
        xs: '330px',
      },
    },
  },
  plugins: [],
};
