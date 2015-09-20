'use strict';

var app = angular.module('thaisMartins', ['ngRoute', 'ui.mask']);
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'app/views/main.html',
            controller: 'MainCtrl'
        })
        .otherwise({
            redirectTo: "/"
        });

    $locationProvider.html5Mode(true);
}]);

app.run(['$rootScope', 'MenuService',
            function($rootScope, MenuService) {

    $rootScope.activeMenu = false;
    $rootScope.menu = MenuService.getItems();
    $rootScope.toogleMenu = function() {
        $rootScope.activeMenu = !$rootScope.activeMenu;
    };
}]);