const { merge } = require('webpack-merge')
const moduleBase = require('../base/module.conf')

module.exports = merge(moduleBase, {
  rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    },
    {
      test: /\.s(a|c)ss$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    }
  ]
})
