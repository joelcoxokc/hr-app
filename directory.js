(function(){
  var join = require('path').join;

  module.exports = function(dirname) {

    return {
      client  : {
                  root  : p('client')                      ,
                  app   : p('client', 'app')               ,
                  index : p('client', 'index.html')        ,
                  jade  : p('client', 'app', '**/*.jade') ,
                  html  : p('client', 'app', '**/*.html') ,
                  js    : p('client', 'app', '**/*.js'  ) ,
                  css   : p('client', 'app', '**/*.css' ) ,
                  styl  : {
                        index : p('client', 'app', 'index.styl'),
                        all   : p('client', 'app', '**/*.styl' )
                  }
               },
      vendor  : {
                  root  : p('build', 'vendor')                  ,
                  all   : p('build', 'vendor', '**/*')          ,
                  js    : p('build', 'vendor', 'js'   , '**/*') ,
                  css   : p('build', 'vendor', 'css'  , '**/*') ,
                  fonts : p('build', 'vendor', 'fonts', '**/*') ,
                  dir   : {
                        js    : p('build', 'vendor', 'js'   ) ,
                        css   : p('build', 'vendor', 'css'  ) ,
                        fonts : p('build', 'vendor', 'fonts')
                  }
      },
      build   : {
                  root      : p('build')                      ,
                  all       : p('build', '**/*')              ,
                  index     : p('build', 'index.html')        ,
                  templates : p('build', 'templates', '**/*') ,
                  scripts   : p('build', 'scripts'  , '**/*') ,
                  styles    : p('build', 'styles'   , '**/*') ,
                  vendor    : p('build', 'vendor'   , '**/*') ,
                  dir       : {
                            vendor    : p('build', 'vendor'   ) ,
                            styles    : p('build', 'styles'   ) ,
                            scripts   : p('build', 'scripts'  ) ,
                            templates : p('build', 'templates')
                  }
      },
      server: {
                root: p('server', 'index.js')
      },
    }

    function p() {
      var dirs = [dirname].concat(Array.prototype.slice.call(arguments));
      return join.apply(join, dirs)
    }
  }
})()
