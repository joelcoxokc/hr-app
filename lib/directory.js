(function() {
  'use strict';
  var path     = require('path')
  var fs       = require('fs-utils');
  var _        = require('lodash');

  module.exports = function() {

    var paths = { root  : join('')
                , server: { root     : join('src', 'server')
                          }
                , client: { root     : join('src', 'client')
                          , index    : join('src', 'client', 'index.html')
                          , js       : join('src', 'client', 'app', '**/*.js')
                          , css      : join('src', 'client', 'app', '**/*.css')
                          , jade     : join('src', 'client', 'app', '**/*.jade')
                          , html     : join('src', 'client', 'app', '**/*.html')
                          , styl     : { all  : join('src', 'client', 'app', '**/*.styl')
                                       , index: join('src', 'client', 'app', 'index.styl')}
                          }
                , build:  { root   : join('build')
                          , index  : join('build', 'index.html')
                          , js     : join('build', 'js'     , '**/*.js')
                          , css    : join('build', 'css'    , '**/*.css')
                          , html   : join('build', 'html'   , '**/*.html')
                          , vendor : join('build', 'vendor' , '**/*')
                          , dir   : { js     : join('build', 'js')
                                    , css    : join('build', 'css')
                                    , html   : join('build', 'html')
                                    , vendor : join('build', 'vendor')
                                    }
                          }
                }



    fs.writeJSONSync(join('paths.json'), paths);


    function join(){
      var dirs = [__dirname, '/..'].concat(Array.prototype.slice.call(arguments));
      return path.join.apply(path.join, dirs);
    }
  };

})()