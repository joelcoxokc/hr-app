module.exports = function($, gulp, paths){

  return {
    dev: function(){
      var source = gulp.src(paths.client.images);
      var dest   = gulp.dest(paths.build.dir.images);

      return source
        .pipe($.imagemin({ optimizationLevel:3 }))
        .pipe( dest );
    },
    stage: function(){}
  };
};