const webpack = require( 'webpack' );
const path = require( 'path' );
const TerserPlugin = require( 'terser-webpack-plugin' );

const common = {
	name: 'notes',
	target: 'web',
	context: __dirname,
	entry: {
		notes: path.resolve( __dirname, '../assets/js/notes.js' ), // Load in the editor or in the frontend when user connected
		'notes-app-initiator': path.resolve( __dirname, '../assets/js/notes-app-initiator.js' ), // Load in the editor preview or in the frontend when user connected
	},
	output: {
		path: path.resolve( __dirname, '../../../assets/js/notes' ),
		uniqueName: 'elementor-pro-notes',
	},
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM',
		'@wordpress/i18n': 'wp.i18n',
	},
	plugins: [
		new webpack.ProvidePlugin( {
			react: 'React',
			'react-dom': 'ReactDOM',
			PropTypes: 'prop-types',
			__: [ '@wordpress/i18n', '__' ],
		} ),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [ '@wordpress/default' ],
							plugins: [
								[ '@wordpress/babel-plugin-import-jsx-pragma' ],
								[ '@babel/plugin-transform-react-jsx', { pragmaFrag: 'React.Fragment' } ],
								[ '@babel/plugin-transform-runtime' ],
							],
						},
					},
					{ loader: 'webpack-conditional-loader' },
				],
			},
		],
	},
};

module.exports = {
	development: {
		...common,
		output: {
			...common.output,
			filename: '[name].js',
		},
		mode: 'development',
		devtool: 'source-map',
	},
	production: {
		...common,
		mode: 'production',
		output: {
			...common.output,
			filename: '[name].min.js',
		},
		performance: { hints: false },
		optimization: {
			minimize: true,
			minimizer: [ new TerserPlugin() ],
		},
	},
};
