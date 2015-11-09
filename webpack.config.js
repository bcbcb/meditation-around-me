var path = require('path');


module.exports = {
  entry: "./src/scripts/entry.js",
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {stage: 0},
        include: path.join(__dirname, 'src')
    }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }

};
