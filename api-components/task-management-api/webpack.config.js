const path = require('path');
//const HtmlWebPackPlugin = require("html-webpack-plugin");

// const htmlWebpackPlugin = new HtmlWebPackPlugin({
//     template: "./public/index.html",
//     filename: "./index.html"
// });

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
        },
        {
            test: /\.css$/,
            use: [
            {
                loader: "style-loader"
            },
            {
                loader: "css-loader",
                options: {
                modules: true,
                importLoaders: 1,
                localIdentName: "[name]_[local]_[hash:base64]",
                sourceMap: true,
                minimize: true
                }
            }
            ]
        }
        ]
    },
    // resolve: {
    //     mainFiles: ['src/index']
    // }
    resolve: {
        mainFields: ['module', 'main']
    }
    
   //plugins: [htmlWebpackPlugin]
};