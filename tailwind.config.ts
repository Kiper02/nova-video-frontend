import { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js, ts, jsx, tsx, mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        secondary: '#f1c40f',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      spacing: {
      },
      borderRadius: {
      },
    },
  },
  plugins: [],
};

module.exports = config;
