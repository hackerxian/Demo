var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss       = require('precss');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.css$/,
                loader: "postcss-loader"
            }
        ]
    },
    postcss: function () {
        return [autoprefixer, precss];
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("./css/main.min.css")
    ]
};
