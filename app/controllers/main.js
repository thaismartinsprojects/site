'use strict';

var app = angular.module('thaisMartins');
app.controller('MainCtrl', ['$scope', '$interval', 'SlideService', 'WorksService',
                    function ($scope, $interval, SlideService, WorksService) {

    var slides = SlideService.getItems();
    var id = 0;

    var showCurrentSlide = function() {
        if(id > (slides.length -1)) id = 0;
        $scope.slide = slides[id];
        id++;
    };

    $interval(showCurrentSlide, 5000);
    showCurrentSlide();

    $scope.works = WorksService.getItems();
    $scope.showWork = false;
    $scope.showForm = false;
    $scope.skillCurrent = 1;
    $scope.showAllSkills = false;

    $scope.nextSkill = function() {

        var next = ($scope.skillCurrent + 1);
        if(next > 5)
            next = 1;

        $scope.skillCurrent = next;
    };

    $scope.prevSkill = function() {

        var next = ($scope.skillCurrent - 1);
        if(next == 0)
            next = 5;

        $scope.skillCurrent = next;
    };

    if(window.isMobile){
        $scope.showAllSkills = true;
    }

}]);
