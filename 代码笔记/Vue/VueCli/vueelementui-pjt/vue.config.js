// 引入了axions进行请求，这里设置代理解决跨域问题
module.exports={
    devServer: {
        proxy: {
            '/token': {
                target: 'http://kumanxuan1.f3322.net:8084',
                changeOrigin: true,
                pathRewrite: {
                    '^/api/coding/': '/'
                }
            }
        }
    }
}