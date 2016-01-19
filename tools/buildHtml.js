// This script copies src/index.html into /dist/index.html
// and replaces the trackJs placeholder with the actual trackJS code for use in production.
var fs = require('fs');
var colors = require('colors');
var cheerio = require('cheerio');

fs.readFile('src/index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  var trackJsCode = "<script>window._trackJs = { token: '69ff2d61429a4c5da881a2026decd7d7' };</script><script src=https://d2zah9y47r7bi2.cloudfront.net/releases/current/tracker.js></script>";
  var $ = cheerio.load(data);
  $('head').prepend(trackJsCode); //add TrackJS tracking code to the top of <head> as suggested in their docs.

  fs.writeFile('dist/index.html', $.html(), 'utf8', function (err) {
    if (err) return console.log(err);
  });

  console.log('index.html written to /dist'.green);
});
