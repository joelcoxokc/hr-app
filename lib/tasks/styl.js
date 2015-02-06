module.exports = function($, gulp, paths){

  return {
    dev: function(){
      var source = gulp.src(paths.client.styl.index);
      var dest   = gulp.dest(paths.build.dir.css);

      return source
        .pipe($.plumber())
        .pipe($.stylus())
        .pipe($.autoprefixer())
        .pipe($.concat('stylus.css'))
        .pipe($.plumber.stop())
        .pipe( dest );
    },
    stage: function(){
      var source = gulp.src(paths.client.styl.index);
      var dest   = gulp.dest(paths.build.dir.css);

      return source
        .pipe($.stylus())
        .pipe($.autoprefixer())
        .pipe($.concat('stylus.min.css'))
        .pipe($.minifyCss())
        .pipe( dest );
    }
  };
};