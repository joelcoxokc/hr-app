(function() {
  'use strict';

  var express  = require('express');
  var join     = require('path').join;
  var reloader = require('connect-livereload');

  module.exports = function() {
    var app = express();

    app.use(reloader());

    app.use(express.static(join(__dirname, '../client')));
    app.use(express.static(join(__dirname, '../build')));
    app.use(express.static(join(__dirname, '../bower_components')));

    app.listen(9000, function() {
      console.log('listening on port 9000');
    });
  }
})();