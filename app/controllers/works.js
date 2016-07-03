'use strict';

angular.module('thaisMartins')
.controller('WorksController', ['$scope', '$rootScope', '$location', '$anchorScroll', '$filter', 'WorksService', function ($scope, $rootScope, $location, $anchorScroll, $filter, WorksService) {

    $scope.works = $filter('orderBy')(WorksService.getItems(), '-id');
    $scope.showWork = false;

    $scope.seeWork = function(id){
        $rootScope.currentWork = WorksService.getItem(id);
    };

    $scope.hideWork = function() {
        $rootScope.currentWork = false;
    };

    $scope.seeWorkImage = function(image){
        $rootScope.currentWorkImage = image;
        var content = $('body, html');
        content.scrollTop(content.height()).animate({ scrollTop: 0});
    };

    $scope.hideWorkImage = function() {
        $rootScope.currentWorkImage = false;
        $location.hash('works');
        $anchorScroll();
    };
}]);
