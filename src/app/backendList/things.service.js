/**
 * @author v.lugovsky
 * created on 09.12.2015
 */
(function() {
  'use strict';

  angular.module('angularBestPractices.backendList')
    .service('things', things);

  /** @ngInject */
  function things($http) {

    var API_ROOT = '/api/things';

    this.list = function() {
      return $http.get(API_ROOT)
        .then(function(res) { return res.data; });
    };

    this.remove = function(id) {
      return $http.delete(API_ROOT + '/' + id);
    };

    this.add = function(newThing) {
      return $http.post(API_ROOT, newThing);
    };

  }
})();
