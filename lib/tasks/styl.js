module.exports = function($, gulp, paths){

  return {
    /**
     * @name            dev
     * @task            styl:dev
     * @description     Create a stream from the ./src/client/app/index.styl file
     *                  Pipe the .styl file through gulp-plumber to keep the command-line from shutting down due to errors
     *                  Compile the stylus files into css files
     *                  Run gulp-autoprefixer which prefixes any css properties requiring -webkit- and -moz- -mz- -o-
     *                  Rename the file to stylus.css
     *                  Stop gulp-plumber
     *                  Pipe the file into ./build/css
     * @return {Stream}
     */
    dev: function(){
      var source = gulp.src(paths.client.styl.index);
      var dest   = gulp.dest(paths.build.dir.css);

      return source
        .pipe($.plumber())
        .pipe($.stylus())
        .pipe($.autoprefixer())
        .pipe($.rename('stylus.css'))
        .pipe($.plumber.stop())
        .pipe( dest );
    },
    /**
     * @name            stage
     * @task            styl:stage
     * @description     Create a stream from the ./src/client/app/index.styl file
     *                  Compile the stylus files into css files
     *                  Run gulp-autoprefixer which prefixes any css properties requiring -webkit- and -moz- -mz- -o-
     *                  Rename the file to stylus.min.css
     *                  Pipe the file into ./build/css
     * @return {Stream}
     */
    stage: function(){}
  };
};