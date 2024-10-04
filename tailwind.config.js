/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#FFF5E1',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(90deg, #FFAB09, #F88419, #F86919)',
        'footer-gradient': 'linear-gradient(90deg, #E9A44B 0%, #F3B86C 50%, #E1C275 100%)',
      },
      textColor: {
        'primary-gradient': 'text-transparent bg-clip-text bg-primary-gradient',
      },
    },
  },
  plugins: [],
}
