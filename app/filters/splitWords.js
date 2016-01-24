'use strict';

var app = angular.module('thaisMartins');
app.filter('splitWords', ['$sce',  function($sce) {
    return function(input, style) {

        var words = input.split(' ');

        if(words.length > 1) {
            words.forEach(function(word, index) {
                if(index == 0)
                    input = '<strong>' + word + '</strong><br>';
                else
                    input += ' ' + word;
            });
        }

        if(style == 'dot')
            input += '<span class="dot"></span>';

        return $sce.trustAsHtml(input);
    };
}]);