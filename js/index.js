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
      extends: {
        color: {},
      }
    },
  };