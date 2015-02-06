;(function() {
  'use strict';

  var gulp = require('gulp');
  var $    = require('gulp-load-plugins');
  var del  = require('del');
  var steps = { 1: {all : p('./1-environment-architect'), root:'./1-environment-architect'}
              , 2: {all : p('./2-angular-architect'    ), root:'./2-angular-architect'    }
              , 3: {all : p('./3-node-architect'       ), root:'./3-node-architect'       }
              , 4: {all : p('./4-express-architect'    ), root:'./4-express-architect'    }
              , 5: {all : p('./5-deploy-architect'     ), root:'./5-deploy-architect'     }
              }

  gulp
    .task('step-2', task(2))
    .task('step-3', task(3))
    .task('step-4', task(4))
    .task('step-5', task(5))
    ;

  gulp
    .task('reset-2', reset(2))
    .task('reset-3', reset(3))
    .task('reset-4', reset(4))
    .task('reset-5', reset(5))
    ;


  function task(num) {
    return function() {
      return gulp.src(steps[num-1].all)
          .pipe(gulp.dest(steps[num].root))
    }
  }

  function reset(num) {
    return del.bind(null, [steps[num].root+'/**/*'])
  }


  function p(str){
    return [str + '/**/*', str +'/**/.*', '!'+str+'/build', '!'+str+'/paths.json'];
  }


})();