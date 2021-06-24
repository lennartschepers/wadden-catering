module.exports = {
  mode: "JIT",
  important: true,
  purge: [
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
        "50-screen": "50vh",
        "75-screen": "75vh",
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
