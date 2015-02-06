module.exports = function($, gulp, paths){

  return {
    /**
     * @name            dev
     * @task            html:dev
     * @description     Create a stream from the ./src/client/app directory for all .html files
     *                  Pipe the .html files into ./build/html
     * @return {Stream}
     */
    dev: function(){
      var source = gulp.src(paths.client.html);
      var dest   = gulp.dest(paths.build.dir.html);

      return source
        .pipe( dest );
    },
    /**
     * @name            stage
     * @task            html:stage
     * @description     Create a stream from the ./src/client/app directory for all .html files
     *                  Pipe the templates through gulp-angularTemplatecache to turn them into angular templates
     *                  Concatinate the template.js files
     *                  Minify the Template Files
     *                  Pipe the .html files into ./build/html
     * @return {Stream}
     */
    stage: function(){}
  };
};