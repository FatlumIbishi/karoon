const path = require("path");
const PrerenderSpaPlugin = require("prerender-spa-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, "docs"),
    routes: ["/"],
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      inject: {},
      headless: true,
      renderAfterDocumentEvent: "render-event",
    }),
  }),
];

module.exports = {
  publicPath: "./",
  outputDir: "docs",
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false,
    },
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      config.plugins.push(...productionPlugins);
    }
  },
  chainWebpack(config) {
    config.plugins.delete("prefetch");
    config.plugin("CompressionPlugin").use(CompressionPlugin);
  },
};
