/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          pink: '#cd80d9',
          purple: '#897fd9',
          green: '#10b981',
          black: '#000000',
          dark: '#0a0a0f',
          card: '#111118',
          border: '#1a1a2e',
        },
      },
    },
  },
  plugins: [],
};
