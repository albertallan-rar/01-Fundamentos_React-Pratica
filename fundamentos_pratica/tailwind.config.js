/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue_dark: "#1E6F9F",
        blue: "#4ea8de",
        purple_dark: "#5e60ce",
        purple: "#8284FA",
        danger: "#E25858",
        custom_gray: {
          700: "#0D0D0D",
          600: "#1A1A1A",
          500: "#262626",
          400: "#333333",
          300: "#808080",
          200: "#D9D9D9",
          100: "#F2f2f2",
        },
      },
    },
  },
  plugins: [],
};
