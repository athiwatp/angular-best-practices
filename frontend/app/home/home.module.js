(function() {
  'use strict';

  angular
    .module('angularBestPractices.home', [
      'ui.router',

      'angularBestPractices.components'
    ])
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      });

  }

})();
