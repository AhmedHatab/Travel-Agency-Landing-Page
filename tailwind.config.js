/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        volkhov: ['Volkhov', 'serif'],
        'google-sans': ['Noto Sans', 'sans-serif'],
      },
   boxShadow: {
        'custom-shadow': '0px 15px 30px 0px rgba(223, 105, 81, 0.3)',
      },
    },
  },
  plugins: [],
}