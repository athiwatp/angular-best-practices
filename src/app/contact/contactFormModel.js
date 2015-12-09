(function() {
  'use strict';

  angular.module('angularBestPractices.contact')
    .factory('contactFormModel', contactFormModel);

  /** @ngInject */
  function contactFormModel() {

    var model = {
      name: null,
      email: null,

      initialize: initialize
    };

    return model;

    function initialize() {
      model.name = '';
      model.email = '';
    }

  }
})();
