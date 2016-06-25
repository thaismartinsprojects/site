'use strict';

angular.module('thaisMartins')
.controller('WorksController', ['$scope', '$rootScope', 'WorksService', function ($scope, $rootScope, WorksService) {

    $scope.works = WorksService.getItems();
    $scope.showWork = false;

    $scope.seeWork = function(id){
        $rootScope.currentWork = WorksService.getItem(id);
    };

    $scope.hideWork = function() {
        $rootScope.currentWork = false;
    };
}]);
