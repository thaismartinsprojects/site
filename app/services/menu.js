'use strict';

var app = angular.module('thaisMartins');
app.factory('MenuService', function () {

    var items = [
        {id: 1, name: 'Home', slug: 'home'},
        {id: 2, name: 'Sobre Mim', slug: 'about'},
        {id: 3, name: 'Serviços', slug: 'skills'},
        {id: 4, name: 'Portfólio', slug: 'works'},
        {id: 5, name: 'Contato', slug: 'contact'}
    ];

    return {
        getItems: function() {
            return items;
        }
    };
});