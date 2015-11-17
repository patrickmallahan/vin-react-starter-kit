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
		sass: './src/styles/*.scss',
		dist: './dist',
		mainJs: './src/main.js'
	}
}

//Start a local development server
//Run related build tasks first to assure that the files
//we want to serve are available.
gulp.task('connect', ['html', 'js', 'sass', 'lint-test'], function() {
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
	//or, can run this on command line to compile babel, minify, and create separate bundle
	//browserify ./src/main.js -d -t [ babelify ] -p [minifyify --map bundle.map.json --output ./dist/scripts/bundle.map.json] > ./dist/scripts/bundle.js

	var bundler = new browserify({debug: true});
	bundler.add(config.paths.mainJs);
	bundler.transform('babelify');

	//Note that while a sourcemap is always generated,
	//this only minifies when the NODE_ENV is prod.
	//We're not minifying for the default (dev) task to speed builds.
	//The sourcemap is always generated because it's still
	//useful even without minification so that the original ES6 
	//is displayed when debugging in the browser.
	bundler.plugin('minifyify', 
		{
			map: 'bundle.map.json',
			output: './dist/scripts/bundle.map.json',
			minify: process.env.NODE_ENV == 'production'
		}
	);

	bundler.bundle(function (err, src, map) {
	  // Can optionally add code here 
	})
	.on('error', console.error.bind(console))
	.pipe(source('bundle.js'))
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
		.pipe(lint({config: '.eslintrc'}))
		.pipe(lint.format());
});

gulp.task('test', function() {
	return gulp.src(config.paths.tests)
		.pipe(mocha());
});

gulp.task('lint-test', ['lint'], function() {
	return gulp.src(config.paths.tests)
		.pipe(mocha());
});

/*This task simply calls a command stored in package.json.
  It uses Mocha with Istanbul to run tests and create code coverage reports.
  This version runs coverage on the code *after* it's compiled to ES5 by Babel
  This means the resulting reports in /coverage show *compiled* code. 
  This makes the reports from this pretty useless, though the coverage
  numbers are generally valid.
  Advantages: 
	+ Output is colored, even when run from Gulp
	+ More friendly error messages than ES6 version below when code can't be compiled

	Alternative approach at https://gist.github.com/cgmartin/599fefffd6baa161c615
*/
gulp.task('coverage-es5', shell.task(['npm run coverage']));

/*This task simply calls a command stored in package.json.
  This version runs coverage on the code *before* it's compiled to ES5 by Babel
  It uses Isparta, which is a wrapper over Istanbul project that supports code coverage for ES6.
  Since this shows code coverage numbers on the code you wrote, it should be used as the default
  because its stats are obviously most accurate. However, if you're having issues, the test task
  above often produces more useful error messages, but with slightly less accurate code coverage
  information since the code coverage is calculated on the compiled ES5 code instead of the ES6 you wrote. 
  Note: This command throws a "transformation error" because I have to reference the full path to _mocha
  in this command to make windows happy (see the coverage-es6 task in package.json). On Mac, I can
  run _mocha without a path just fine because it lands properly in .bin there.
  Istanbul may add a preloader for ES6 in the future. https://github.com/douglasduteil/isparta/issues/31
  Advantages:
	+ Reports in coverage show the actual code you wrote (instead of your code compiled down to ES5).
*/
gulp.task('coverage-es6', shell.task(['npm run coverage-es6']));

gulp.task('open-coverage', function() {
	gulp.src('coverage/lcov-report/index.html')
		.pipe(open());
});

gulp.task('coverage', ['coverage-es6', 'open-coverage']);

gulp.task('lint-test-cover', ['lint-test', 'coverage']);

gulp.task('watch', function() {
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js', 'lint-test']);
	gulp.watch(config.paths.tests, ['lint-test']);
	gulp.watch(config.paths.sass, ['sass']);
});

gulp.task('setup-prod-environment', function () {
    process.stdout.write("Setting NODE_ENV to 'production'" + "\n");
    process.env.NODE_ENV = 'production';
    if (process.env.NODE_ENV != 'production') {
        throw new Error("Failed to set NODE_ENV to production!");
    }
});

gulp.task('default', ['open', 'watch']);

gulp.task('build', ['setup-prod-environment', 'open', 'watch', 'coverage']);
