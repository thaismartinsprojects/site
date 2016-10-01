'use strict';

var app = angular.module('thaisMartins');
app.controller('SlidesController', ['$scope', '$timeout', '$anchorScroll', '$location', 'SlideService', function ($scope, $timeout, $anchorScroll, $location, SlideService) {

    $scope.isLoaded = false;
    $scope.allSlides = SlideService.getItems();
    var slidePosition = -1;

    var showSlide = function(nextSlide) {
        $scope.allSlides.forEach(function(slide) {
            if(slide.id == nextSlide.id) {
                $scope.currentSlide = slide.id;
            }
        });
    };

    $scope.showSlide = function(nextSlide, position) {
        slidePosition = position;
        showSlide(nextSlide);
    };

    $scope.showNextSlide = function() {

        slidePosition++;
        if(slidePosition > ($scope.allSlides.length - 1))
            slidePosition = 0;

        showSlide($scope.allSlides[slidePosition]);
    };

    $scope.showPrevSlide = function() {

        slidePosition--;
        if(slidePosition < 0)
            slidePosition = ($scope.allSlides.length - 1);
        showSlide($scope.allSlides[slidePosition]);
    };

    $scope.goToContact = function () {
        $location.hash('contact');
        $anchorScroll();
    };

    $timeout(function() {
        $scope.isLoaded = true;
    }, 300);
    // $interval($scope.showNextSlide, 8000);
    $scope.showNextSlide();
}]);
