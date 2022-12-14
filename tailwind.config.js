module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./layouts/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1em",
      },
    },
    fontFamily: {
      sans: ["PT Sans"],
      serif: ["PT Serif"],
    },
    extend: {
      colors: {
        brown: "#c5ab6b",
        darkBrown: "#131313",
      },
      height: {
        96: "24rem",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover"],
  },
  plugins: [
    require("@tailwindcss/forms"),
    require('@tailwindcss/typography')
  ],
};
