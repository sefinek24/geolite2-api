import js from '@eslint/js';
import globals from 'globals';

export default [
	js.configs.recommended,
	{
		languageOptions: {
			ecmaVersion: 2024,
			globals: {
				...globals.node,
				...globals.es2024,
				...globals.jest,
			},
		},
		rules: {
			'arrow-spacing': ['warn', { before: true, after: true }],
			'comma-dangle': ['warn', { arrays: 'always-multiline', objects: 'always-multiline' }],
			'comma-spacing': 'warn',
			'comma-style': 'error',
			'curly': ['error', 'multi-line', 'consistent'],
			'dot-location': ['error', 'property'],
			'handle-callback-err': 'off',
			'indent': ['warn', 'tab'],
			'keyword-spacing': 'warn',
			'max-nested-callbacks': ['error', { max: 4 }],
			'max-statements-per-line': ['error', { max: 2 }],
			'no-console': 'off',
			'no-empty': 'warn',
			'no-empty-function': 'warn',
			'no-floating-decimal': 'error',
			'no-lonely-if': 'warn',
			'no-multi-spaces': 'warn',
			'no-multiple-empty-lines': ['warn', { max: 3, maxEOF: 1, maxBOF: 0 }],
			'no-shadow': ['error', { allow: ['err', 'resolve', 'reject'] }],
			'no-trailing-spaces': 'warn',
			'no-unreachable': 'warn',
			'no-unused-vars': 'warn',
			'no-use-before-define': ['error', { functions: false, classes: true }],
			'no-var': 'error',
			'object-curly-spacing': ['warn', 'always'],
			'prefer-const': 'error',
			'quotes': ['warn', 'single'],
			'semi': ['warn', 'always'],
			'sort-vars': 'warn',
			'space-before-blocks': 'warn',
			'space-before-function-paren': ['warn', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
			'space-in-parens': 'warn',
			'space-infix-ops': 'warn',
			'space-unary-ops': 'warn',
			'spaced-comment': 'warn',
			'wrap-regex': 'warn',
			'yoda': 'error',
		},
		ignores: ['node_modules', '*min.js', '*bundle*', 'build/*', 'dist/*'],
	},
];