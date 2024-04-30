/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom-font': ['Inter', 'sans-serif'],
      }
    }, colors: {
      'button-bg': '#150050',
      'white-text': '#FFFFFF'
    }
  },
  plugins: [],
}

