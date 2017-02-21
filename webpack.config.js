/*
    ./webpack.config.js
*/
const path = require('path');
module.exports = {
  entry: './components/index.js',
  output: {
    path: path.resolve('public'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}