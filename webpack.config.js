var precss       = require('precss');
var autoprefixer = require('autoprefixer');
var cssnano      = require('cssnano');

module.exports = {
  entry: {
    client: './src/client.js',
  },
  output: {
    filename: 'dist/[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-decorators-legacy'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader',
      },
    ],
  },
  postcss: function postcss() {
    return [cssnano, precss, autoprefixer];
  },
  resolve: {
    extensions: ['', '.js', '.css'],
  },
};
