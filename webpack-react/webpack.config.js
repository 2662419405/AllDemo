const path = require("path");
const HtmlWebpackPlugins = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackBar = require("webpackbar");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/[hash].[name].js",
  },
  // mode: "development",
  devtool: false, //增加代码的可复读型
  module: {
    rules: [
      // 样式处理器
      {
        test: /(scss|sass)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: true, // CSS模块化开发
            },
          },
          "sass-loader",
        ],
      },
      // es6转码
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          // options: {
          //   presets: ["@babel/preset-env", "@babel/preset-react"],
          // },
        },
      },
      // 图片处理
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "img/",
              publicPath: "./img",
            },
          },
          // 图片压缩loader
          {
            loader: "image-webpack-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugins({
      title: "首页",
      filename: "index.html", //生成的html存放路径，相对于 output.path
      template: "./public/index.html", //html模板路径
      inject: true, // 是否将js放在body的末尾
    }),
    new MiniCssExtractPlugin({
      //css独立打包
      filename: "css/[name].css",
    }),
    new CleanWebpackPlugin(),
    new WebpackBar(),  //进度条
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true, //会 gzip(压缩) 和 serve(服务) 所有来自项目根路径下 dist/ 目录的文件
    port: 9000,
    proxy: {
      "/data": {
        //地址
        target: "http://www.bjlink32.com/data.php", //接口地址,跨域访问
        // secure: false,// 如果是https接口，需要配置这个参数
        changeOrigin: true, //开启跨域
        pathRewrite: { "^/data": "" }, //如果接口本身没有/data需要通过pathRewrite来重写了地址
      },
    },
  },
};
