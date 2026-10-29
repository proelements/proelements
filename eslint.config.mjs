import { fixupPluginRules } from '@eslint/compat';
import wordpress from '@wordpress/eslint-plugin';
import noJquery from 'eslint-plugin-no-jquery';
import playwright from 'eslint-plugin-playwright';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const playwrightTestFiles = [
	'tests/playwright/**/*.ts',
	'tests/elements-regression/**/*.ts',
];

const customGlobals = {
	wp: 'writable',
	window: 'writable',
	document: 'writable',
	_: 'readonly',
	jQuery: 'readonly',
	JSON: 'readonly',
	elementorFrontend: 'writable',
	require: 'writable',
	elementor: 'writable',
	DialogsManager: 'writable',
	module: 'writable',
	React: 'writable',
	PropTypes: 'writable',
	__: 'writable',
};

const customRules = {
	'@typescript-eslint/no-unused-vars': [ 'error', { ignoreRestSiblings: true, caughtErrors: 'none' } ],
	'import/default': 'error',
	'no-var': 'off',
	'wrap-iife': 'off',
	'computed-property-spacing': [ 'error', 'always' ],
	'comma-dangle': [ 'error', 'always-multiline' ],
	'no-undef': 'off',
	'no-unused-vars': [ 'error', { ignoreRestSiblings: true, caughtErrors: 'none' } ],
	'dot-notation': 'error',
	'no-shadow': 'error',
	'no-lonely-if': 'error',
	'no-mixed-operators': 'error',
	'no-nested-ternary': 'error',
	'no-cond-assign': 'error',
	indent: [ 1, 'tab', { SwitchCase: 1 } ],
	'padded-blocks': [ 'error', 'never' ],
	'one-var-declaration-per-line': 'error',
	'array-bracket-spacing': [ 'error', 'always' ],
	'no-else-return': 'error',
	'no-console': 'error',
	'arrow-parens': [ 'error', 'always' ],
	'brace-style': [ 'error', '1tbs' ],
	'jsx-quotes': 'error',
	'no-bitwise': [ 'error', { allow: [ '^' ] } ],
	'no-caller': 'error',
	'no-debugger': 'error',
	'no-eval': 'error',
	'no-restricted-syntax': [
		'error',
		{
			selector: 'CallExpression[callee.name=/^__|_n|_x$/]:not([arguments.0.type=/^Literal|BinaryExpression$/])',
			message: 'Translate function arguments must be string literals.',
		},
		{
			selector: 'CallExpression[callee.name=/^_n|_x$/]:not([arguments.1.type=/^Literal|BinaryExpression$/])',
			message: 'Translate function arguments must be string literals.',
		},
		{
			selector: 'CallExpression[callee.name=_nx]:not([arguments.2.type=/^Literal|BinaryExpression$/])',
			message: 'Translate function arguments must be string literals.',
		},
	],
	'prefer-const': 'warn',
	yoda: [ 'error', 'always', {
		onlyEquality: true,
	} ],
	'spaced-comment': [ 'error', 'always', { markers: [ '!' ] } ],
	'react/react-in-jsx-scope': 'off',
	'react/prop-types': 'error',
	semi: 1,
	'jsdoc/check-tag-names': [ 'error', { definedTags: [ 'jest-environment' ] } ],
	'import/no-unresolved': [ 2, { ignore: [ 'elementor', 'modules', '@wordpress/i18n' ] } ],
	'import/no-extraneous-dependencies': 'off',
	'@wordpress/i18n-ellipsis': 'off',
	'@wordpress/i18n-translator-comments': 'error',
	'@wordpress/valid-sprintf': 'off',
	'capitalized-comments': [
		'error',
		'always',
		{
			ignorePattern: 'webpackChunkName|webpackIgnore|jQuery|translators',
			ignoreConsecutiveComments: true,
		},
	],
};

export default [
	{
		ignores: [
			'assets/lib/**/*.js',
			'assets/js/**/*.js',
			'**/*.min.js',
			'**/*.d.ts',
			'**/node_modules/**',
			'**/vendor/**',
			'**/vendor_prefixed/**',
			'build/**',
			'packages/**',
			'scripts/create-version-change.js',
			// ESLint 8 ignored dot-directories by default; flat config does not.
			'.github/scripts/**',
		],
	},
	...wordpress.configs[ 'recommended-with-formatting' ],
	{
		linterOptions: {
			reportUnusedDisableDirectives: 'off',
		},
		rules: {
			'space-in-parens': 'off',
			'template-curly-spacing': 'off',
			'space-unary-ops': 'off',
			'jsdoc/no-undefined-types': 'off',
		},
	},
	{
		plugins: {
			'no-jquery': fixupPluginRules( noJquery ),
			'@typescript-eslint': tseslint.plugin,
		},
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: 'module',
			parser: tseslint.parser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: customGlobals,
		},
		rules: {
			...noJquery.configs.deprecated.rules,
			...customRules,
		},
		settings: {
			react: {
				version: 'detect',
			},
			'import/resolver': {
				typescript: {
					alwaysTryTypes: true,
				},
			},
			jsdoc: { mode: 'typescript' },
		},
	},
	{
		files: [ 'scripts/**/*.mjs' ],
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			globals: {
				...globals.node,
			},
		},
		rules: {
			'no-console': 'off',
		},
	},
	{
		...playwright.configs[ 'flat/recommended' ],
		files: playwrightTestFiles,
	},
	{
		files: playwrightTestFiles,
		rules: {
			'playwright/no-networkidle': 'warn',
			'playwright/expect-expect': 'off',
			'playwright/no-conditional-in-test': 'off',
			'playwright/valid-title': 'warn',
			'playwright/prefer-web-first-assertions': 'warn',
			'playwright/no-standalone-expect': 'warn',
			'playwright/valid-describe-callback': 'warn',
			'playwright/no-unsafe-references': 'warn',
			'playwright/no-wait-for-navigation': 'warn',
			'playwright/no-unnecessary-assertions': 'warn',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
		},
	},
	{
		files: [ 'tests/**/types/**/*.{ts,tsx}' ],
		rules: {
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
		},
	},
];
