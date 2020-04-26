const path = require("path");

module.exports = {
  mode: "development", // работа в development режиме
  entry: "./src/index.js", // этот файл будет компилириваться
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/index.js", // сюда будет поступать скомпилированный файл
  },
  devtool: "inline-source-map", // Данная строчка отвечает за сурсмап, который позволяет и
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
