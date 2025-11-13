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
          honey: '#EAB308',
          forest: '#166534',
          earth: '#78350F',
          cream: '#FAF7F0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
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
