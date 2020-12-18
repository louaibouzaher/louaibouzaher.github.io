module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["SFL", "Arial", "sans-serif"],
        sfb: ["SFB"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
