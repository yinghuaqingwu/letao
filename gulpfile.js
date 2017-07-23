//引入包
var gulp = require("gulp");
// 引入插件
var cssmin = require("gulp-cssmin");
//创建任务
gulp.task("cssmin",function(){
    //执行任务
    gulp.src("./public/manage/less/*.css")
    .pipe(cssmin())
    .pipe(gulp.dest("./release/css"));
});