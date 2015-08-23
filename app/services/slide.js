'use strict';

var app = angular.module('thaisMartins');
app.factory('SlideService', function () {

    var items = [
        {id: 1, name: 'Desenvolvimento Web 1', description: 'Lorem ipsum, lorem, ipsum, lorem ipsum...', image: 'slide-1'},
        {id: 2, name: 'Desenvolvimento Web 2', description: 'Lorem ipsum, lorem, ipsum, lorem ipsum...', image: 'slide-1'},
        {id: 3, name: 'Desenvolvimento Web 3', description: 'Lorem ipsum, lorem, ipsum, lorem ipsum...', image: 'slide-1'}
    ];

    return {
        getItems: function() {
            return items;
        }
    };
});