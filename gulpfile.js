// Vanillatop : Lightweight plugin in vanilla javascript to animate scrolling to the top of the page.
//
// @package    vanillatop
// @version    v1.0.6
// @author     Bernard Collet <webmaster@russianconcept.com>
// @copyright (c) 2019 Bernard Collet
// @license    MIT <https://opensource.org/licenses/MIT>
// @link       https://github.com/bernydole/vanillatop
//
"use strict";
const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-dart-sass");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");

function scss() {
  return src("src/**/*.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(dest("./dist"));
}

function scss_min() {
  return src("src/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(autoprefixer())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("./dist"));
}

function js() {
  return src("src/**/*.js")
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("./dist"));
}

exports.scss = scss;
exports.scss_min = series(scss, scss_min);
exports.js = js;

exports.watch_scss = function () {
  watch("src/**/*.scss", scss);
};
