/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom spacing values for gaps and margins
      spacing: {
        '7': '1.75rem',      // 28px
        '18': '4.5rem',      // 72px
        '22': '5.5rem',      // 88px
        '26': '6.5rem',      // 104px
        '30': '7.5rem',      // 120px
        'calculator': '2rem', // 32px - custom name for calculator spacing
      },
    },
  },
  plugins: [],
}