/**
 * @author v.lugovsky
 * created on 30.11.2015
 */
(function() {
  'use strict';

  angular
    .module('angularBestPractices.i18n', [
      'ui.router'
    ])
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('translations', {
        url: '/translations?locale',
        templateUrl: 'app/i18n/translations.html',
        controller: 'TranslationCtrl as vm',
        resolve: {
          language: onTranslationsEnter
        }
      });

  }

  /** @ngInject */
  function onTranslationsEnter($stateParams, $translate) {
    return $translate.use($stateParams.locale || 'en_US');
  }

})();
