//More info on Webpack's Node API here: https://webpack.github.io/docs/node.js-api.html
var webpack = require('webpack');
var webpackConfigBuilder = require('../webpack.config');
var webpackConfig = webpackConfigBuilder('production');
var colors = require('colors');
var argv = require('yargs').argv;
var inSilentMode = argv.s; //set to true when -s is passed on the command line

if (!inSilentMode) {
  console.log('Generating minified bundle for production use via Webpack...'.bold.blue);
}

var handleFatalError = function(error) {
  console.log(error.bold.red);
  return 1;
}

var handleWarnings = function(warnings) {
  console.log('Webpack generated the following warnings: '.bold.yellow);
  warnings.map(warning => console.log(warning.yellow));
};

var handleSoftErrors = function(errors) {
  errors.map(errors => console.log(error.red));
};

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    return handleFatalError(err);
  }

  var jsonStats = stats.toJson();

  if (jsonStats.errors.length > 0) {
    return handleSoftErrors(jsonStats.errors);
  }

  if (jsonStats.warnings.length > 0) {
    //For now, not displaying warnings. Seems like it's all noise.
    if (!inSilentMode) { //suppress warnings in silent mode.
      handleWarnings(jsonStats.warnings);
    }
  }

  //if we got this far, the build succeeded.
  console.log('Your app has been compiled in production mode and written to /dist. It\'s now ready for commit.'.green.bold);
  return 0;
});
