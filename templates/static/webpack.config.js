const resolve = require('path').resolve;
const merge = require("webpack-merge");
const parts = require('./webpack.parts');

const config = {
    devtool: 'eval-source-map',
    entry: __dirname + '/js/index.jsx',
    output: {
        path: resolve('../public'),
        filename: 'bundle.js',
        publicPath: resolve('../public')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            }, {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },]
    }
};

module.exports = merge([config,
    parts.setFreeVariable("BACKEND_URL", "http://127.0.0.1:5000"),
]);