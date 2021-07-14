module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        300: "75rem" /*1200px*/,
        265: "66.25rem" /*1060px*/,
        250: "62.5rem" /*1000px*/,
      },
      height: {
        157.5: "39.375rem" /*630px*/,
        132.5: "33.125rem" /*530px*/,
        105: "26.25rem" /*420px*/,
      },
    },
  },
  variants: {
    extend: {
      scale: ["active", "group-hover"], 
    },
  },
  plugins: [],
};

// 0.25 - 0.0625rem - 1px
