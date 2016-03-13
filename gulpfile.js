var gulp=require('gulp');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var minifyInline = require('gulp-minify-inline');
var eslint = require('gulp-eslint');


gulp.task('run', function(){
	var browserSync=require('browser-sync').create();
	browserSync.init({
		server: 'src/'
	});
	browserSync.stream();
});

gulp.task('run-dist', ['default'], function(){
	var browserSync=require('browser-sync').create();
	browserSync.init({
		server: 'dist/'
	});
	browserSync.stream();
});

gulp.task('compress-js', function() {
	return gulp.src('src/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});

gulp.task('minify-css', function() {
	return gulp.src('src/css/*.css')
	.pipe(minifyCss({compatibility: 'ie8'}))
	.pipe(gulp.dest('dist/css'));
});

gulp.task('compress-html', function() {
	return gulp.src('src/*.html')
	.pipe(minifyInline())
	.pipe(minifyHTML())
	.pipe(gulp.dest('dist/'));
});

gulp.task('lint', function(){
	return gulp.src('src/js/*.js').pipe(eslint()).pipe(eslint.format());
});

gulp.task('copy-images', function(){
	return gulp.src('src/images/*.png').pipe(gulp.dest('dist/images'));
});

gulp.task('default', ['compress-html', 'compress-js', 'minify-css', 'copy-images']);

