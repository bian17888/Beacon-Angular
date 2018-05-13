/**
 * @fileOverview deploy
 * @desc
 * @author bian17888 17/4/11 19:39
 */
'use strict';

var gulp = require('gulp');
var del = require('del');

var exec = require('child_process').exec;

// 复制 build文件夹到 WEB-INF 下;
// 将文件夹名改为 connect
// gulp.task('deploy', ['deploy:clean'], function (cb) {
//   exec(
//     'cp -Rf ./build/* ../web/WEB-INF/connect && ' +
//     'gulp clean',
//     function (err, stdout, stderr) {
//       console.log(stdout);
//       console.log(stderr);
//       cb(err);
//     });
// });

// 删除 WEB-INF/connect
// gulp.task('deploy:clean', ['build'], function () {
//   var delConfig = '../web/WEB-INF/connect/*';
//   del.sync(delConfig, {force: true});
// });
