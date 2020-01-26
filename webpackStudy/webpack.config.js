const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  //指定打包的入口文件
  mode: "development",
  entry: "./index.js",
  //指定打包后的资源位置
  output: {
    //公共路径设置
    //publicPath: "https://cdn.baidu.com",
    path: path.resolve(__dirname, "./build"),
    filename: "index.js"
  },
  devtool: "cheap-module-eval-source-map",
  module: {
    //遇到不认识的模块就在这里找loader解决
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          //url-loader 可以限定模块的体积，根据体积判断是否需要转换成base64,减少http请求
          loader: "url-loader", //file-loader就是把模块，放在另外一个目录里，并且把位置返回给我们,第三方字体
          options: {
            //   name是打包前模块的名称，ext是打包前的模块格式
            name: "[name]_[hash].[ext]",
            outputPath: "images/",
            limit: 15500
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      },
      {
        test: /\.scss$/, //loader是有执行顺序，从后往前
        use: ["style-loader", "css-loader", "sass-loader"]
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
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],
  devServer: {
    contentBase: "./build",
    open: true,
    port: "8081",
    proxy: {
      "/api": {
        target: "http://localhost:9092"
      }
    }
  }
};
