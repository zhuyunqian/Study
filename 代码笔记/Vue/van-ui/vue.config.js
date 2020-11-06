module.exports = {
    lintOnSave: false,
    publicPath: "./",
    indexPath: "index.html",
    devServer: {
        proxy: {
            '/api': {
                // target: 'http://192.168.113.104:8360', 
                target: 'http://kumanxuan1.f3322.net:8360/',
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}