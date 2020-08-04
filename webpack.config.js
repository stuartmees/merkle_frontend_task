const webpack = require('webpack');

module.exports = {

    entry: './src/index.js',
  
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },

    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          } , {
            test: /\.scss$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    devServer: {
      contentBase: './dist',
      proxy: {
        port: 8080,
        '/api': {
          target: 'http://localhost:5000',
          secure: false
        }
      }
    }
  };