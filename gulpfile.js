var gulp = require("gulp");
var scss = require('gulp-sass');
var stylus = require('gulp-stylus');
var postcss = require('gulp-postcss');
var px2rem = require('postcss-px2rem');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
// const changed = require('gulp-changed'); 
const browsersync = require('browser-sync').create();
const reload = browsersync.reload;
//因为我用的是scss,所以这里注册任务写成了scss;

gulp.task('scss',function(){
    gulp.src('css/**/*.scss')
    .pipe(scss())
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'))
    .pipe(browsersync.stream());
});

gulp.task('stylus',function(){
    gulp.src('css/**/*.styl')
    .pipe(stylus())
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'))
    .pipe(browsersync.stream());
});
gulp.task('px2rem', function() {
    var processors = [px2rem({remUnit: 75})];
      gulp.src('/dist/**/*.css')
      .pipe(postcss(processors))
      .pipe(gulp.dest('./dist'));
  });

 // gulp.task('move-html', () => {
 //        return gulp
 //        .src('./app/**/*.html')
 //        .pipe(changed('./dev'))
 //        .pipe(gulp.dest('./dev'));
 //    })

gulp.task('html',function(){
    gulp.src('html/**/*.html')
    .pipe(htmlmin({
        collapseWhitespace : true,
        removeComments : true
    }))
    //最后把你建立的html文件压缩到自动创建的dist文件里;
    .pipe(gulp.dest('dist/html'))
    .pipe(browsersync.stream());
})

gulp.task('indexs',function(){
    gulp.src('/*.html')
    .pipe(htmlmin({
        collapseWhitespace : true,
        removeComments : true
    }))
    //最后把你建立的html文件压缩到自动创建的dist文件里;
    .pipe(gulp.dest('dist/*.html'))
    .pipe(browsersync.stream());
})



gulp.task('image',function(){
    gulp.src('img/*.{jpg,png,gif}')//要处理的图片目录为img目录下的所有的.jpg .png .gif 格式的图片;
    .pipe(cache(imagemin({
        progressive : true,//是否渐进的优化
        svgoPlugins : [{removeViewBox:false}],//svgo插件是否删除幻灯片
        interlaced : true //是否各行扫描
    })))
    .pipe(gulp.dest('dist/img'))
    .pipe(browsersync.stream());
});



gulp.task('js',function(){
    gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browsersync.stream())
    .on('error', function (err) {
        gutil.log(gutil.colors.red('[Error]'), err.toString());
    })
});
gulp.task('lib',function(){
    gulp.src('lib/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/lib'))
    .pipe(browsersync.stream())
    .on('error', function (err) {
        gutil.log(gutil.colors.red('[Error]'), err.toString());
    })
});

gulp.task('watch',['scss','js','html','image'],function(){
    browsersync.init({      // 启动Browsersync服务
        port: 2019,
        server: {
            baseDir: './',   // 启动服务的目录 默认 index.html    
            index: 'index.html' // 自定义启动文件名

        },
        open: 'external',   // 决定Browsersync启动时自动打开的网址 external 表示 可外部打开 url, 可以在同一 wifi 下不同终端测试
        injectChanges: true // 注入CSS改变
    });

    gulp.watch('css/**/*.scss',['scss']);
    gulp.watch('css/**/*.styl',['stylus']);
    gulp.watch('js/**/*.js',['js']);
    gulp.watch('img/**/*.*',['image']);
    gulp.watch('html/**/*.html',['html']);
    gulp.watch('dist/**/*.css',['px2rem']);
    gulp.watch('lib/*.js',['lib']);
    gulp.watch('*.html',['indexs']);

})

gulp.task("default",function(){
    gulp.start("watch","html","scss","image","js",'stylus','px2rem','lib','indexs')
})

