var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    minifyHTML = require('gulp-minify-html'),
    del = require('del'),
    sass = require('gulp-sass'),

    BASE_ASSETS = './sources/',
    BASE_JS = 'js/',
    BASE_CSS = 'scss/',
    DEST_CSS = 'css/',
    FILE_SUFFIX = '.min',
    DEST_ASSETS = './www/';

gulp.task('css', function() {
  return gulp.src(BASE_ASSETS + BASE_CSS + '*.scss')
    .pipe(sass({
      outputStyle: 'nested',
      errLogToConsole: true
    }))
    //.pipe(minifycss())
    .pipe(rename({dirname: DEST_CSS, suffix: FILE_SUFFIX}))
    .pipe(gulp.dest(DEST_ASSETS));
});

gulp.task('fonts', function() {
  return gulp.src(BASE_ASSETS + '**/*.ttf')
    .pipe(gulp.dest(DEST_ASSETS));
});

gulp.task('js', function() {
  return gulp.src(BASE_ASSETS + BASE_JS + '*.js')
    .pipe(uglify())
    .pipe(concat('index.js'))
    .pipe(rename({dirname: BASE_JS,suffix: FILE_SUFFIX}))
    .pipe(gulp.dest(DEST_ASSETS));
});

gulp.task('html', function() {
  return gulp.src('sources/*.html')
    .pipe(minifyHTML({comments:true, spare:true}))
    .pipe(gulp.dest(DEST_ASSETS));
});

gulp.task('clean', function() {
  del(['./www/*.html', './www/*.ttf', './www/css/*.css', './www/js/*.js'])
});

gulp.task('default', ['clean'], function() {
    gulp.start('html', 'css', 'fonts', 'js', 'watch');
});

gulp.task('watch', function() {
  gulp.watch(BASE_ASSETS + BASE_JS + '*.js', ['js']);
  gulp.watch(BASE_ASSETS + '*.html', ['html']);
  gulp.watch(BASE_ASSETS + BASE_CSS + '*.scss', ['css']);
});
