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
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: 'defaults' }]
          ]
        }
      }
    }
  ]
})
