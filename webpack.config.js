"use strict";

var path = require("path");

module.exports = {
    mode: 'development',

    entry: './src/App.js',

    target: "electron-main",

    output: {
        path: path.resolve(__dirname, '/build'),
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: './build',
        port: 2777,
        publicPath: "http://localhost:2777"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },

    devtool: 'inline-source-map'
};