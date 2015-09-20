'use strict';

var app = angular.module('thaisMartins');
app.factory('MenuService', function () {

    var items = [
        {id: 1, name: 'Home', slug: 'home'},
        {id: 2, name: 'Sobre Mim', slug: 'sobre-mim'},
        {id: 3, name: 'Meus Trabalhos', slug: 'meus-trabalhos'},
        {id: 4, name: 'Contato', slug: 'contato'}
    ];

    return {
        getItems: function() {
            return items;
        }
    };
});