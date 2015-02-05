(function() {
  'use strict';

  /*  Dependencies  */
  var bower  = require('main-bower-files');
  var paths  = require('./directory.js')(__dirname);
  var gulp   = require('gulp');
  var del    = require('del');
  var $      = require('gulp-load-plugins')({lazy:false});


  /* Tasks */

  var tasks = Tasks();

 //================== DEV
gulp
  .task( 'default',
    $.sequence( 'clean'
              , 'build'
              , 'start'
              ))



// ====== VENDOR

gulp
  .task( 'vendor', tasks.vendor)

// ====== BUILD
gulp
  .task( 'templates' , tasks.templates)
  .task( 'scripts'   , tasks.scripts  )
  .task( 'styles'    , tasks.styles   )
  .task( 'build',
    $.sequence( 'templates'
              , 'scripts'
              , 'styles'))

// ====== START
gulp
  .task( 'inject' , tasks.inject )
  .task( 'server' , tasks.server )
  .task( 'watch'  , tasks.watch  )
  .task( 'start'  ,
    $.sequence( 'inject'
              , 'server'
              , 'watch'))

gulp
  .task('clean', del.bind(null, ['build']))


function Tasks() {
  return { templates : templates
         , scripts   : scripts
         , styles    : styles
         , inject    : inject
         , server    : server
         , watch     : watch
  }
  /////////////////

  function templates() {
    var files   = gulp.src(paths.client.jade);
    var dest    = gulp.dest( paths.build.dir.templates );

    return files
      .pipe($.plumber())
      .pipe($.jade())
      .pipe($.plumber.stop())
      .pipe( dest )
  }
  function scripts() {
    // select paths.client.js
    // place in paths.build.scripts

    var files = gulp.src(paths.client.js)
    var dest  = gulp.dest(paths.build.dir.scripts)

    return files
      .pipe( dest )
  }
  function styles() {
    var files = gulp.src(  paths.client.styl.index);
    var dest  = gulp.dest( paths.build.dir.styles );

    return files
      .pipe($.plumber())
      .pipe($.stylus())
      .pipe($.concat('app.css'))
      .pipe($.plumber.stop())
      .pipe( dest )
  }
  function inject() {
    var target = gulp.src( paths.client.index );
    var dest   = gulp.dest( paths.client.root );
    var files  = {
        vendor    : gulp.src(bower()               , {read:false}),
        scripts   : gulp.src(paths.client.js       , {read:false}),
        styles    : gulp.src(paths.build.styles    , {read:false}),
        templates : gulp.src(paths.build.templates , {read:false})
    }
    return target
      .pipe($.inject(files.vendor,     {ignorePath:'bower_components', name:'vendor'}))
      .pipe($.inject(files.scripts,    {relative:true}))
      .pipe($.inject(files.styles,     {ignorePath:'build'}))
      .pipe($.inject(files.templates), {ignorePath:'build', name:'templates'})
      .pipe( dest );
  }
  function server() {
    require('./server')(__dirname)
  }
  function watch() {
    $.livereload();
    $.livereload.listen();
    gulp.watch(paths.client.jade,     ['templates', $.livereload.reload]);
    gulp.watch(paths.client.js,       ['scripts'  , $.livereload.reload]);
    gulp.watch(paths.client.css,      ['styles'   , $.livereload.reload]);
    gulp.watch(paths.client.styl.all, ['styles'   , $.livereload.reload]);
  }

}



})();