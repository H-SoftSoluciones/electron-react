var webpack = require("webpack");
var webpackMerge = require("webpack-merge");
const Conf = require("./config");
const baseConfig = require("./webpack.base.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = webpackMerge(baseConfig, {
  output: {
    path: Conf.OUTPUT,
    publicPath: "./",
    filename: "[name].bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader"
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin("css/[name].bundle.css"),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ],
  optimization: {
    minimize: false
  },
  target: "electron-renderer"
});
