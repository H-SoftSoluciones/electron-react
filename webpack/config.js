var path = require('path')

var ROOT = path.resolve(__dirname, '../')
var SRC = path.resolve(ROOT, './src')
var OUTPUT = path.resolve(ROOT, './app')
var MODULES = path.resolve(ROOT, './node_modules')

// 入口文件
var ENTRY = path.resolve(SRC, './index')

var PORT = 3006

var INCLUDE = [SRC]

module.exports = {
  ROOT,
  SRC,
  OUTPUT,
  MODULES,
  ENTRY,
  PORT,
  INCLUDE
}

