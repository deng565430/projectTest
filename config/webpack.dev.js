const webpack = require('webpack');
// 编译css
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// 处理html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 监控浏览器自动更新
const LiveReloadPlugin = require('webpack-livereload-plugin');

const config = require('./config');

const Devwebpack = Object.assign({}, config, {
  plugins: [
    // DefinePlugin 允许创建一个在编译时可以配置的全局常量
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"dev"'
      }
    }),
    // 监听文件变化
    new LiveReloadPlugin({
      appendScriptTag: true
    }),
    // 抽取公共模块
    new webpack.optimize.CommonsChunkPlugin({
      // 增加缓存
      names: ['vendor', 'manifest'],
      filename: 'public/js/[name].[hash:5].min.js',
      minChunks: 2
    }),
    // 分离css之后的路径
    new ExtractTextPlugin('public/css/[name]-[hash:5].css'),
   // 生成html文件
    new HtmlWebpackPlugin({
      title: 'Custom template',
      filename: './views/index.ejs',
      template: 'src/views/index.ejs',
      inject: true,
      hash: true,
      cache: true
    })
  ]
})

module.exports = Devwebpack;