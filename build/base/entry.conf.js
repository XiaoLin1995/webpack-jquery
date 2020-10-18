const glob = require('glob')
const { SRC_DIR } = require('../dir.conf.js')

const entries = (() => {
  const map = {}
  glob.sync(SRC_DIR + '/pages/*/index.js')
  .forEach(filePath => {
    const fillArr = filePath.split('/')
    const fileName = fillArr[fillArr.length - 2]
    map[fileName] = filePath
  })
  return map
})()

module.exports = entries
