const path = require('path')

module.exports = {
  devtool: 'source-map',
  context: __dirname,
  entry: './client/app/jsx/boot.jsx',
  output: {
    path: path.join(__dirname, '/client/app'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
}
