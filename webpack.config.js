const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/app.html',
  filename: 'app.html',
  inject: 'body'
});

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname + './bin'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [HtmlWebpackPluginConfig]
}
