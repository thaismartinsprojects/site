'use strict';

var app = angular.module('thaisMartins');
app.controller('SlideController', ['$scope', '$interval', '$anchorScroll', '$location', 'SlideService', function ($scope, $interval, $anchorScroll, $location, SlideService) {

    $scope.allSlides = SlideService.getItems();
    var slidePosition = 0;

    var showSlide = function(nextSlide) {
        $scope.allSlides.forEach(function(slide){
            if(slide.id == nextSlide.id)
                $scope.currentSlide = slide.id;
        });
    };

    var showNextSlide = function() {
        if(slidePosition > ($scope.allSlides.length -1)) slidePosition = 0;
        showSlide($scope.allSlides[slidePosition]);
        slidePosition++;
    };

    //$interval(showNextSlide, 8000);
    showNextSlide();

    $scope.showSlide = function(nextSlide) {
        showSlide(nextSlide);
    };

    $scope.goToContact = function () {
        $location.hash('contact');
        $anchorScroll();
    };
}]);
