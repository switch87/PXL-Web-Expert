// homeController.js
(function () {
    'use strict';
    angular.module('myApp')
        .controller('homeController', homeController);

    homeController.$inject = ['personService'];
    function homeController(personService) {
        var vm = this;
        vm.persons = personService.getPersons();
    }
})();