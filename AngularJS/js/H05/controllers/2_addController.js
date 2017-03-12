/**
 * Created by switch87 on 12/03/17.
 */
(function() {
    'use strict';

    angular.module('myApp')
        .controller('addController', addControllerfn);

    addControllerfn.$inject = ['personFactory', '$location'];
    function addControllerfn(personFactory, $location) {
        var vm = this;

        vm.addPerson = function() {
            var newPerson = {
                name: vm.person.name,
                lastname: vm.person.lastname,
                age: vm.person.age,
                email: vm.person.email
            };

            personFactory.addPerson(newPerson);

            // rederect home
            $location.path('/');
        }
    }
})();
