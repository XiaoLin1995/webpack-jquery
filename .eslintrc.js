module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'standard'
  ],
  globals: {
    // Put things like jQuery, etc
    jQuery: true,
    $: true,
  },
  rules: {},
  parserOptions: {
    parser: 'babel-eslint',
  },
}
