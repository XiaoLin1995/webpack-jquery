const { ROOT_DIR, ASSETS_DIR, OUTPUT_DIR } = require('../dir.conf.js')

module.exports = {
  rules: [
    {
      test: /\.html$/,
      use: [
        'html-loader'
      ]
    },
    {
      test: /\.hbs$/,
      loader: 'handlebars-loader',
      options: {
        inlineRequires: /\.(png|jpe?g|gif)/i
      }
    },
    {
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            esModule: false,
            limit: false,
            name: 'static/img/[name].[hash:7].[ext]'
          }
        }
      ]
    }
  ]
}
