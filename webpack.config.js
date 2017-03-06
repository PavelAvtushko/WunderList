var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./client/index.js']
  },
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css!'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
};
