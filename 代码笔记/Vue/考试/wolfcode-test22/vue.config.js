const px2rem = require('postcss-px2rem');

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem({
            remUnit: 75
          })
        ]
      }
    }
  },
  devServer: {
      proxy: {
          '^/api':{
            target:'http://kumanxuan1.f3322.net:8001',
            changeOrigin: true, 
            pathRewrite:{
              '/api':'' 
            }

          }
      }
  }
};