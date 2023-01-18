/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        form: '10px 10px 10px rgba(209, 217, 230, 1.0), -10px -10px 10px rgba(255,255,255, 1.0)',
        focus:
          'inset 4px 4px 4px rgba(209, 217, 230, 1.0), inset -4px -4px 4px rgba(255,255,255, 1.0)',
        input:
          'inset 4px 4px 8px rgba(209, 217, 230, 1.0), inset -4px -4px 16px rgba(255,255,255, 1.0)',
      },
    },
  },
  plugins: [],
};
