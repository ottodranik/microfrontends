const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, '../dist_dev/microfrontend1'),
        filename: '[name].js'
    },
    devServer: {
        port: 4301,
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['dist_dev/microfrontend1'], { root: path.resolve(__dirname , '..'), verbose: true }),
        new HtmlWebpackPlugin({
            chunks: ['main'],
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/angular-app.html'),
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'application.html',
            template: path.resolve(__dirname, 'src/application.html'),
            inject: false
        })
    ]
});
