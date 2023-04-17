/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        add: "url('./assets/bg.png')",
        home: "url('./assets/home.jpg')",
      },
    },
  },
  plugins: [],
};

