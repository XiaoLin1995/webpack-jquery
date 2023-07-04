const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  minimize: true,
  minimizer: [
    new CssMinimizerPlugin(),
    new TerserPlugin()
  ],
  moduleIds: 'named'
}
