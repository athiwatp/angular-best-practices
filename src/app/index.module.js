(function() {
  'use strict';

  angular
    .module('angularBestPractices', [

      /* Library dependencies */
      'ui.router',
      'ui.bootstrap',
      'toastr',
      'pascalprecht.translate',

      /* Module dependencies */
      'angularBestPractices.components',
      'angularBestPractices.home',
      'angularBestPractices.about',
      'angularBestPractices.contact',
      'angularBestPractices.i18n'
    ])
    .config(routerConfig)
    .run(runBlock);

  /** @ngInject */
  function routerConfig($urlRouterProvider, $translateProvider) {
    $urlRouterProvider.otherwise('/home');

    $translateProvider.addInterpolation('$translateMessageFormatInterpolation');
    $translateProvider.useStaticFilesLoader({
      prefix: 'locales/locale-',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('en_US');
  }

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
