var webpack = require('webpack');
var path = require('path');
var config = {
    entry: path.resolve(__dirname, "src/js", "app.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.js?$/,
            include: [path.resolve(__dirname, 'src/js')],
            exclude: [path.resolve(__dirname, "node_modules")],
            options: { presets: ["react", "env"] },
            loader: "babel-loader"
        },
        {
            test: /\.css$/,
            loaders: ["style-loader", "css-loader"],
            include: [path.resolve(__dirname, 'src/css')],
        }
        ]
    },
}

module.exports = config;