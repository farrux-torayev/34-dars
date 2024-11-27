tailwind.config = {
  theme: {
    container: {
      center: true,
      width: {
        DEFAULT: "100%",
        t: "600px",
        lt: "960px",
        d: "1200px",
      },
      padding: {
        DEFAULT: "20px",
      }
    },
    screens: {
      t: "640px",
      lt: "1000px",
      d: "1240px",
    },
    extend: {
      colors: {
        dark_gray: "#391400A3",
        redish: "#EF6D58",
        pink: "#B550F8",

        text_black: "#391400",
        bg_cream: "#fdf0e9",
        bg_dark_blue: "#28293e",
      },
    }
  },
};