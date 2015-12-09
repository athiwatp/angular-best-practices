/**
 * @author v.lugovsky
 * created on 01.12.2015
 */
(function() {
  'use strict';

  angular.module('angularBestPractices.i18n')
    .controller('TranslationController', TranslationCtrl);

  /** @ngInject */
  function TranslationCtrl($scope, $translate) {
    var vm = this;

    vm.someValue = 42;
    vm.controllerBoundTranslation = $translate.instant('CONTROLLER_BOUND_TRANSLATION');

    vm.price = 23790.65;
    vm.currencyOptions = {
      USD: { sign: '$', conversionRate: 1 },
      EUR: { sign: '€', conversionRate: 1.06 }
    };

    vm.availableCurrencies = Object.keys(vm.currencyOptions);
    vm.activeCurrency = vm.availableCurrencies[0];
  }
})();
