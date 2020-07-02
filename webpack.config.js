const path = require("path");
const isDevelopment = process.env.NODE_ENV === "development";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");

module.exports = {
  mode: "production",
  entry: "./src/Feedback.js",
  output: {
    path: path.resolve("dist"),
    filename: "Feedback.js",
    libraryTarget: "commonjs2",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "feeder-react-feedback.css",
      chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css",
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()],
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loaders: ["babel-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: isDevelopment,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: isDevelopment,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment,
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
    },
    extensions: [".js", ".jsx", ".scss"],
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM",
    },
  },
};
