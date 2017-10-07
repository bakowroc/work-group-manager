/*tslint:disable */

const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  externals: [nodeExternals()],
  entry: "./server/index.ts",
  module: {
    rules: [
      {
        test: "/\.ts$/",
        use: "ts-loader",
        exclude: "/node_modules/"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: "server.js",
    path: __dirname + "/build"
  }
};
