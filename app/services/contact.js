'use strict';

var app = angular.module('thaisMartins');
app.factory('ContactService', ['$http', 'RESOURCES', function ($http, RESOURCES) {

    var apiUrl = RESOURCES + '/accounts';
    $http.defaults.headers.post["Content-Type"] = "application/json";

    return {
        send: function(contact) {
            return $http.post(apiUrl, contact);
        }
    };
}]);