'use strict';

var app = angular.module('thaisMartins', ['ngRoute', 'ui.mask']);
app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'app/views/main.html',
            controller: 'MainCtrl'
        })
        .otherwise({
            redirectTo: "/"
        });
}]);

app.run(['$rootScope', 'MenuService',
            function($rootScope, MenuService) {

    $rootScope.activeMenu = false;
    $rootScope.menu = MenuService.getItems();
    $rootScope.toogleMenu = function() {
        $rootScope.activeMenu = !$rootScope.activeMenu;
    };
}]);