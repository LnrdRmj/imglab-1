var gulp = require("gulp");
var concat = require("gulp-concat");
var minifyCSS = require("gulp-minify-css");
var clean = require("gulp-clean");
var copy = require("gulp-copy");

var baseDestPath = 'dist/';

gulp.task('concatCSS', function() {

    console.log("Concat CSS");
    
    return gulp.src(["css/**/*.css"])
    .pipe(concat('all.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest(baseDestPath + 'css/'));
});

gulp.task("delDistContent", function(){
  return gulp.src(baseDestPath + "fonts/*.*")
    .pipe(clean({force: true}));
});

gulp.task("moveFonts", function(){
  return gulp.src("fonts/*.*")
  .pipe(copy(baseDestPath));
});

gulp.task('default', gulp.series("concatCSS", "delDistContent", "moveFonts"));

gulp.watch("css/*.css", gulp.series("concatCSS"));
