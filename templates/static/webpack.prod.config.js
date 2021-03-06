const resolve = require('path').resolve;
const parts = require('./webpack.parts');
const merge = require("webpack-merge");

const config = {
    mode: 'production',
    devtool: 'source-map',
    entry: __dirname + '/js/index.jsx',
    output: {
        path: resolve(__dirname, '../public/dist/'),
        filename: 'bundle.js',
        publicPath: '../public/dist/',
    },
    resolve: {
        extensions: ['.mjs', '.js', '.jsx', '.css', '.json']
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
    parts.setFreeVariable("BACKEND_URL", "https://warframe-market-proto.herokuapp.com")
]);