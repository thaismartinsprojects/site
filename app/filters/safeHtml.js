'use strict';

var app = angular.module('thaisMartins');
app.filter('safeHtml', ['$sce',  function($sce) {
    return function(input, hasDot) {

        if(typeof input == 'undefined' || input == '') return false;
        if(hasDot) input += '<span class="dot"></span>';
        
        return $sce.trustAsHtml(input);
    };
}]);