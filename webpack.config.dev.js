import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode: "development",
  devtool: 'inline-source-map',
  target: 'web',
  watch: true,
  entry: path.resolve(__dirname, 'src/js/app'),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
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
      {
        test: /\.(png|jpe?g|svg)$/,
        loader: 'file-loader',
        include: path.resolve(__dirname, 'src/images/'),
        options: {
          name: '[name].[ext]',
          outputPath: 'images/',
          publicPath: 'images/',
        }
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
