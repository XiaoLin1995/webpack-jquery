module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
  plugins: [
		'stylelint-order',
    'stylelint-scss'
	],
  rules: {
    // stylelint-scss recommended rules
    "at-rule-no-unknown" : null , 
    "scss/at-rule-no-unknown" : true ,
  }
}
