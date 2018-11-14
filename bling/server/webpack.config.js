const path = require('path');


const serverConfig = {
    entry: ['@babel/polyfill', '/bling/serve/index.js'],
    target: 'node',
    output: {
      path: path.resolve(__dirname),
      filename: 'index.js'
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
    }

  };

module.exports = serverConfig;