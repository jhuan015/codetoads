const path = require('path')
const webpack = require('webpack');

module.exports = {

  devtool: 'eval',

  context: __dirname,

  entry: [
    './client/app/jsx/boot.jsx'
  ],

  output: {
    path: path.join(__dirname, '/client/app'),
    filename: 'bundle.js'
  },

  plugins: [
   new webpack.NoErrorsPlugin()
  ],

  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },

  module: {
      loaders: [
        { test: /\.jsx?$/,
          loader: 'babel',
          exclude: path.join(__dirname, 'node_modules'),
        },
        { test: /\.scss?$/,
          loader: 'style!css!sass',
          include: path.join(__dirname, 'src', 'styles'),
        },
        { test: /\.png$/,
          loader: 'file',
        },
        { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          loader: 'file',
        },
        { test: /node_modules[\\\/]auth0-lock[\\\/].*\.js$/,
          loaders: [
            'transform-loader/cacheable?brfs',
            'transform-loader/cacheable?packageify'
          ]
        },
        { test: /node_modules[\\\/]auth0-lock[\\\/].*\.ejs$/,
          loader: 'transform-loader/cacheable?ejsify'
        },
        { test: /\.json$/,
          loader: 'json-loader'
        }
      ],
    },
    externals: {
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.json']
    }
};
