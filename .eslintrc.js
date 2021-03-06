module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['airbnb-base'],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules: {
		'eslint-linebreak-style': ['error', 'windows'],
		indent: [2, 'spaces'],
	},
};
