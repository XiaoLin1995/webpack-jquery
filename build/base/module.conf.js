const { ASSETS_DIR, ALIAS_DIR } = require('../dir.conf.js')

module.exports = {
  rules: [
    {
      test: /\.ejs$/i,
      use: [
        {
          loader: 'html-loader'
        },
        {
          loader: 'ejs-wp-loader',
          options: {
            alias: ALIAS_DIR
          }
        }
      ]
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
      generator: {
        filename: ASSETS_DIR + '/img/[name].[hash:7].[ext]'
      }
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
      generator: {
        filename: ASSETS_DIR + '/fonts/[name].[hash:7].[ext]'
      }
    }
  ]
}
