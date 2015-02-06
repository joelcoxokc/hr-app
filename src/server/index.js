(function() {
  'use strict';

  var express  = require('express');
  var reloader = require('connect-livereload');

  module.exports = function() {


    var app = express();

    app.use(reloader());
    app.use(express.static('./build'));
    app.listen(9000, function() {
      console.log('listening on port 9000');
    });
  }
})();