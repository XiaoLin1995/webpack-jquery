const { OUTPUT_DIR } = require('../dir.conf.js')

module.exports = {
  contentBase: OUTPUT_DIR,
  publicPath: '/',
  host: '0.0.0.0', // localhost: 本地, 0.0.0.0: 非本地也能通过 ip 访问
  port: '8090',
  useLocalIp: true, // 地址是否显示为本机网络的 IP 地址
  open: false, // 开启浏览器
  // stats: errors-only, // errors-only: 只打印错误
  hot: true, // 开启热更新
  overlay: {
    warnings: true,
    errors: true
  }
}
