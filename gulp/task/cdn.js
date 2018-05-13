/**
 * @fileOverview deploy
 * @desc
 * @author bian17888 17/4/11 19:39
 */
//'use strict';
//
//var gulp = require('gulp');
//var del = require('del');
//
//var exec = require('child_process').exec;
//
//// 将静态资源copy到cdn发布目录
//gulp.task('cdn', ['cdn:clean'], function (cb) {
//  exec(
//    'cp -Rf ./build/index.html ../web/WEB-INF/connect/ && ' +
//    'cp -Rf ./build/* ../fe-cdn-build/ && ' +
//    'gulp clean',
//    function (err, stdout, stderr) {
//      console.log(stdout);
//      console.log(stderr);
//      cb(err);
//    });
//});
//
//// 清空 fe-cdn-build 文件夹
//gulp.task('cdn:clean', ['build'], function () {
//  var delConfig = ['../fe-cdn-build/*', '../web/WEB-INF/connect/*'];
//  del.sync(delConfig, {force: true});
//});
