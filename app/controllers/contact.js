'use strict';

angular.module('thaisMartins')
.controller('ContactController', ['$scope', 'ContactService', function ($scope, ContactService) {

    $scope.contact = {};
    $scope.showForm = false;
    $scope.contactSend = false;
    $scope.sendingContact = false;
    $scope.error = false;

    $scope.sendEmail = function() {

        if($scope.sendingContact) return false;

        $scope.sendingContact = true;
        $scope.error = false;

        ContactService.send($scope.contact)
        .then(function(response) {
            $scope.contactSend = true;
            $scope.sendingContact = false;
        })
        .catch(function(response) {
            $scope.error = true;
            $scope.message = response.message;
        });
    };
}]);
