const entry = require('./base/entry.conf')
const optimization = require('./base/optimization.conf')
const resolve = require('./base/resolve.conf')
const output = require('./prod/output.conf')
const modules = require('./prod/module.conf')
const plugins = require('./prod/plugins.conf')

module.exports = {
  mode: 'production',
  entry,
  output,
  plugins,
  optimization,
  module: modules,
  resolve
}
