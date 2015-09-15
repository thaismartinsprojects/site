'use strict';

var app = angular.module('thaisMartins');
app.controller('MainCtrl', ['$scope', '$interval', '$http', 'SlideService', 'WorksService',
                    function ($scope, $interval, $http, SlideService, WorksService) {

    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

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
    $scope.currentWork = {};
    $scope.contact = {};
    $scope.showWork = false;
    $scope.showForm = false;
    $scope.viewWork = false;
    $scope.showAllSkills = false;
    $scope.contactSend = false;
    $scope.sendingContact = false;
    $scope.skillCurrent = 1;

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
