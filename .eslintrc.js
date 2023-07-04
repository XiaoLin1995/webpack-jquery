module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    // Put things like jQuery, etc
    jQuery: true,
    $: true
  },
  extends: [
    'standard'
  ],
  plugins: ['html'],
  settings: {
    'html/html-extensions': ['.html', '.ejs']
  },
  rules: {},
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      presets: ['@babel/preset-env']
    }
  }
}
