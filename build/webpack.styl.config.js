/**
 * Created by 79653 on 2018/1/3.
 */
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
const vueConfig = require('./vue-loader.config')
var entries = {}
function readFileList(path, entries) {
  var files = fs.readdirSync(path);
  files.forEach(function (item, index) {
    var stat = fs.statSync(path + "/" + item);
    if (stat.isDirectory()) {
      //递归读取文件
      readFileList(path + "/" + item, entries)
    } else {
      entries[item.split('.')[0]] = path + "/" + item
    }
  })
}
readFileList(path.resolve(__dirname, '../src/assets/stylus/'), entries)
module.exports = {
  entry: entries,
  output: {
    path: path.resolve(__dirname, '../dist/css'),
    publicPath: '/dist/css',
    filename: '[name].min.css'
  },
  plugins: [
    new ExtractTextPlugin("[name].min.css")
  ],
  module: {
    loaders: [
      {
        test : /\.styl$/,
        loader: ExtractTextPlugin.extract('css-loader?minimize!stylus-loader')
      },
      {test: /\.(png)|(jpg)$/,loader: "url-loader?limit=0"}
    ]
  }
}
