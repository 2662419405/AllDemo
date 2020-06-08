const merge = require('webpack-merge');
const base = require('./webpack.config.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const smp = new SpeedMeasurePlugin();
module.exports=smp.wrap(merge(base,{
    plugins:[
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: 'css/[name]-[hash].css',
        chunkFilename: 'css/[id].css',
      }),
      new BundleAnalyzerPlugin()
  ],

    module: {
      rules: [
        {
          test: /\.css$/,
          use: [{
            loader: MiniCssExtractPlugin.loader, // creates style nodes from JS strings
            options:{
              publicPath: '../'
            }
          }, {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              modules: true,
            },
          },
          {
            loader:'postcss-loader',
            options:{
              plugins:()=>[
                require('autoprefixer')({
                  //指定需要兼容的浏览器版本
                  //autoprefixer会参考caniuse.com进行加前缀
                  // browsers:['last 2 version','>1%','ios 7','last 3 ie version']
                          //兼容最近5个版本，用户量大于1%的浏览器，兼容ios 7以上的系统上的浏览器
                })
               ]
            }
          }
        
        ]
        },
        {
          test: /\.less$/,
          use: [{
            loader: MiniCssExtractPlugin.loader, // creates style nodes from JS strings
            options:{
              publicPath: '../'
            }
          }, {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              modules: true,
            },
          }, {
            loader: 'less-loader' // compiles Less to CSS
          }]
        },
        {
          test: /\.scss$/,
          use: [{
            loader:MiniCssExtractPlugin.loader, // creates style nodes from JS strings
            options:{
              publicPath: '../'
            }
          }, {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              modules: true,
            },
          }, {
            loader: 'sass-loader' // compiles Less to CSS
          }]
        }      
      ]
    },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
       minSize:0,
       cacheGroups: {
        commons: { // 打包两个页面的公共代码    
          name: 'common', // 分离包的名字
          chunks: 'all',
          minChunks:2
         },
         }
      },  
  },
    mode:"production",
  
}));