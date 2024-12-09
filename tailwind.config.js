/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      animation: {
        move: 'move 5s linear infinite',
      },
      keyframes: {
        move: {
          '100%': { transform: 'translate3d(0, 0, 1px) rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
