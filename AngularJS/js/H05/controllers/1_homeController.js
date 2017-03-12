// homeController.js
(function () {
    'use strict';
    angular.module('myApp')
        .controller('homeController', homeController);

    homeController.$inject = ['personFactory'];
    function homeController(personFactory) {
        var vm = this;
        vm.persons = personFactory.getPersons();
    }
})();