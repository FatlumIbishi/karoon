const path = require("path");
const PrerendererWebpackPlugin = require("@prerenderer/webpack-plugin");
const PuppeteerRenderer = require("@prerenderer/renderer-puppeteer");
const CompressionPlugin = require("compression-webpack-plugin");

const productionPlugins = [
  new PrerendererWebpackPlugin({
    staticDir: path.join(__dirname, "docs"),
    routes: ["/"],
    renderer: new PuppeteerRenderer({
      renderAfterDocumentEvent: "render-event"
    })
  })
];

module.exports = {
  publicPath: "./",
  outputDir: "docs",
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      config.plugins.push(...productionPlugins);
    }
  },
  chainWebpack(config) {
    config.plugins.delete("prefetch");
    config.plugin("CompressionPlugin").use(CompressionPlugin);
  }
};
