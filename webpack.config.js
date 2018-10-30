const path = require('path');


const serverConfig = {
    entry: './server.js',
    target: 'node',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'lib.node.js'
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
}

module.exports = [serverConfig,clientConfig]