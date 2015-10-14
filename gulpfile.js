"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); // Runs a local dev server
var open = require('gulp-open'); // Open a URL in a web browser
var sass = require('gulp-sass'); // Compiles SASS to CSS
var browserify = require('browserify'); // Bundles JS
var reactify = require('reactify');  // Transforms React JSX to JS
var babelify = require('babelify');  // Compile ES6 to ES5 using Browserify
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat'); // Concatenates files
var lint = require('gulp-eslint'); // Lint JS files, including JSX
var mocha = require('gulp-mocha'); //Test JS
var babel = require('babel/register'); //Register Babel for Mocha

var config = {
	port: 9005,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './src/*.html',
		js: [
			'./src/**/*.js',
			'!./src/**/*Spec.js'
		],
		css: [
      		'node_modules/bootstrap/dist/css/bootstrap.min.css',
      		'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
    	],
    	sass: './src/styles/*.sass',
		dist: './dist',
		mainJs: './src/main.js'
	}
}

//Start a local development server
gulp.task('connect', function() {
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

gulp.task('sass', function () {
  gulp.src(config.paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.paths.dist + '/css/'))
	.pipe(connect.reload());
});

gulp.task('open', ['connect'], function() {
	gulp.src('dist/index.html')
		.pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function() {
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

gulp.task('js', function() {
	browserify(config.paths.mainJs)
		.transform(babelify)
		.transform(reactify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe(connect.reload());
});

// gulp.task('css', function() {
// 	gulp.src(config.paths.css)
// 		.pipe(concat('bundle.css'))
// 		.pipe(gulp.dest(config.paths.dist + '/css'));
// });

gulp.task('lint', function() {
	return gulp.src(config.paths.js)
		.pipe(lint({config: 'eslint.config.json'}))
		.pipe(lint.format());
});

gulp.task('test', function() {
	return gulp.src('./src/**/*Spec.js')
		.pipe(mocha());
})

gulp.task('watch', function() {
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js', 'lint', 'test']);
	gulp.watch(config.paths.sass, ['sass']);
});

gulp.task('default', ['html', 'js', 'sass', 'lint', 'test', 'open', 'watch']);
