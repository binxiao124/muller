const path = require('path')
const webpack = require('webpack')

const BUILD_DIR = path.resolve(__dirname, 'src/client/public')
const APP_DIR = path.resolve(__dirname, 'src/client/app')

const config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: APP_DIR,
        loader: 'babel',
      },
    ],
  },
}

module.exports = config
