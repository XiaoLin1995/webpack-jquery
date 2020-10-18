const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const moduleBase = require('../base/module.conf')

const styleCommon = [
  {
    loader: MiniCssExtractPlugin.loader,
    options: {
      publicPath: '../../'
    }
  },
  'css-loader',
  'postcss-loader'
]

module.exports = merge(moduleBase, {
  rules: [
    {
      test: /\.css$/,
      use: styleCommon
    },
    {
      test: /\.s(a|c)ss$/,
      use: [
        ...styleCommon,
        'sass-loader'
      ]
    },
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    }
  ]
})
