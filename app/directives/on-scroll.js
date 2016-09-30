'use strict';

var app = angular.module('thaisMartins');
app.directive('onScroll', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {

            if(typeof attr.onScroll == 'undefined') return false;

            $(window).scroll(function() {
                var startPosition = $(element).offset().top - ($(window).height() / 1.5);
                var position = $(window).scrollTop();

                if(position >= startPosition)
                    $(element).addClass( attr.onScroll );
                else
                    $(element).removeClass( attr.onScroll );
            });
        }
    };
});