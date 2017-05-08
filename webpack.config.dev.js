var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/RST.js',
  output: {
     filename: 'restructured.js',
     path: path.resolve(__dirname, 'dist'),
     libraryTarget: 'umd'
  },
   externals: {
        "lodash": {
            commonjs: "lodash",
            commonjs2: "lodash",
            amd: "lodash",
            root: "_"
        }
    },
  module: {
    rules: [
      {
    
        test: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
      ,{
        test: /\.pegjs.mustache$/,
        loaders: ['mustache-loader','pegjs-loader']
      }
    ]
  }
}