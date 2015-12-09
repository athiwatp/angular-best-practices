/**
 * @author v.lugovsky
 * created on 09.12.2015
 */
'use strict';

//var errors = require('./components/errors');
var config = require('./config/environment');

module.exports = function(app) {

  // Insert routes below
  app.use(config.routePrefix + '/things', require('./api/thing'));

};
