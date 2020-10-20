const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    { loader: 'file-loader' }
                ]
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCSSExtractPlugin({
            filename: './css/styles.css'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets', to: './assets/' }
            ]
        })
    ]
}