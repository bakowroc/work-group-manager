/*tslint:disable */

const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        {
          test: /\.css$/,
          use: [
            'to-string-loader',
            'style-loader',
            'raw-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  sourceMap: true,
                  importLoaders: 2,
                  localIdentName: '[name]__[local]__[hash:base64:5]'
                }
              },
              'sass-loader'
            ]
          })
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader'
        }
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
    }),
    new ExtractTextPlugin({filename: 'styles.css', allChunks: true})
  ]
}

module.exports = [serverConfig, appConfig];
  
