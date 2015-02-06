;(function() {
  'use strict';

  var gulp    = require('gulp');
  var $       = require('gulp-load-plugins');
  var del     = require('del');
  var fs      = require('fs-utils');
  var config = require('./lessons.json');
  var install = require("gulp-install");
  require('colors');

  var steps = { 1: {all : p('./1-environment-architect'), root:'./1-environment-architect'}
              , 2: {all : p('./2-angular-architect'    ), root:'./2-angular-architect'    }
              , 3: {all : p('./3-node-architect'       ), root:'./3-node-architect'       }
              , 4: {all : p('./4-express-architect'    ), root:'./4-express-architect'    }
              , 5: {all : p('./5-deploy-architect'     ), root:'./5-deploy-architect'     }
              }

  var banner = '['.blue+'architect'.bold.magenta +']'.blue+': ';

  gulp
    .task('default', function(done){
      done()
      showBanner()
      console.log(steps[1].all)
    })



  gulp
    .task('clean-2', clean(2))
    .task('clean-3', clean(3))
    .task('clean-4', clean(4))
    .task('clean-5', clean(5))

  gulp
    .task('step-2', ['clean-2'], task(2))
    .task('step-3', ['clean-3'], task(3))
    .task('step-4', ['clean-4'], task(4))
    .task('step-5', ['clean-5'], task(5))
    ;

  gulp
    .task('reset-2', reset(2))
    .task('reset-3', reset(3))
    .task('reset-4', reset(4))
    .task('reset-5', reset(5))
    ;

  function task(num) {
    return function() {

      fs.writeJSONSync('lessons.json', {lesson:num})
      console.log(banner + 'Please wait while I transfer your project ...'.bold.red)
      console.log(banner + 'This may take up to 30 s'.bold.red)
      return gulp.src(steps[num-1].all)
          .pipe(gulp.dest(steps[num].root))
    }
  }

  function reset(num) {
    return del.bind(null, [steps[num].root])
  }

  function clean(num) {
    return del.bind(null, [steps[num-1].root + '/build', steps[num-1].root + '/paths.json'])
  }

  function showBanner(){
    console.log()
    console.log()
    console.log()
    console.log()
    console.log()
    var current = ''+config.lesson.toString().bold.blue
    var next    = (Number(config.lesson)+1).toString();
    console.log(banner + 'You are currently on lesson '.cyan + current);
    console.log(banner + 'To begin Lesson '.cyan+ next.bold.blue+' please run '.cyan+'$ gulp step-'.bold.red+next.bold.red);
    console.log()
  }

  function p(str){
    return [str + '/**/*', str + '/.*'];
  }


})();