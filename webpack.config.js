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
        },
      },
      {
        test: /\.jade$/,
        loader: 'jade-html',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js'],
  },
};
