import path from 'path';
import  MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode: "production",
  target: 'web',
  entry: [
    path.resolve(__dirname, 'src/js/app'),
    path.resolve(__dirname, 'src/styles/style.scss'),
  ],
  output: {
    path: path.resolve(__dirname, "dist"), 
    filename: "bundle.js",
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        sideEffects: true,
        use: [
          MiniCssExtractPlugin.loader,
          {loader: 'css-loader'},
          {loader: 'sass-loader'},
        ]
    },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true
      },
      inject: true
    }),
  ]
}
