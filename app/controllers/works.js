'use strict';

var app = angular.module('thaisMartins');
app.controller('WorksCtrl', ['$scope', 'WorksService',
                    function ($scope, WorksService) {

    $scope.works = WorksService.getItems();
    $scope.showWork = false;

}]);
