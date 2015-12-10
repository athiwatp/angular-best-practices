/**
 * @author v.lugovsky
 * created on 09.12.2015
 */
(function() {
  'use strict';

  angular.module('angularBestPractices.backendList')
    .controller('BackendListController', BackendListController);

  /** @ngInject */
  function BackendListController(thingsList, things) {
    var vm = this;

    vm.thingsList = thingsList;
    vm.newItem = {};

    vm.removeThing = function(id) {
      things
        .remove(id)
        .then(function() {
          return things.list();
        })
        .then(function(newThings) {
          vm.thingsList = newThings;
        });
    };

    vm.addThing = function() {
      things
        .add(vm.newItem)
        .then(function() {
          vm.newItem = {};
          return things.list();
        })
        .then(function(newThings) {
          vm.thingsList = newThings;
        });
    };
  }
})();
