const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { dirname } = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: "./index.js",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    hot: true,
    watchFiles: ["src/**/*"],
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "docs"),
    assetModuleFilename: "assets/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ttf)$/i,
        type: "asset/resource",
      },

    ],
  },
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
      favicon: "assets/favicon-32x32.png"
    }),
    new CleanWebpackPlugin(),
  ],
};
