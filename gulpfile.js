var gulp=require('gulp');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var minifyInline = require('gulp-minify-inline');
var eslint = require('gulp-eslint');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

var browserSync=require('browser-sync').create();
var reload = browserSync.reload;


gulp.task('run', ['watch'], function(){
	browserSync.init({
		server: 'src/'
	});
	browserSync.stream();
});

gulp.task('run-dist', ['default'], function(){
	browserSync.init({
		server: 'dist/'
	});
	browserSync.stream();
});

gulp.task('compress-js', function() {
	return gulp.src('src/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
	.pipe(reload({stream:true}));
});

gulp.task('minify-css', function() {
	return gulp.src('src/css/*.css')
	.pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
	.pipe(gulp.dest('dist/css'))
	.pipe(reload({stream:true}));
});

gulp.task('compress-html', function() {
	return gulp.src('src/*.html')
	.pipe(minifyInline())
	.pipe(minifyHTML())
	.pipe(gulp.dest('dist/'))
	.pipe(reload({stream:true}));
});

gulp.task('lint', function(){
	return gulp.src('src/js/*.js').pipe(eslint()).pipe(eslint.format());
});

gulp.task('copy-images', function(){
	return gulp.src('src/images/*.png').pipe(gulp.dest('dist/images'));
});

gulp.task('watch', function(){
	gulp.watch(['src/*.html'], ['compress-html']);
	gulp.watch(['src/css/*.css'], ['minify-css']);
	gulp.watch(['src/js/*.js'], ['compress-js']);
});

gulp.task('default', ['compress-html', 'compress-js', 'minify-css', 'copy-images', 'watch', 'run']);



