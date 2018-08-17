'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const paths = require('./paths')

module.exports = {
  mode: process.env.NODE_ENV,
  context: paths.appSrc,
  entry: paths.appClientIndexJs,
  output: {
    path: paths.appBuild,
    filename: 'static/js/client.js'
  },
  target: 'web',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        include: paths.appSrc,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: ['babel-preset-react-app'],
          cacheDirectory: true,
        },
      },
      {
        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
        loader: 'file-loader',
      },
    ]
  },
  devtool: 'source-map'
}