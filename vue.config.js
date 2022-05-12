module.exports = {
  lintOnSave: false,
  productionSourceMap: false,

  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./public/scss/_colors.scss"; @import "./public/scss/_breakpoints.scss"; @import "./public/scss/_mixins.scss";`,
      },
    },
  },

  configureWebpack: {
    performance: {
      hints: false,
      maxAssetSize: 1048576, // int (in bytes),
      maxEntrypointSize: 1048576, // int (in bytes)
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      },
    },
  },
};
