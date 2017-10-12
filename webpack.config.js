/*tslint:disable */

const nodeExternals = require("webpack-node-externals");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const serverConfig = {
  target: "node",
  externals: [nodeExternals()],
  entry: "./server/index.ts",
  output: {
    filename: "server.js",
    path: __dirname + "/build"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: "/node_modules/"
      }
    ]
  }
};

const appConfig = {
  entry: './app/index.tsx',
  output: {
    filename: "app.js",
    path: __dirname + "/build"
  },
  devtool: "source-map",
  resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
      rules: [
        { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
  },
  externals: {
      "react": "React",
      "react-dom": "ReactDOM"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Work group manager",
      template: './app/index.ejs'
    })
  ]
}

module.exports = [serverConfig, appConfig];
  
