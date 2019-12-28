module.exports = {
    outputDir:'dist', //修改产出目录的名称
    assetsDir:'', //所生成的资源文件的目录
    indexPath:'index.html', //制定index.html
    lintOnSave: process.env.NODE_ENV !== 'production',  //生产构建的时候禁止了eslint-loader
    productionSourceMap: false,  //取消生成的Source Map
    transpileDependencies: [],  //控制babel-loader显示转换一个依赖
    crossorigin: undefined,    //给script设置crossorigin属性,如果服务器没有配置,则js脚本不能跨域处理
    // configureWebpack: // 次配置会被合并到webpackConfig中去 
    css:{
        requireModuleExtension: false
    }
    // 默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。设置为 false 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
}