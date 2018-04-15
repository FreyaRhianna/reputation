const webpack = require('webpack');

const config = {
    entry: {
        index: __dirname + '/component-view/index.jsx'
    },
    output: {
        path: __dirname + '/dist/bundle/',
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]',
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader:['style-loader','css-loader']
            }
        ],
    }
};

module.exports = config;
