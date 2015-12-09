(function() {
  'use strict';

  angular
    .module('angularBestPractices.contact', [
      'ui.router'
    ])
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact'
      })
      .state('contact.step1', {
        templateUrl: 'app/contact/contactStep1.html'
      })
      .state('contact.step2', {
        templateUrl: 'app/contact/contactStep2.html'
      });

  }

})();
