module.exports = {
  mode: 'development',
  entry: {
    vendor: ['styled-components'],
    root: './AndrewsService/client/index.jsx',
    item: './AnaitsService/client/App.jsx',
    heather: './HeathersService/client/app.jsx',
    reviews: './AarushisService/client/app.jsx'
  },
  externals: {
    'styled-components': 'styled'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff|eot|ttf|svg|png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 80000,
            name: '[name].[ext]'
          }
        }
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/public',
    chunkFilename: '[id].[chunkhash].js'
  }
};