module.exports = {
  important: true,
  theme: {
    extend: {
      colors: {
        brown: "#c5ab6b",
        darkBrown: "#131313",
      },
      height: {
        "50-screen": "50vh",
        "75-screen": "75vh",
        "96": "24rem",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover"],
  },
};
