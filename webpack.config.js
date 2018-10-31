const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const serverConfig = {
    entry: './server.js',
    target: 'node',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'server.js'
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            },
        ]
    },

  };


const clientConfig = {

    output: {
        path: path.resolve(__dirname, 'static'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }, 

        ],
       
      }
}

module.exports = [serverConfig,clientConfig]