const { SRC_DIR, VENDORS_DIR, LAYOUTS_DIR, INCLUDES_DIR } = require('../dir.conf.js')

module.exports = {
  extensions: ['.js'],
  alias: {
    '@': SRC_DIR,
    'vendors': VENDORS_DIR
  }
}
