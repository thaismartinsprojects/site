'use strict';

var app = angular.module('thaisMartins');
app.factory('ContactService', ['$http', 'RESOURCES', function ($http, RESOURCES) {

    var apiUrl = RESOURCES.API_URL + '/contact';
    $http.defaults.headers.post["Content-Type"] = "application/json";

    return {
        send: function(contact) {
            return $http.post(apiUrl, contact);
        }
    };
}]);