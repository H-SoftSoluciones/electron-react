const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const Conf = require('./config') //引入常量

module.exports = {
  context: Conf.ROOT, // 重新定义webpack上下文执行环境目录为根目录

  entry: {
    polyfills: ['babel-polyfill', 'event-source-polyfill'],
    vendor: [
      'react', 
      'react-dom',
      'mobx',
      'mobx-react',
      'lodash',
      'moment',
      'prop-types',
      'axios'
    ],
    main: Conf.ENTRY
  },

  resolve: {
    modules: ['node_modules', Conf.MODULES],
    extensions: ['.js', '.jsx', '.json']
  },

  plugins: [
    new webpack.ProvidePlugin({
      _: 'lodash',
      moment: 'moment',
      axios: 'axios'
    }),
    new HtmlWebpackPlugin({
      title: 'electron',
      filename: 'index.html',
      template: path.resolve(Conf.SRC, './assets/template/index.html'),
      hash: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      // webpack 是从右到左读取
      name: ['vendor', 'polyfills']
    })
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'eslint-loader',
        enforce: 'pre',
        exclude: Conf.MODULES,
      },
      {
        test: /\.jsx?$/,
        exclude: Conf.MODULES,
        use:  'babel-loader'
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
              limit: '10000',
              name: 'img/[name]__[hash:base64:5].[ext]',
              publicPath: '../'
          }
        },
        exclude: Conf.MODULES,
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{ loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]' }],
        exclude: Conf.MODULES,
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ],
    noParse: /node_modules\/json-schema\/lib\/validate\.js/
  }
}