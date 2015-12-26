// This script copies src/index.html into /dist/index.html
// and replaces the trackJs placeholder with the actual trackJS code for use in production.
var fs = require('fs');

fs.readFile('src/index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  var trackJsCode = "<!-- BEGIN TRACKJS Note: This should be the first <script> on the page per https://my.trackjs.com/install --><script>window._trackJs = { token: '69ff2d61429a4c5da881a2026decd7d7' };</script><script src=https://d2zah9y47r7bi2.cloudfront.net/releases/current/tracker.js></script><!-- END TRACKJS -->";
  var result = data.replace(/<!--DO NOT REMOVE. KEEP AT TOP OF HEAD. TrackJS is inserted here during prod build-->/g, trackJsCode);

  fs.writeFile('dist/index.html', result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
