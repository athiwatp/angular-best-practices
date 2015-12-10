/**
 * @author v.lugovsky
 * created on 10.12.2015
 */
/**
 * Express configuration
 */

'use strict';

var compression = require('compression');
var bodyParser = require('body-parser');

module.exports = function(app) {
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
};
