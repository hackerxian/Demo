var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');

gulp.task('minifyJS', function () {
	return gulp.src('js/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist'))
		.pipe(uglify())
		.pipe(rename('all.min.js'))
		.pipe(gulp.dest('dist'));
});

gulp.task('minifyCSS', function () {
	return gulp.src('css/*.css')
		.pipe(minifycss())
		.pipe(concat('all.min.css'))
		.pipe(gulp.dest('dist'));
});
// 注册缺省任务
gulp.task('default', ['minifyJS', 'minifyCSS']);