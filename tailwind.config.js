module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Enable dark mode toggle
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/postcss7-compat'),
    // ...existing plugins...
  ],
};
