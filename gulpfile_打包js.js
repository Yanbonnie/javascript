var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var reload      = browserSync.reload;
var url ="/work/jSignature";
// 静态服务器 + 监听 scss/html 文件

gulp.task('script',function(){     
    //找到文件
    gulp.src('gulp_js/*.js')
    //压缩文件
    .pipe(uglify())
    //另存压缩后的文件
    .pipe(gulp.dest('gulp_dist/js'));
})


gulp.task('serve', function() {

    browserSync.init({
        server: "./"
    });
	gulp.watch([url+'/**/*.html',url+'/**/*.css', url+'/**/*.js']).on('change', reload);
    //gulp.watch(['requirejs/website/**/*.html','requirejs/website/**/*.css', 'requirejs/website/**/*.js']).on('change', reload);
	
});
