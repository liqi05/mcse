/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        neuehaasgroteskdisplaypro: [
          'Neue Haas Grotesk Display Pro',
          'sans-serif',
        ],
        misans: ['MiSans', 'sans-serif'],
      },
      backgroundImage: {
        sierra:
          "url('https://i.pinimg.com/originals/b8/27/f2/b827f257984a5c62173c9eb72c886b47.jpg')",
      },
      colors: {
        blue: '#0E61C7',
        yellow: '#ff4d00',
        red: '#F43F2C',
        white: '#FFFFFF',
        black: '#000000',
      },
    },
  },
  plugins: [],
};
