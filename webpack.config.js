const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { envConfig, env_state } = require("./env_config/index");

module.exports = {
  //entry point
  entry: "./src/index.js",
  // output point
  output: {
    path: path.join(__dirname, "public", "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  mode: envConfig === "staging" ? env_state.PRODUCTION : envConfig,

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

  devtool: envConfig === env_state.DEVELOPEMENT ? "source-map" : false,
  devServer: {
    historyApiFallback: true,
    contentBase: "./",
  },
};
