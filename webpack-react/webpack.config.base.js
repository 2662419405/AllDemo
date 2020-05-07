const path = require('path');
const HtmlWebpackPlugin=require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar');
module.exports={
    entry:{
      index:"./src/index.js",
      one:"./src/one.js"
    },
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"js/[name]_[hash].main.js"
    },
    plugins:[
      //配置多个应用
      new HtmlWebpackPlugin({
        title: 'index1',
      	filename:"index.html",
        template:"./public/index.html",
        chunks:["index"]
      }),
      new HtmlWebpackPlugin({
        title: 'One',
      	filename:"one.html",
        template:"./public/index.html",
        chunks:["one"]
      }),
      new CleanWebpackPlugin(),
      new WebpackBar()
	],
    module: {
      rules: [
        {
            test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use:  [
              {
                 loader:'thread-loader',
                 options:{
                  worker:3
                }
              },
              'babel-loader',
              'eslint-loader'
            ],
            // options: {
            //   presets: ['@babel/preset-env','@babel/preset-react']
            // }
          
        },       
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                outputPath: 'img/'
              },
            },
          ],
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'  
          },
        },
        
      ]
    },
    resolve:{
      extensions:['.jsx','.less','.js','.css']
    },

}