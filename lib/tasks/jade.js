module.exports = function($, gulp, paths){

  return {
    dev: function(){
      var source = gulp.src(paths.client.jade);
      var dest   = gulp.dest(paths.build.dir.html);

      return source
        .pipe($.plumber())
        .pipe($.jade())
        .pipe($.plumber.stop())
        .pipe( dest );
    },
    stage: function(){

    }
  };
};