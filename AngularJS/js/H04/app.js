/**
 * Created by switch87 on 12/03/17.
 */

(function () {
    angular.module('myApp', ['ngRoute'])
        .config(moduleConfig);

    moduleConfig.$inject = ['$routeProvider'];

    function moduleConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/3_home.html',
                controller: 'homeController',
                controllerAs: 'homeCtrl'
            })
            .when('/home', {
                templateUrl: 'views/3_home.html',
                controller: 'homeController',
                controllerAs: 'homeCtrl'
            })
            .when('/detail/:id', {
                templateUrl: 'views/4_detail.html',
                controller: 'detailController',
                controllerAs: 'detailCtrl'
            })
            .when('/about', {
                templateUrl: 'views/3_about.html',
                controller: 'aboutController',
                controllerAs: 'aboutCtrl'
            })
            .when('/404', {
                templateUrl: 'views/404.html'
            })
            .otherwise({
                redirectTo: '/404'
            });
    }
})();
