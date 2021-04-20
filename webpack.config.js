const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:{
        main: './frontend/main.js'
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "monkey.js",
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.jsx$/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
            filename: 'index.html'
        })
    ],
    resolve: {
        extensions: [
            '.js', '.jsx'
        ]
    },
    devServer:{
        compress: true,
        hot: true,
        host: 'localhost',
        port:3001

    }
}