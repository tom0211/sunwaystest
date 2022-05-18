const purify = require("purify-css");
var content = [
  "E:/oneAgrow/sunwaysGlobal/public/js/main.js",
  "E:/oneAgrow/sunwaysGlobal/src/**/*.js",
  "E:/oneAgrow/sunwaysGlobal/src/**/*.html",
];
var css = ["E:/oneAgrow/sunwaysGlobal/src/App.css"];

var options = {
  output: "E:/oneAgrow/sunwaysGlobal/new.css",
  // Will minify CSS code in addition to purify.
  minify: true,
  info: true,

  // Logs out removed selectors.
  rejected: true,
};

purify(content, css, options);
