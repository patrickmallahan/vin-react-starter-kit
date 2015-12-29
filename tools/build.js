var webpack = require('webpack');
var webpackConfigBuilder = require('../webpack.config');
var webpackConfig = webpackConfigBuilder('production');

console.log('Generating minified bundle for production use via Webpack...');

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Bundle generated at ' + webpackConfig.output.path);
  }
});
