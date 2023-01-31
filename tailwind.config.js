/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        homepage: 'url(/images/cover.jpg)',
        macaroons:
          'url(https://images.pexels.com/photos/4346320/pexels-photo-4346320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        summer:
          'url(https://images.pexels.com/photos/314780/pexels-photo-314780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        autumn:
          'url(https://images.pexels.com/photos/5429056/pexels-photo-5429056.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        winter:
          'url(https://images.pexels.com/photos/6276196/pexels-photo-6276196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
      },
      colors: {
        neuwhite: {
          100: '#ecf0f3',
          200: '#d1d9e6',
        },
      },
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
