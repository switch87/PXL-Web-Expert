/**
 * Created by switch87 on 12/03/17.
 */

(function (app) {
    app.controller('myController', myControllerFn)
        .controller('homeController', homeControllerFn)
        .controller('aboutController', aboutControllerFn)
        .controller('contactController', contactControllerFn)
    ;

    function myControllerFn() {

        var vm = this;
        vm.persons = [
            {name: 'John', lastname: 'Visser', age: '55', email: 'John@pxl.be'},
            {name: 'Bob', lastname: 'De Bouwer', age: '18', email: 'Bob@pxl.be'},
            {name: 'Nick', lastname: 'Sint Klaas', age: '33', email: 'Nick@pxl.be'}];

        vm.showDetail = function (person) {
            vm.name = person.name;
            vm.lastname = person.lastname;
            vm.age = person.age;
            vm.email = person.email;
        };

        vm.showDetail(vm.persons[0]);

        vm.reversed = true;
    }

    function homeControllerFn() {
        this.msg = 'Hello vanuit de homeController';
    }

    function aboutControllerFn() {
        this.msg = 'Hello vanuit de aboutController';
    }

    function contactControllerFn() {
        this.msg = 'Hello vanuit de contactController';
    }

})(angular.module('myApp')); // angular.module() fungeert als getter
