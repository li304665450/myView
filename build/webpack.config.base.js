const path = require('path')
const createVueLoaderOptions = require('./vue-loader.config')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  mode: process.env.NODE_ENV,
  target: 'web',
  entry: path.join(__dirname, '../client/client-entry.js'),
  output: {
    filename: 'bundel.[hash:8].js',
    path: path.join(__dirname, '../public'),
    publicPath: 'http://127.0.0.1:8000/public/'
  },
  module: {
    rules: [
      {
        test: /\.(vue|js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: createVueLoaderOptions(isDev)
      },
      {
        test: /\.(jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        include: path.join(__dirname, '../client')
      },
      // {
      //   test: /\.js$/,
      //   loader: 'babel-loader',
      //   exclude: /node_modules/
      // },
      {
        test: /\.(img|jpg|jpeg|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'resources/[path][name]-[hash].[ext]'
            }
          }
        ]
      }
    ]
  }
}

module.exports = config
