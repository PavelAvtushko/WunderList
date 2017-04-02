var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.resolve( __dirname, "client") ,
    entry: {
        app: ['./index.js']
    },
    output: { 
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
        },
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
            loader: 'style-loader!css-loader'
        },
        {
            test: /\.html$/,
            loader: 'html-loader'
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'url-loader'
        },
        {
            test: /\.png$/,
            loader: "url-loader?limit=100000"
        },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $:'jquery',
        jquery: 'jquery'
    })
  ],
  watch: true
};
