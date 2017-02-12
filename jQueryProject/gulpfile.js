var 
	gulp    = require('gulp'),//引入gulp
	sass    = require('gulp-ruby-sass'),
	connect = require('gulp-connect'),
	uglify  = require('gulp-uglify');

//编译sass任务
	gulp.task('sass',function(){
		
		return sass('src/*.scss',{//指定要变异的sass文件
			style:'expanded'//压缩风格
		})
		.pipe(gulp.dest('style/'));//编译好的文件存放位置
		
	});
	
	//压缩js文件
	
	gulp.task('minifyJs',function () {
		
		return gulp.src('src/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('js/'))
	});
	
	//监听html
	gulp.task('html',['sass','minifyJs'],function(){
		
		return gulp.src('*.html')
		.pipe(connect.reload());
	});
	
	//指定默认任务
	gulp.task('default',['sass','minifyJs'],function(){
		
		connect.server({
			livereload:true
		});//开启自动刷新任务
		
		gulp.watch('src/*.scss',['html']);
		gulp.watch('src/*.js',['html']);
	});
	
	
