const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const plugins = [];
const webpack = require('webpack');


plugins.push(new webpack.EnvironmentPlugin(["API_ROOT_URL"]));

module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill',
    './src/index'
  ],
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, 'public/build'),
    filename: 'bundle.min.js',
    publicPath: '/public/'
  },
  module: {
    rules: [{ 
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
  ],
  // optimization: {
    // minimizer: [new UglifyJsPlugin({compress: true})]
  // },
  watch: true
};
