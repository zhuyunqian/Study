//引入依赖
var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var connect = require('gulp-connect');

//任务
gulp.task('oppohtml',function(){
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./build'))
        .pipe(connect.reload())
})

gulp.task('oppoless',function(){
    gulp.src('./src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./build/css'))
        .pipe(connect.reload())
})

gulp.task('oppojs',function(){
    gulp.src('./src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./build/js'))
        .pipe(connect.reload())
})

gulp.task('oppoimg',function(){
    gulp.src('./src/images/*')
        .pipe(gulp.dest('./build/images'))
})

gulp.task('assetscss',function(){
    gulp.src('./src/assets/css/*.css')
        .pipe(gulp.dest('./build/assets/css'))
})
gulp.task('assetsjs',function(){
    gulp.src('./src/assets/js/*.js')
        .pipe(gulp.dest('./build/assets/js'))
})

gulp.task('server',function(){
    connect.server({
        root:['build'],
        livereload:true,
        port:8888
    })

    //监听索引内所有文件
    gulp.watch('./src/less/*',['oppoless'])
    gulp.watch('./src/js/*',['oppojs'])
    gulp.watch('./src/index.html',['oppohtml'])
})



gulp.task('all',['oppohtml','oppoless','oppojs','oppoimg','server']);
gulp.task('assets',['assetscss','assetsjs']);
gulp.task('default',['all','assets']);