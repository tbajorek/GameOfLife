var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var babelify = require('babelify');
var sass = require('gulp-sass');
var fontAwesome = require('node-font-awesome');

var dependencies = [
    'react',
    'react-dom'
];

gulp.task('scripts', function () {
	browserify({
		require: dependencies,
		debug: true
	})
	.bundle()
	.on('error', gutil.log)
	.pipe(source('vendors.js'))
	.pipe(gulp.dest('./js/'));

	browserify({
		entries: './app/app.js',
		debug: true
	})
	.transform("babelify", {presets: ["es2015", "react"]})
        .bundle()
        .on('error',gutil.log)
        .pipe(source('app.js'))
        .pipe(gulp.dest('./js/'));
});

gulp.task('sass', function () {
    return gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('sass-fa', function () {
    return gulp.src('./sass/fa/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function () {
    gulp.watch(['./app/*.js','./app/*/*.js','./app/*/*/*.js'], ['scripts']);
});

gulp.task('fonts', function() {
    gulp.src(fontAwesome.fonts)
        .pipe(gulp.dest('./app/fonts'));
});

gulp.task('sass:watch', function () {
    gulp.watch(['./sass/*.scss'], ['sass']);
});

gulp.task('sass-fa:watch', function () {
    gulp.watch(['./sass/fa/*.scss'], ['sass-fa']);
});

gulp.task('default', ['scripts','watch', 'sass:watch', 'sass-fa:watch']);
