'use strict';

angular.module('thaisMartins')
.controller('SkillsController', ['$scope', 'SkillsService', function ($scope, SkillsService) {

    $scope.skills = SkillsService.getAll();
    var current = 0;

    $scope.showAllSkills = window.isMobile;
    // $scope.skill = skills[current];
    //
    // $scope.prevSkill = function() {
    //
    //     current--;
    //     if(current < 0)current = (skills.length - 1);
    //     $scope.skill = skills[current];
    // };
    //
    // $scope.nextSkill = function() {
    //
    //     current++;
    //     if(current > (skills.length - 1)) current = 0;
    //     $scope.skill = skills[current];
    // };

}]);
