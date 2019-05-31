var gulp = require("gulp");
var concat = require("gulp-concat");
var minifyCSS = require("gulp-minify-css");
var watch = require("gulp");

gulp.task('concatScripts', function() {
    return gulp.src(["css/*.css", "css/fontello.min.css"])
    .pipe(concat('minify.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('build'));
});

gulp.task("updateCSS", function(){
  gulp.watch("css/*.css", ["concatScripts"]);
});

exports.default = ["concatScripts", "updateCSS"];
