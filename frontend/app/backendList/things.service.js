/**
 * @author v.lugovsky
 * created on 09.12.2015
 */
(function() {
  'use strict';

  angular.module('angularBestPractices.backendList')
    .service('things', things);

  /** @ngInject */
  function things($http, appConfig) {

    var THING_ROOT = appConfig.api.root + '/things';

    this.list = function() {
      return $http.get(THING_ROOT)
        .then(function(res) { return res.data; });
    };

    this.remove = function(id) {
      return $http.delete(THING_ROOT + '/' + id);
    };

    this.add = function(newThing) {
      return $http.post(THING_ROOT, newThing);
    };

  }
})();
