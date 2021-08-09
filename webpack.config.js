const path = require("path");

const isProduction = process.env.NODE_ENV === "production";
const distPath = path.resolve(__dirname, "dist");

module.exports = {
  mode: isProduction ? "production" : "development",
  devtool: isProduction ? "source-map" : false,

  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: distPath,
  },
};
