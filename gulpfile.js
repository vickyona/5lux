let gulp = require("gulp");
let connect = require("gulp-connect");
let sass = require("gulp-sass-china");
// gulp => 方法;
	//task 方法; => 绑定指令的方法;
// gulp.task("yanghuaizhi",()=>{
// 	//指令执行函数;
// 	console.log("hello this is my first task");
// });

//把index放进 dist文件夹之中;

gulp.task("index",()=>{
	//实现功能的时候一定要return;
	// gulp.src() => 找到源文件;
	// gulp.pipe(); => 在连缀之中想要继续调用gulp方法,就要用到pipe方法;
	// gulp.dest(); => 转存方法;
	return gulp.src("index.html").pipe(gulp.dest("dist")).pipe(connect.reload());
})

//gulp.watch();

//把所有的js文件全部都放进线上的script文件夹之中;
gulp.task("script",()=>{

	return gulp.src(["js/*.js"])
	.pipe(gulp.dest("dist/script"))
})
//把所有的css文件全部都放进线上的css文件夹之中;
gulp.task("css",()=>{

	return gulp.src(["css/*.css"])
	.pipe(gulp.dest("dist/css"))
})

gulp.task("watch",()=>{
	//如果线下文件发生改变 ,那么 执行index,css.script,sass指令;
	gulp.watch(["index.html","sass/*.scss","css/*.css","js/*.js"],["index","script","css"]);
	gulp.watch("sass/*.scss",["sass"]);
})

gulp.task("server",()=>{
	connect.server({
        root:'dist',  //以谁为服务器根目录
        port:8888,  // 端口号 
        livereload:true
    });
})

gulp.task("sass",()=>{
	 return gulp.src('sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
})


gulp.task("default",["server","watch"])