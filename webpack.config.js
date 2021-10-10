const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  //entry point
  entry: "./src/index.js",
  // output point
  output: {
    path: path.join(__dirname, "public", "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },

  mode: "production",
  //mode: "development",
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: ["file-loader"],
      },
    ],
  },

  //plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],

  devServer: {
    historyApiFallback: true,
    contentBase: "./",
  },
};
