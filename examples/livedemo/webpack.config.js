const webpack = require('webpack');

module.exports = {
  entry: './js/app.js',
  output: {
    filename: 'js/bundle.js',
  },
  devServer: { inline: true, hot: true },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules',
        include: /flexboxgrid/,
      },
    ],
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ],
  resolve: {
    extensions: ['', '.js', '.json'],
  },
};
