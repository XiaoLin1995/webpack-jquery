const glob = require('glob')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const { SRC_DIR } = require('../dir.conf.js')

const htmlPlugins = (() => {
  const res = []
  glob.sync(SRC_DIR + '/pages/*/index.ejs')
    .forEach(filePath => {
      const fillArr = filePath.split('/')
      const fileName = fillArr[fillArr.length - 2]
      const conf = {
        template: filePath,
        filename: fileName + '.html',
        chunks: [fileName]
      }

      res.push(new HtmlWebpackPlugin(conf))
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
    context: 'src'
  }),
  new ESLintPlugin({
    // context: 'src'
  }),
  ...htmlPlugins
]
