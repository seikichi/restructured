var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/RST.js',
  output: {
     filename: 'restructured.min.js',
     path: path.resolve(__dirname, 'dist'),
     library:"restructured",  
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
   ,plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        except: ['$super', '$', 'exports', 'require'],
        keep_fnames: true
      }
      ,
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ]
}