var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
var rename = require('gulp-rename');
var cssimport = require("gulp-cssimport");
var sourcemaps = require('gulp-sourcemaps');
var options = {};

/*------------------------------------SASS FILE------------------------------------------*/

/*frontend*/
gulp.task('sass', function () {
    return gulp.src('site/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: '.min'
        })).pipe(gulp.dest('custom/css/'));
});

gulp.task('sass:watch', function () {
    return gulp.watch('site/**/*.scss', ['sass']);
});

/*-------------------------------CSS FILES-----------------------------------------*/

/*------------------------------WATCHER--------------------------------------------------*/

gulp.task('default', ['sass']);
gulp.task('watch', ['sass:watch']);
