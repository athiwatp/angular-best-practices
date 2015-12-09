/**
 * @author v.lugovsky
 * created on 01.12.2015
 */
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('translateExtract', function () {
  return gulp.src(['src/app/**/*.html', 'src/app/**/*.js'])
    .pipe($.angularTranslateExtract({
      lang: ['en_US', 'de_DE'],
      dest: 'src/locales',
      prefix: 'locale-'
    }))
    .pipe(gulp.dest('src/locales'));
});
