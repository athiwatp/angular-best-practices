/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('angularBestPractices.components', [])
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
