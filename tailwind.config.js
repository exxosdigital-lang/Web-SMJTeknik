/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0a1d30',
          900: '#102b46',
          800: '#183d60',
          700: '#245477',
        },
        orange: {
          500: '#e87932',
          600: '#d96520',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 16px 40px rgba(16, 43, 70, 0.08)',
      },
    },
  },
  plugins: [],
}
