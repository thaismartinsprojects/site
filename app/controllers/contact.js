'use strict';

angular.module('thaisMartins')
.controller('ContactController', ['$scope', '$interval', '$http', 'SlideService', 'WorksService',
                    function ($scope, $interval, $http, SlideService, WorksService) {

    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

    // SLIDE
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


    $scope.works = WorksService.getItems();
    $scope.currentWork = {};
    $scope.contact = {};
    $scope.showWork = false;
    $scope.showForm = false;
    $scope.viewWork = false;
    $scope.showAllSkills = false;
    $scope.contactSend = false;
    $scope.sendingContact = false;
    $scope.skillCurrent = 'design';

    if(window.isMobile){
        $scope.showAllSkills = true;
    }

    $scope.seeWork = function(id){
        $scope.currentWork = WorksService.getItem(id);
        if($scope.currentWork)
            $scope.viewWork = true;
    };

    $scope.hideWork = function() {
        $scope.currentWork = false;
        $scope.viewWork = false;
    };

    $scope.sendEmail = function() {

        $scope.sendingContact = true;

        $http.post('app/server/mail.php', $scope.contact).success(function(response) {

            $scope.contactSend = true;
            $scope.sendingContact = false;

            $scope.success = (response.success) ? 'send' : 'error' ;
            $scope.message = response.message;
        });

    };
}]);
