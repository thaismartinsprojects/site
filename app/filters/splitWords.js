'use strict';

var app = angular.module('thaisMartins');
app.filter('splitWords', ['$sce',  function($sce) {
    return function(input, style) {

        if(typeof input == 'undefined' || input == '') return false;
        var words = input.split(' ');

        words.forEach(function(word, index) {
            if(index == 0)
                input = '<strong>' + word + '</strong><br>';
            else
                input += ' ' + word;
        });

        if(style == 'dot')
            input += '<span class="dot"></span>';
        
        return $sce.trustAsHtml(input);
    };
}]);