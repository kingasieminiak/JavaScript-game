import path from 'path';
import  MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  mode: "production",
  entry: [
    path.resolve(__dirname, 'js/app'),
    path.resolve(__dirname, 'styles/style.scss'),
  ],
  output: {
    path: path.resolve(__dirname, "dist"), 
    filename: "bundle.js",
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'
      },
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
    })
  ]
}
