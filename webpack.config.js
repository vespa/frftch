/* use only for react styledist. For add other webpack configs please use next.config.js */
module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader?modules', 'sass-loader'],
      },
    ],
  },
  plugins: [],
};
