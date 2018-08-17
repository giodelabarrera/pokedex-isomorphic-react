'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const nodeExternals = require('webpack-node-externals');
const paths = require('./paths')

module.exports = {
  mode: process.env.NODE_ENV,
  context: paths.appSrc,
  entry: paths.appServerIndexJs,
  output: {
    path: paths.appBuild,
    filename: 'static/js/server.js'
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
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
  externals: nodeExternals(),
  devtool: 'source-map'
}