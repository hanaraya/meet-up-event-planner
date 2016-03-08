var gulp=require('gulp');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var minifyInline = require('gulp-minify-inline');
var concat = require('gulp-concat');
var eslint = require('gulp-eslint');


gulp.task('run', function(){
	var browserSync=require('browser-sync').create();
	browserSync.init({
		server: './'
	});
	browserSync.stream();
});

gulp.task('compress-js', function() {
	return gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dest/js'));
});

gulp.task('minify-css', function() {
	return gulp.src('css/*.css')
	.pipe(minifyCss({compatibility: 'ie8'}))
	.pipe(gulp.dest('dest/css'));
});

gulp.task('compress-index', function() {
	return gulp.src('index.html')
	.pipe(concat('index.html'))
	.pipe(minifyInline())
	.pipe(minifyHTML())
	.pipe(gulp.dest('dest/'));
});

gulp.task('lint', function(){
	return gulp.src('js/*.js').pipe(eslint()).pipe(eslint.format());
});

gulp.task('copy-other', function(){
	gulp.src(['*.html', '!index.html']).pipe(gulp.dest('dest'));
	gulp.src('images/*.png').pipe(gulp.dest('dest/images'));
});

gulp.task('default', ['compress-index', 'compress-js', 'minify-css', 'copy-other']);

