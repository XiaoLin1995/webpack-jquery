const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  minimize: true,
  minimizer: [
    new CssMinimizerPlugin({
      minimizerOptions: {
        preset: [
          'default',
          {
            discardComments: { removeAll: true }
          }
        ]
      }
    }),
    new UglifyJsPlugin()
  ],
  splitChunks: {
    chunks: 'all',
    cacheGroups: {
      vendors: {
        test: (module) => {
          return /[\\/]node_modules[\\/]|[\\/]vendors$/.test(module.context)
        },
        name: 'vendors',
        priority: -10
      },
      commons: {
        chunks: 'initial',
        name: 'commons',
        minChunks: 2,
        minSize: 0,
        priority: -20
      }
    }
  }
}
