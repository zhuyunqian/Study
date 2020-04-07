//gulp模块 -- 用于执行任务，压缩等
var gulp = require('gulp');
//gulp less编译模块，不需要手动kola编译
var less = require('gulp-less');
//压缩css文件编译模块  --用于压缩css
var cssmin = require('gulp-cssmin');
//js合并编译模块
var concat = require('gulp-concat');
//js压缩编译模块
var uglify = require('gulp-uglify');
////图片压缩编译模块
var imagemin = require('gulp-imagemin');
//服务器模块
var connect = require('gulp-connect');


//创建任务
//myhtml--任务名称
gulp.task('myhtml',function(){
    //索引文件 - 输出
    gulp.src('./src/index.html')
    //管道pipe输出 dest目标文件夹  ./build  -- 输出css后压缩，在输出到指定目标文件夹
        .pipe(gulp.dest('./build'))
})

//终端编译 -- 执行任务
//gulp myhtml(任务名称)

//创建css任务
gulp.task('myless',function(){
    //任务索引
    gulp.src('./src/less/index.less')
        //输出为less
        .pipe(less())
        //压缩输出css
        .pipe(cssmin())
        //输出到指定文件夹
        .pipe(gulp.dest('./build/css'))

        //监听执行myless任务后重新加载
        .pipe(connect.reload())
})

//创建js任务
gulp.task('myjs',function(){

    //任务输入源--索引
    gulp.src('./src/js/*.js')

    //输出合并js index.js - 输出名称
        .pipe(concat('index.js'))

        //输出js压缩
        .pipe(uglify())

        //输出到目标文件夹
        .pipe(gulp.dest('./build/js'))
})


//创建img压缩任务
gulp.task('myimage', function() {

    gulp.src('src/images/*.{png,jpg,gif,ico}')  /*读取所有的图片文件*/
        .pipe( imagemin() )  /*将读取所有的图片文件进行压缩 */
        .pipe( gulp.dest('build/images'))    /*再将读取压缩后的文件写到build目录（没有会自动新建）*/
});


//server服务
gulp.task('server',function(){
    connect.server({
        //配置热更新
        root:['build'],//服务器管理/运行哪个目录(默认是项目的根目录)
        livereload:true,  //是否热更新。
        port:8082  //指定web服务的端口号（默认是8080）
    });

    //监听变化 -- 监听less文件夹的变化，有变化执行myless任务
    gulp.watch('./src/less/*',['myless']);

})



//all任务，一次性全部执行任务
gulp.task('all',['myhtml','myless','myjs','myimage','server']);

//直接终端 gulp -- 即可运行 gulp all ，执行任务
gulp.task('default',['all']);