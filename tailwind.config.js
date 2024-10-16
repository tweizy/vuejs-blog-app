/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', // Include Vue and JavaScript files for Tailwind to purge unused styles
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
