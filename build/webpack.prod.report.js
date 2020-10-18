const { merge } = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const webpackConfigProd = require('./webpack.prod.conf')

module.exports = merge(webpackConfigProd, {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
})
