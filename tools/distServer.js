// This file configures a web server for testing the production build
// on your local machine.

var browserSync = require('browser-sync');

// Run Browsersync
browserSync({
  port: 9080,
  ui: {
    port: 9081
  },
  server: {
    baseDir: 'dist'
  },

  files: [
    'src/*.html'
  ]
});
