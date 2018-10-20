const path = require('path');
const UglifyJS = require('uglifyjs-webpack-plugin');
const plugins = [];
const webpack = require('webpack');

plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: true }));
plugins.push(new webpack.EnvironmentPlugin(["API_ROOT_URL"]));

module.exports = {
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
    loaders: [{
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
        'NODE_ENV': JSON.stringify('dev')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],
    watch: true,
    node: {
        fs: 'empty'
    }
};
