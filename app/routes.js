'use strict';

angular.module('thaisMartins', [
    'ngRoute',
    'ui.mask'
])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

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