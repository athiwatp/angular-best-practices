/**
 * @author v.lugovsky
 * created on 09.12.2015
 */
(function() {
  'use strict';

  angular
    .module('angularBestPractices.backendList', [
      'ui.router'
    ])
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('backendList', {
        url: '/backendList',
        templateUrl: 'app/backendList/backendList.html',
        controller: 'BackendListController as vm',
        resolve: {
          thingsList: listResolve
        }
      });

  }

  /** @ngInject */
  function listResolve(things) {
    return things.list();
  }

})();
