var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var glob = require("glob");

module.exports = {
    entry: {
        "app": glob.sync("./site/**/**.js")
    },
    output:{
        publicPath: "/client",
        path: path.resolve("../build/client"),
        filename: "js/app.bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'site/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new ExtractTextPlugin('css/app.css', {
            allChunks: true
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["env", "react"]
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')                
            }
        ]
    },
    stats: {
        colors: true
    },
    devServer: {
        contentBase: "./site",
        port: 8081
    }
};