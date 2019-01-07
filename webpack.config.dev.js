import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode: "development",
  devtool: 'inline-source-map',
  target: 'web',
  watch: true,
  entry: [
    path.resolve(__dirname, 'src/js/app'),
    path.resolve(__dirname, 'src/styles/style.scss'),
  ],
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader'},
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: true
    })
  ]
}
