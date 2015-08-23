'use strict';

var app = angular.module('thaisMartins');
app.controller('MainCtrl', ['$scope', '$interval', 'SlideService',
                    function ($scope, $interval, SlideService) {

    var slides = SlideService.getItems();
    var id = 0;

    var showCurrentSlide = function() {
        if(id > (slides.length -1)) id = 0;
        $scope.slide = slides[id];
        id++;
    };

    $interval(showCurrentSlide, 50000);
    showCurrentSlide();
}]);
