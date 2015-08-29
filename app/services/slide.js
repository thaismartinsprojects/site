'use strict';

var app = angular.module('thaisMartins');
app.factory('SlideService', function () {

    var items = [
        {id: 1, name: 'Desenvolvimento Web', description: 'Tenha um site para sua empresa', image: 'slide-4.png'},
        {id: 2, name: 'Sites Responsivos', description: 'Lorem ipsum, lorem, ipsum, lorem ipsum...', image: 'slide-1.png'},
        {id: 3, name: 'Desenvolvimento Web 3', description: 'Lorem ipsum, lorem, ipsum, lorem ipsum...', image: 'slide-1.png'}
    ];

    return {
        getItems: function() {
            return items;
        }
    };
});