var gulp = require('gulp')
    , concat = require('gulp-concat')
    , compass = require('gulp-compass')
    , minifyCSS = require('gulp-minify-css')
    , runSequence = require('run-sequence');

var buildDir = 'dist';

gulp.task('vendorCSS', function() {
    return gulp.src(apps)
      .pipe(concat('vendor.css'))
      .pipe(minifyCSS())
      .pipe(gulp.dest('./app/assets/css'));
  });

gulp.task('compass', function() {
    gulp.src('./app/assets/**/*.scss')
      .pipe(compass({
        config_file: './config.rb',
        css: './app/assets/css',
        sass: './app/assets/sass'
      }))
      .pipe(minifyCSS())
      .pipe(gulp.dest('./app/assets/css'));
  });

gulp.task('default', function(callback){
    runSequence('vendorCSS', 'compass', callback);
})