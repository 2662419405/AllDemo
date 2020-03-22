const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./demo",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "sh.[hash].js"
  },
  module: {
    rules: [
      //   使用file-loader处理图片
      //   {
      //     test: /(.gif|jpe?g|png)/,
      //     use: [
      //       {
      //         loader: "file-loader",
      //         options: {
      //           outputPath: "images/"
      //         }
      //       }
      //     ]
      //   },
      // 处理图片
      {
        test: /(.gif|jpe?g|png)/,
        use: [
          {
            loader: "url-loader",
            options: {
              //   name是打包前模块的名称，ext是打包前的模块格式
              name: "[name]_[hash].[ext]",
              outputPath: "images/",
              limit: 15500
            }
          }
        ]
      },
      // 处理css文件
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      // 处理sass文件
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      // less处理
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "less-loader" // compiles Less to CSS
          }
        ]
      },
      // 处理babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      title: "标题-自己取的"
      //   filename: "app.html"
    }),
    //在打包之前，先帮我们把生成目录删除一下
    new CleanWebpackPlugin(),
  ],
  devServer: {
    contentBase: "./dist",
    open: true,
    port: "11000",
    proxy: {
      "/api": {
        target: "http://localhost:8888"
      }
    }
  }
};
