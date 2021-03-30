module.exports = {
  pages: {
    index: {
      entry: "src/main.ts",
      title: "Plutus",
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/scss/variables.scss";`,
      },
    },
  },
};
