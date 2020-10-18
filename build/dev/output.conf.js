const { OUTPUT_DIR } = require('../dir.conf.js')

module.exports = {
  filename: '[name].bundle.js',
  path: OUTPUT_DIR,
  publicPath: './'
}
