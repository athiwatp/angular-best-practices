(function() {
  'use strict';

  angular
    .module('angularBestPractices.about', [
      'ui.router'
    ])
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html'
      });

  }

})();
