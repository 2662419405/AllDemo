module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: false
    }
  },
  configureWebpack: {
    devServer: {
      proxy: {
        "/api": {
            target: "http://127.0.0.1:3000/", 
            changOrigin: true
        }
      }, 
    }
  }
}
