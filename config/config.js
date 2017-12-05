const path = require('path');
const webpack = require('webpack');
// 编译css
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const config = {
  // 入口文件
  entry: {
    index: [
      path.join(__dirname, '../src/public/js/indexadd.js')
    ]
  },
  // 输出文件
  output: {
    // 输出名称 hash:5 生成 哈希值
    filename: 'public/js/[name].[hash:5].js',
    // 静态资源目录。 可以用线上地址 https://public/
    publicPath: '',
    // 输出的路径
    path: path.join(__dirname, '../build/')
  },
  // 依赖模块
  module: {
    rules: [
      {
        test: /\.(js|es|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loaders: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.css$/,
        loaders: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(png|jpg|gif)/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 500,
            outputPath: '/public/images/',
          }
        }]
      },
      {
        test: /\.(htm|html)$/i,
        use: ['html-withimg-loader']
      }
    ]
  }
}
module.exports = config;