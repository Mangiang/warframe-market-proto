const resolve = require('path').resolve;
const merge = require("webpack-merge");
const parts = require('./webpack.parts');

const config = {
    mode: 'development',
    devtool: 'source-map',
    entry: __dirname + '/js/index.jsx',
    output: {
        path: resolve(__dirname, '../public/'),
        filename: 'bundle.js',
        publicPath: '../public/',
    },
    resolve: {
        extensions: [ '.mjs','.js', '.jsx', '.css', '.json']
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
    parts.setFreeVariable("BACKEND_URL", "http://localhost:5000"),
]);