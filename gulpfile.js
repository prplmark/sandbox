'use strict';

var gulp 		= require('gulp');  				// Base gulp package
var babelify	= require('babelify');				// Used to convert ES6 & JSX to ES5
var browserify 	= require('browserify'); 			// Providers "require" support, CommonJS
var notify 		= require('gulp-notify'); 			// Provides notification to both the console and Growel
var rename 		= require('gulp-rename'); 			// Rename sources
var sourcemaps 	= require('gulp-sourcemaps'); 		// Provide external sourcemap files
var livereload 	= require('gulp-livereload'); 		// Livereload support for the browser
var gutil 		= require('gulp-util'); 			// Provides gulp utilities, including logging and beep
var chalk 		= require('chalk'); 				// Allows for coloring for logging
var source 		= require('vinyl-source-stream'); 	// Vinyl stream support
var buffer 		= require('vinyl-buffer'); 			// Vinyl stream support
var watchify 	= require('watchify'); 				// Watchify for source changes
var merge 		= require('utils-merge'); 			// Object merge tool
var duration 	= require('gulp-duration'); 		// Time aspects of your gulp process
var sass        = require('gulp-sass');
var autoprefix 	= require('gulp-autoprefixer');


// Error reporting function
function mapError(err) {
  if (err.fileName) {
    // Regular error
    gutil.log(chalk.red(err.name)
      + ': ' + chalk.yellow(err.fileName.replace(__dirname + '/src/js/', ''))
      + ': ' + 'Line ' + chalk.magenta(err.lineNumber)
      + ' & ' + 'Column ' + chalk.magenta(err.columnNumber || err.column)
      + ': ' + chalk.blue(err.description));
  } else {
    // Browserify error..
    gutil.log(chalk.red(err.name)
      + ': '
      + chalk.yellow(err.message));
  }
}

// Completes the final file outputs
function bundle(bundler) {

  var bundleTimer = duration('Javascript bundle time');

  bundler
    .bundle()
    .on('error', mapError) 										// Map error reporting
    .pipe(source('app.js')) 									// Set source name
    .pipe(buffer()) 											// Convert to gulp pipeline
    .pipe(rename('build.js')) 									// Rename the output file
    .pipe(sourcemaps.init({loadMaps: true})) 					// Extract the inline sourcemaps
    .pipe(sourcemaps.write('./map')) 							// Set folder for sourcemaps to output to
    .pipe(gulp.dest('./build/')) 								// Set the output folder
    .pipe(notify({
		message: 'Generated file: <%= file.relative %>',
    })) 														// Output the file being created
    .pipe(bundleTimer) 											// Output time timing of the file creation
    .pipe(livereload()); 										// Reload the view in the browser
}

// Compile Sass
gulp.task('sass', function() {
    notify().write('Compiling Sass');
    return gulp.src('./stylesheets/styles.scss')
        .pipe(sass({
            style: 'compressed',
            errLogToConsole: false,
            onError: function(err) {
                return notify().write(err);
            }
        }))
	    .pipe(autoprefix('last 2 versions'))
        .pipe(rename('./styles.css'))
	    .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./'))
        .pipe(livereload());
});

//Watch task
gulp.task('watch',function() {
	livereload.listen();
	gulp.watch(['./stylesheets/*.scss'], ['sass']);
});

// Gulp task for build
gulp.task('default', ['watch', 'sass'], function() {

	var args = merge(watchify.args, { debug: true }); 				// Merge in default watchify args with browserify arguments
	var bundler = browserify('./app.js', args) 	  					// Browserify
		.plugin(watchify, {ignoreWatch: ['**/node_modules/**']}) 	// Watchify to watch source file changes
		.transform(
			babelify, {presets: ['es2015', 'react', 'stage-0']}
		);

	bundle(bundler); 												// Run the bundle the first time (required for Watchify to kick in)

	bundler.on('update', function() {
  		bundle(bundler); // Re-run bundle on source updates
	});

});