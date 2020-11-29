const path = require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	MiniCSSExtractPlugin = require('mini-css-extract-plugin'),
	CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		app: './src/app.js',
	},
	output: {
		filename: 'app.bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				use: [{ loader: 'file-loader' }],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new MiniCSSExtractPlugin({
			filename: './css/styles.css',
		}),
		new CopyPlugin({
			patterns: [{ from: 'src/assets', to: './assets/' }],
		}),
	],
};