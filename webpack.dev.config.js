const ExtendedDefinePlugin = require('extended-define-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const PACKAGE = require("./package.json");
const version = PACKAGE.version;
const vendorVersion = PACKAGE.vendorVersion;
const webpack = require("webpack");

module.exports = {
    entry: {
        app: "./src/client/app.js",
        vendor: ["react", "react-router", "react-router-dom", "react-dom", "lodash", "redux", "redux-saga", "react-modal"]
    },
    output: {
        filename: "bundle." + version + ".js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "umd",
        publicPath: "/"
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist/views",
        historyApiFallback: true,
        disableHostCheck: true,
        https: true
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, "src")
        },
        extensions: [".js", ".json", ".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/client/index.html",
            filename: __dirname + "/dist/index.html"
        }),
        new ExtendedDefinePlugin({
          ENV: "DEV"
        }),
        new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: "vendor." + vendorVersion + ".bundle.js" })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: "babel-loader"
            },
            {
                test: /\.scss?$/,
                use: [{
                    loader: "style-loader"
                },{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
              test: /\.(jpe?g|png|webp)$/i,
              use: [{
                  loader: "file-loader"
                }, {
                  loader: "webp-loader"
                }]
            }, {
              test: /\.(mov|mp4)$/,
              use: [{
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]'
                  }
                }]
            }
        ]
    }

};
