/**
 * @author v.lugovsky
 * created on 09.12.2015
 */

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

var conf = require('./conf');

gulp.task('start-backend', function () {
  nodemon({
    script: conf.paths.backendRunScript,
    watch: conf.paths.backend,
    env: { 'NODE_ENV': 'development' }
  });
});
