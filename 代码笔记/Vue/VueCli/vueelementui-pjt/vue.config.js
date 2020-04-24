// 引入了axions进行请求，这里设置代理解决跨域问题
// 注意这里的一旦修改，请重启-务必，一定
module.exports={
    devServer: {
        proxy: {
            // '/token': {
            //     target: 'http://kumanxuan1.f3322.net:8084',
            // },
            // '/departments': {
            //     target: 'http://kumanxuan1.f3322.net:8084'
            // }
            //由于多个代理，设置简写方式

            '^/api':{
                target:'http://kumanxuan1.f3322.net:8084',
                pathRewrite:{
                    '/api':'' //代理转发的时候把当前请求替换成空字符串
                }
            }
        }
    }
}