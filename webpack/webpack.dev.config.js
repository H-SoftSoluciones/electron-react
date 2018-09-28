var webpack = require('webpack')
var webpackMerge = require('webpack-merge')
const Conf = require('./config')
const baseConfig = require('./webpack.base.config')

const { spawn } = require('child_process')
module.exports = webpackMerge(baseConfig, {
  context: Conf.ROOT, // 重新定义webpack上下文执行环境目录为根目录

  devtool: 'source-map',

  output: {
    path: Conf.OUTPUT,
    publicPath: '/',
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      { 
        enforce: "pre", 
        test: /\.js$/, 
        loader: "source-map-loader" 
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
          test: /\.less$/,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],

  devServer: {
    contentBase: Conf.OUTPUT,
    stats: {
      colors: true,
      chunks: false,
      children: false
    },
    setup() {
      spawn(
        'electron',
        ['main/index.js'],
        { shell: true, env: process.env, stdio: 'inherit' }
      )
      .on('close', code => process.exit(0))
      .on('error', spawnError => console.error(spawnError));
    }
  },

  target: 'electron-renderer'
})

// module.exports = webpackMerge(WebpackBaseCfong, {
//   context: Conf.ROOT, // 重新定义webpack上下文执行环境目录为根目录

//   output: {
//     path: Conf.OUTPUT,
//     publicPath: '/',
//     filename: '[name].bundle.js'
//   },

//   devtool: 'source-map',
//   module: {
//     rules: [
//       { 
//         enforce: "pre", 
//         test: /\.js$/, 
//         loader: "source-map-loader" 
//       }, {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader']
//       }, {
//           test: /\.less$/,
//           use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
//       }
//     ]
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoEmitOnErrorsPlugin(),
//     new webpack.DefinePlugin({
//       'process.env.NODE_ENV': JSON.stringify('development')
//     })
//   ],
//   devServer: {
//     contentBase: Conf.OUTPUT,
//     stats: {
//       colors: true,
//       chunks: false,
//       children: false
//     },
//     setup() {
//       spawn(
//         'electron',
//         ['main/index.js'],
//         { shell: true, env: process.env, stdio: 'inherit' }
//       )
//       .on('close', code => process.exit(0))
//       .on('error', spawnError => console.error(spawnError));
//     }
//   }
// })