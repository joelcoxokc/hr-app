module.exports = function($, gulp, paths){

  return {
    dev: function(){
      var source = gulp.src(paths.client.html);
      var dest   = gulp.dest(paths.build.dir.html);

      return source
        .pipe( dest );
    },
    stage: function(){}
  };
};