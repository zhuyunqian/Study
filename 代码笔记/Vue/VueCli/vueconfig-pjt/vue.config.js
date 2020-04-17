module.exports={
    // 项目启动端口号
    devServer:{
        port:8082
    },

    /*
        部署项目：把代码发到生产环境服务器上
        开发情况下：目录自己定
        生产环境：有制定路径

        VueCli下区分生产环境和开发环境
        1. process.env.NODE_ENV
        -- production - 生产环境
        -- development - 开发环境
        测试情况下 - 发送生产环境下代码
        2.脚手架项目必须打包成浏览器识别的htmlcss等，再上传服务器（生产环境）npm run build
        3.打包目录-dist目录
    */

    //作用：修改资源路径的前缀目录
    //publicPath:'/app/'
    //三元表达式 - 生产环境和开发环境下的签注目录
    publicPath: process.env.NODE_ENV === 'production' ? '/my-app/' : '/'
}