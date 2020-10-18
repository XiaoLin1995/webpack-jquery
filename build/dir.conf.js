const path = require('path')

const ROOT_DIR = path.resolve(__dirname, '../')
const SRC_DIR = path.resolve(ROOT_DIR, 'src')
module.exports = {
  ROOT_DIR, // 根目录
  SRC_DIR, // 开发目录
  ASSETS_DIR: 'static', // 打包出的静态资源主目录名
  OUTPUT_DIR: path.resolve(ROOT_DIR, 'dist'), // 打包导出目录
  VENDORS_DIR:  path.resolve(ROOT_DIR, 'vendors') // 不能 npm 管理的第三方包目录
}
