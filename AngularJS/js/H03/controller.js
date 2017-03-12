/**
 * Created by switch87 on 12/03/17.
 */

(function () {
    angular.module('myApp') // angular.module() fungeert als getter
        .controller('myController', function ($scope) {

            $scope.persons = [
                {name: 'John', lastname: 'Visser', age: '55', email: 'John@pxl.be'},
                {name: 'Bob', lastname: 'De Bouwer', age: '18', email: 'Bob@pxl.be'},
                {name: 'Nick', lastname: 'Sint Klaas', age: '33', email: 'Nick@pxl.be'}];

            $scope.showDetail = function (person) {
                $scope.mame = person.name;
                $scope.lastname = person.lastname;
                $scope.age = person.age;
                $scope.email = person.email;
            };

            $scope.showDetail($scope.persons[0]);

            $scope.reversed = true;
        })
});
