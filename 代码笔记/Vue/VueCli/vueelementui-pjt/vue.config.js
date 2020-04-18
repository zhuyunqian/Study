// 引入了axions进行请求，这里设置代理解决跨域问题
// 注意这里的一旦修改，请重启-务必，一定
module.exports={
    devServer: {
        proxy: {
            '/token': {
                target: 'http://kumanxuan1.f3322.net:8084',
            },
            '/departments': {
                target: 'http://kumanxuan1.f3322.net:8084'
            }
        }
    }
}