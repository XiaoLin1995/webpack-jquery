const webpack = require('webpack')
const pluginsBase = require('../base/plugins.conf')

module.exports = [
  ...pluginsBase,
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin()
]
