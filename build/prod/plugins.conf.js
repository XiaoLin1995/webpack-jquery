const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const pluginsBase = require('../base/plugins.conf')
const { ASSETS_DIR } = require('../dir.conf.js')

module.exports = [
  ...pluginsBase,
  new MiniCssExtractPlugin({
    filename: `${ASSETS_DIR}/css/[name].[hash].css`
  })
]
