var webpack = require('webpack')
var webpackMerge = require('webpack-merge')
const Conf = require('./config')
const baseConfig = require('./webpack.base.config')

const { spawn } = require('child_process')
module.exports = webpackMerge(baseConfig, {
  context: Conf.ROOT,

  devtool: "source-map",

  output: {
    path: Conf.OUTPUT,
    publicPath: "/",
    filename: "[name].bundle.js"
  },

  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ],

  devServer: {
    contentBase: Conf.OUTPUT,
    stats: {
      colors: true,
      chunks: false,
      children: false
    },
    before() {
      spawn("electron", ["main/index.js"], {
        shell: true,
        env: process.env,
        stdio: "inherit"
      })
        .on("close", code => process.exit(0))
        .on("error", spawnError => console.error(spawnError));
    }
  },

  target: "electron-renderer"
});