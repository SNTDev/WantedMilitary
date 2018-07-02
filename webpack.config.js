const webpack = require('webpack');
const config = {
    entry:  __dirname + '/static/index.js',
    output: {
        path: __dirname + '/templates',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
          {
            exclude: '/node_modules/',
            use: 'babel-loader'
          }
        ]
      }
};
module.exports = config;