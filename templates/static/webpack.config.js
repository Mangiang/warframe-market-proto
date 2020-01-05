const resolve = require('path').resolve;
const merge = require("webpack-merge");
const parts = require('./webpack.parts');

const config = {
    mode: 'development',
    devtool: 'source-map',
    entry: __dirname + '/js/index.jsx',
    output: {
        path: resolve(__dirname, '../public/dist/'),
        filename: 'bundle.js',
        publicPath: '../public/dist/',
    },
    resolve: {
        extensions: ['.mjs', '.js', '.jsx', '.css', '.json', '.png']
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
            }, {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            }]
    }
};

module.exports = merge([config,
    parts.setFreeVariable("BACKEND_URL", "http://localhost:5000"),
]);