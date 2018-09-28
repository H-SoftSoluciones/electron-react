var webpack = require('webpack')
var webpackMerge = require('webpack-merge')
const Conf = require('./config')
const baseConfig = require('./webpack.base.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = webpackMerge(baseConfig, {
  output: {
    path: Conf.OUTPUT,
    publicPath: './',
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'less-loader']
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('css/[name].bundle.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        // drop_console: true,
        drop_debugger: true
      }
    })
  ],

  target: 'electron-renderer'
})
