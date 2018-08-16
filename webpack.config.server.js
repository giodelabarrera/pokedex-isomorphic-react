
const nodeExternals = require('webpack-node-externals');
const path = require('path')
const srcPath = path.resolve(__dirname, 'src')
const buildPath = path.resolve(__dirname, 'build');

module.exports = {
  // mode: 'development',
  // directorio padre del entry
  context: srcPath,
  entry: './server/index.js',
  output: {
    path: buildPath,
    filename: 'server.js'
  },
  // compilar para entorno node
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    modules: ['node_modules'],
    // resuelve estas extensiones
    extensions: ['.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
        loader: 'file-loader',
        // options: {
        //     name: 'static/media/[name].[hash:8].[ext]',
        // },
      },
    ]
  },
  // modulos que no debe bundlerizar
  externals: nodeExternals(),
  devtool: 'source-map'
}