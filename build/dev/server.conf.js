const { OUTPUT_DIR } = require('../dir.conf.js')

module.exports = {
  static: OUTPUT_DIR,
  host: '0.0.0.0', // localhost: 本地, 0.0.0.0: 非本地也能通过 ip 访问
  open: false, // 开启浏览器
  hot: true, // 开启热更新
  watchFiles: ['src/**/*.ejs']
}
