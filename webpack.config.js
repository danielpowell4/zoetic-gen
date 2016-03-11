var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'

})

module.exports = {
  entry: [
    './app/scripts/main.js'
  ],
  output : {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {test:/\.js$/, exclude:/node_modules/, loader: "babel-loader"}
    ]
  }
}