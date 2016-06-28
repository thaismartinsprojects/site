'use strict';

angular.module('thaisMartins')
.controller('SkillsController', ['$scope', function ($scope) {

    $scope.showAllSkills = false;
    $scope.skillCurrent = 'design';

    if(window.isMobile){
        $scope.showAllSkills = true;
    }

}]);
