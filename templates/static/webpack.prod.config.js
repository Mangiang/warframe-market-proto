const resolve = require('path').resolve;
const parts = require('./webpack.parts');
const merge = require("webpack-merge");

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
    parts.setFreeVariable("BACKEND_URL", "https://warframe-market-proto.herokuapp.com"),
]);