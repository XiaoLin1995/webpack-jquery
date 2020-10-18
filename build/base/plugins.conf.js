const glob = require('glob')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')

const { SRC_DIR } = require('../dir.conf.js')
const stylelintConfig = require('../../.stylelintrc.js')

const htmlPlugins = (() => {
  const defaultHtmlConfig = {
    hash: true,
    minify: process.env.NODE_ENV === 'development' ? false : {
      removeComments: false, // 移除HTML中的注释
      collapseWhitespace: false, // 折叠空白区域 也就是压缩代码
      removeAttributeQuotes: false // 去除属性引号
    }
  }

  const res = []
  glob.sync(SRC_DIR + '/pages/*/index.hbs')
  .forEach(filePath => {
    const fillArr = filePath.split('/')
    const fileName = fillArr[fillArr.length - 2]
    const conf = {
      template: filePath,
      filename: fileName + '.html',
      chunks: [fileName]
    }
    
    res.push(new HtmlWebpackPlugin(Object.assign(defaultHtmlConfig, conf)))
  })
  return res
})()

module.exports = [
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    'window.$': 'jquery'
  }),
  new StylelintPlugin({
    ...stylelintConfig,
    context: 'src'
  }),
  ...htmlPlugins
]
