const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: __dirname + '/static/js/index.js',
    output: {
        path: __dirname + '/templates',
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/templates/index.html',
        }),
        new ExtractTextPlugin('style.css'),
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    use: 'css-loader',
                }),
            },
        ]
    }
};
module.exports = config;