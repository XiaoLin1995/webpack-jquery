const { ASSETS_DIR, OUTPUT_DIR } = require('../dir.conf.js')

module.exports = {
  filename: `${ASSETS_DIR}/js/[name].[hash].js`,
  path: OUTPUT_DIR,
  clean: true
}
