// detailController.js
(function () {
    'use strict';

    angular.module('myApp')
        .controller('detailController', detailController);

    detailController.$inject = ['$routeParams', 'personService'];


    function detailController($routeParams, personService) {
        var vm = this,
            id = $routeParams.id;
        vm.person = personService.getPerson(id); // -1 omdat array zero-based is (en de id's niet)

    }
})();
