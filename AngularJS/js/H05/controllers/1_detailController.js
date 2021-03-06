// detailController.js
(function () {
    'use strict';

    angular.module('myApp')
        .controller('detailController', detailController);

    detailController.$inject = ['$routeParams', 'personFactory'];


    function detailController($routeParams, personFactory) {
        var vm = this,
            id = $routeParams.id;
        vm.person = personFactory.getPerson(id); // -1 omdat array zero-based is (en de id's niet)

    }
})();
