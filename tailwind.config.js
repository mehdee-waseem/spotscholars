/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#1f299c', 50: '#eef0fb', 100: '#d9ddf6', 700: '#1a2283', 800: '#151b69', 900: '#0f1450' },
        orange: { DEFAULT: '#ff851b', 50: '#fff4ea', 100: '#ffe4cc', 600: '#e9700a' }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Sora"', '"Plus Jakarta Sans"', 'sans-serif']
      },
      boxShadow: { card: '0 1px 2px rgba(15,20,80,.06), 0 8px 24px -12px rgba(15,20,80,.18)' }
    }
  },
  plugins: []
};
