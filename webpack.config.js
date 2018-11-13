require("@babel/polyfill");
const path = require('path');
const fs = require('fs');

const getFiles = () => {
  let files =  fs.readdirSync('./pages')
  .filter(file => file.match(/.*\.js$/))
  .map(file => {
    return {
      name: file.substring(0, file.length-3),
      path:'./pages/'+file
    }
  }).reduce((i, file) => {
    i[file.name] = ["babel-polyfill","./lib/index.js",file.path]
    return i;
  }, {})

  return files;
}


const serverConfig = {
    entry: ['@babel/polyfill', './server.js'],
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
/*     entry: ['@babel/polyfill','./lib/index.js'],
 */     
      entry:  getFiles,
      output: {
        path: path.resolve(__dirname, 'static'),
        filename: '[name].bundle.js'
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