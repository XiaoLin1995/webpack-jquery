const entry = require('./base/entry.conf')
const optimization = require('./base/optimization.conf')
const resolve = require('./base/resolve.conf')
const output = require('./dev/output.conf')
const modules = require('./dev/module.conf')
const plugins = require('./dev/plugins.conf')
const devServer = require('./dev/server.conf')

module.exports = {
  mode: 'development',
  devServer,
  entry,
  output,
  plugins,
  optimization,
  module: modules,
  resolve
}
