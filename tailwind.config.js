module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  presets: [require("@kawalcovid19/tailwind-preset-wbw")],
  theme: {
    extend: {
      colors: {
        silacak: {
          50: "#eef5f4",
          100: "#ccf0f1",
          200: "#92e8df",
          300: "#57cfbb",
          400: "#1fb18f",
          500: "#159765",
          600: "#13814e",
          700: "#13643e",
          800: "#0f442f",
          900: "#0a2924",
        },
      },
      boxShadow: {
        floating: "0px -4px 16px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
