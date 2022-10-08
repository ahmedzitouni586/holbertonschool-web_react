const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output:{
        path: path.resolve('./dist'),
        filename: "bundle.js",
        assetModuleFilename: '[name] [ext]'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.resolve('./dist'),
            
        },
        port: 3001,
        open: true,
        hot: true,
        compress: true
    },
    
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
          {
            test: /\.(jsx|js)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', "@babel/preset-react"],
                
              }
            }
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource'
          },
          
        ],
    },
  
}