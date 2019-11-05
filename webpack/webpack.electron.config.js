// translate main.js

var webpack = require("webpack");
const baseConfig = require("./webpack.base.config");
const Conf = require("./config");

export default {
  
  entry: './main/index.js',

  output: {
    path: Conf.OUTPUT,
    publicPath: './',
    filename: 'main.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
    
  ],

  node: {
    __dirname: false,
    __filename: false
  },

  target: 'electron-main'
}
