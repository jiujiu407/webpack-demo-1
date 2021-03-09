const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

  entry: './src/index.js',
  output: {
    filename: 'index.[contenthash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
    title:'见鬼',
    template:'src/assets/index.html'
  })
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        //把文件变成文件路径
        loader: ["file-loader"]
      },
      {
        test: /\.styl$/i,
        loader: ["style-loader","css-loader","stylus-loader"], // compiles Less to CSS
      },
          {
            test: /\.less$/i,
            loader: ["style-loader","css-loader","less-loader"], // compiles Less to CSS
          },
      {
        test: /\.scss$/i,
        use: [
          //style-loader把js字符串转换为style标签
          "style-loader",
          //css-loader把css转换为js字符串
          "css-loader",
          {
            // sass-loader把sass转换为css
            loader:"sass-loader",
            options:{
              implementation:require('dart-sass')
            }
          }
        ],
      },
    ],
  },
};

