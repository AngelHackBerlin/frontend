require("dotenv").config({ silent: true });

const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    app: [path.resolve("src/index.jsx")],
  },

  output: {
    path: path.resolve("build"),
    filename: "[name].[hash].js",
    chunkFilename: "[name].[chunkhash].js",
    publicPath: "/",
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },

  plugins: [
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
  ],

  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: "babel-loader" },
      { test: /\.tsx?$/, exclude: /node_modules/, loader: "babel-loader!ts-loader" },
      { test: /\.json$/, use: 'json-loader' },
    ],
  },
};
