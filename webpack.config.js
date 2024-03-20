const path = require("path");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    "./src/app.js",
    "./src/getters.js",
    "./src/helpers.js",
    "./src/index.js",
    "./src/controller/EventsController.js",
    "./src/controller/optionSelectedController.js",
    "./src/controller/renderTemplate.js",
    "./src/controller/routerController.js",
    "./src/controller/rulesController.js",
    "./src/controller/scoreController.js",
    "./src/controller/showWarningController.js",
    "./src/controller/startGameController.js",
    "./src/controller/winnerIndicatorController.js",
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js",
  },
//   module: {
    // rules: [
    //   {
    //     test: /\.css$/i,
    //     use: ["style-loader", "css-loader"],
    //   },
    // ],
//   },
  mode: "production",
};
