'use strict';

angular.module('thaisMartins')
.controller('WorksController', ['$scope', '$rootScope', '$filter', 'WorksService', function ($scope, $rootScope, $filter, WorksService) {

    $scope.works = $filter('orderBy')(WorksService.getItems(), '-id');
    $scope.showWork = false;

    $scope.seeWork = function(id){
        $rootScope.currentWork = WorksService.getItem(id);
    };

    $scope.hideWork = function() {
        $rootScope.currentWork = false;
    };
}]);
