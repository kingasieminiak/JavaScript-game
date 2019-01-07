var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
    return gulp.src('styles/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'expanded',
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
});

gulp.task('watch', function() {
  gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('watch', function() {
    gulp.watch('scss/*.scss')
    .on('change', function(path, stats) {
        console.log(path);
    })
});