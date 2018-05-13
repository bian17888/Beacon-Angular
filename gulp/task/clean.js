/**
 * @fileOverview
 * @author bian17888 16/4/25 10:00
 */

// third parts
var gulp = require('gulp');

// user define
var utils = require('../utils/common')();
var config = require('../config')();

/**
 * clean-** : 删除文件
 */
gulp.task('clean', function () {
  var delConfig = [].concat(config.tmp, config.build, config.jsdoc.path);
  utils.clean(delConfig);
});
gulp.task('clean-code', function () {
  var delConfig = [].concat(
    config.tmp + '**/*.js',
    config.build + '**/*.html',
    config.build + 'js/**/*.js'
  );
  utils.clean(delConfig);
});
gulp.task('clean-templatecache', function () {
  utils.clean(config.tmp + 'templates.js');
});
gulp.task('clean-i18n', function () {
  utils.clean(config.tmp + config.i18n.file);
});

gulp.task('clean-styles', function () {
  utils.clean(config.tmp + '**/*.css');
});
gulp.task('clean-images', function () {
  utils.clean(config.buildContent + 'images/**/*.*');
});
gulp.task('clean-fonts', function () {
  utils.clean(config.build + 'fonts/**/*.*');
});
gulp.task('clean-libs', function () {
  utils.clean(config.build + 'libs/**/*.*');
});
gulp.task('clean-jsdoc', function () {
  utils.clean(config.jsdoc.path);
});
