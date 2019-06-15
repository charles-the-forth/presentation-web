const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/scripts/index.js',
    },
    plugins: [
        new CleanWebpackPlugin(['../dist']),
        new CopyWebpackPlugin([{from: './src/images', to: './images'}]),
        new CopyWebpackPlugin([{from: './src/404.html', to: './404.html'}]),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/cz.html',
            filename: 'cz.html',
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    }
};
