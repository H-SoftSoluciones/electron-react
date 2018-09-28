// translate main.js

import webpack from 'webpack'
import baseConfig from './webpack.base.config'
import Conf from './config' //引入常量

export default {
  ...baseConfig,

  entry: './main/index.js',

  output: {
    path: Conf.OUTPUT,
    publicPath: './',
    filename: 'main.js'
  },

  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compressor: {
    //     warnings: false
    //   }
    // }),
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
