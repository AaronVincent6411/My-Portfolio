/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {fontSize: {
      '3xl': ['32px'],
      '4xl': ['36px'],
    },
    spacing: {
      '84': '21rem',
      '95': '25rem',
      '100':'30rem',
      '115':'45rem',
      '120':'50rem',
      '130':'60rem'
    }
  },
  },
  plugins: [],
}