"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); // Runs a local dev server
var open = require('gulp-open'); // Open a URL in a web browser
var sass = require('gulp-sass'); // Compiles SASS to CSS
var browserify = require('browserify'); // Wraps npm modules so they can be run in the browser
var reactify = require('reactify');  // Transforms React JSX to JS
var babelify = require('babelify');  // Compile ES6 to ES5 using the Babel transform in Browserify
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat'); // Concatenates files
var lint = require('gulp-eslint'); // Lint JS files, including JSX
var mocha = require('gulp-mocha'); // Test JS
var babel = require('babel/register'); // Register Babel for Mocha
//TODO: Minify for prod
//var minify = require('minifyify'); // Minify JS
var buffer = require('vinyl-buffer'); // Convert from streaming to buffered vinyl object
var del = require('del');
var debug = require('gulp-debug'); // Useful for debugging Gulp
var shell = require('gulp-shell'); // Run shell commands from within gulp

var config = {
	port: 9005,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './src/*.html',
		js: [
			'./src/**/*.js',
			'!./src/**/*.spec.js'
		],
		css: [
      		'node_modules/bootstrap/dist/css/bootstrap.min.css',
      		'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
    	],
    	coverage: 'coverage',
    	tests: './src/**/*.spec.js',
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
		//.pipe(buffer()) //convert from streaming to buffered vinyl object
		//.pipe(minify())
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe(connect.reload());
});

//This task is useful for bundling css from libraries (like KendoUI, Bootstrap, etc)
//We should use SASS to write our own stylesheets.
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
	return gulp.src(config.paths.tests)
		.pipe(mocha());
});

//TODO: Figure out how to call this before shell task below.
gulp.task('clean-coverage', function(cb) {
    del(['coverage'], cb);
});

//alternative approach at https://gist.github.com/cgmartin/599fefffd6baa161c615
gulp.task('cover', shell.task(['npm run coverage-es6']));

gulp.task('watch', function() {
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js', 'lint', 'cover']);
	gulp.watch(config.paths.tests, ['test']);
	gulp.watch(config.paths.sass, ['sass']);
});

gulp.task('default', ['html', 'js', 'sass', 'lint', 'test', 'open', 'watch']);
