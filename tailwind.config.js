/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#b45309',
          dark: '#92400e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: { lg: '1120px' },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
