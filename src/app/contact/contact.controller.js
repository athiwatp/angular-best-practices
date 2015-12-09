(function() {
  'use strict';

  angular.module('angularBestPractices.contact')
    .controller('ContactController', ContactController);

  /** @ngInject */
  function ContactController(contactFormModel, $state, toastr) {
    var vm = this;

    contactFormModel.initialize();

    vm.model = contactFormModel;

    vm.finishForm = function() {
      // Send contactFormModel to some backend
      toastr.success('Name and email submitted!');
      $state.go('home')
    };

    if ($state.current.name.indexOf('step1') === - 1) {
      $state.go('.step1');
    }

  }
})();
