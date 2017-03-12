(function () {
    'use strict';
    // 1. Module definieren
    angular.module('myApp', ['ngRoute'])
        .config(moduleConfig);

    // 2. Inject dependencies
    moduleConfig.$inject = ['$routeProvider'];

    // 3. Routes configureren
    function moduleConfig($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/2_home.html',
            controller: 'homeController',
            controllerAs: 'homeCtrl'
        })
            .when('/home', {
                templateUrl: 'views/2_home.html',
                controller: 'homeController',
                controllerAs: 'homeCtrl'
            })
            .when('/detail/:id', {
                templateUrl: 'views/4_detail.html',
                controller: 'detailController',
                controllerAs: 'detailCtrl'
            })
            .when('/add', {
                templateUrl: 'views/1_addperson.html',
                controller: 'addController',
                controllerAs: 'addCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();