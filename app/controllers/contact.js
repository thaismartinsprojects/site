'use strict';

angular.module('thaisMartins')
.controller('ContactController', ['$scope', '$interval', '$http', 'SlideService', 'WorksService',
                    function ($scope, $interval, $http, SlideService, WorksService) {

    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

    $scope.contact = {};
    $scope.showForm = true;
    $scope.contactSend = false;
    $scope.sendingContact = false;

    $scope.sendEmail = function() {

        if($scope.sendingContact) {
            $scope.contactSend = true;
            $scope.sendingContact = false;
        } else {
            $scope.sendingContact = true;
        }

        $http.post('app/server/mail.php', $scope.contact).success(function(response) {

            $scope.contactSend = true;
            $scope.sendingContact = false;

            $scope.success = (response.success) ? 'send' : 'error' ;
            $scope.message = response.message;
        });

    };
}]);
