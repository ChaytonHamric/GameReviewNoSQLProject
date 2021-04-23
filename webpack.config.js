const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')

// module.exports = {
//   entry: {
//     main: "./server.js",
//   },
//   target: 'node',
//   externals: [nodeExternals()],
//   output: {
//     path: path.resolve(__dirname, "build"),
//     filename: "build.js",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         loader: "babel-loader",
//       },
//       {
//         test: /\.jsx$/,
//         loader: "babel-loader",
//       },
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"],
//       },
//       {
//         test: /\.(jpg|png|svg)$/,
//         loader: "url-loader",
//         options: {
//           limit: 25000,
//         },
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".js", ".jsx"],
//   },
//   devServer: {
//     compress: true,
//     hot: true,
//     host: "localhost",
//     port: 3001,
//   },
// };




const browserConfig = {
  mode: "production",
  entry: "./frontend/main.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: "url-loader",
        options: {
          limit: 25000,
        },
      },
    ],
  },
  plugins: [
      new webpack.DefinePlugin({
        __isBrowser__: "true"
      })
    ]
}

const serverConfig = {
  mode: "production",
  entry: "./server.js",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: "url-loader",
        options: {
          limit: 25000,
        },
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]
}

module.exports = [browserConfig, serverConfig]