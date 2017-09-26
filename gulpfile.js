let gulp = require("gulp");
let connect = require("gulp-connect");
let sass = require("gulp-sass-china");

gulp.task("server",()=>{
	connect.server({
        root:'dist',  //以谁为服务器根目录
        port:8888,  // 端口号 
        livereload:true
    });
});
//把index放进 dist文件夹之中;

gulp.task("index",()=>{
	//实现功能的时候一定要return;
	// gulp.src() => 找到源文件;
	// gulp.pipe(); => 在连缀之中想要继续调用gulp方法,就要用到pipe方法;
	// gulp.dest(); => 转存方法;
	return gulp.src("index.html").pipe(gulp.dest("dist")).pipe(connect.reload());
});


//把所有的js文件全部都放进线上的js文件夹之中;
gulp.task("script",()=>{

	return gulp.src(["js/*.js"])
	.pipe(gulp.dest("dist/js"))
});
//把所有的css文件全部都放进线上的css文件夹之中;
gulp.task("css",()=>{

	return gulp.src(["css/*.css"])
	.pipe(gulp.dest("dist/css"))
});
//把所有的html文件全部都放进线上的html文件夹之中;
gulp.task("html",()=>{

	return gulp.src(["html/*.html"])
	.pipe(gulp.dest("dist/html"))
});
gulp.task("sass",()=>{
	 return gulp.src('sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(gulp.dest('css'));
});
gulp.task("data",()=>{
	return gulp.src(["data/*.json"])
	.pipe(gulp.dest("dist/data"))          
});
gulp.task("module",()=>{
	return gulp.src(["js/module/*.js"])
	.pipe(gulp.dest("dist/js/module"))          
});
//监测
gulp.task("watch",()=>{
	//如果线下文件发生改变 ,那么 执行index,css,html,script,sass指令;
	gulp.watch(["index.html","sass/*.scss","css/*.css","js/*.js","html/*.html","data/*.json","js/module/*.js"],["index","script","css","sass","html","data","module"]);
	gulp.watch("sass/*.scss",["sass"]);
})

gulp.task("default",["server","watch"])