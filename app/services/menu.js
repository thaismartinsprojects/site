'use strict';

var app = angular.module('thaisMartins');
app.factory('MenuService', function () {

    var items = [
        {id: 1, name: 'Home', slug: '/'},
        {id: 2, name: 'Sobre Mim', slug: 'about'},
        {id: 3, name: 'Meus Trabalhos', slug: 'works'},
        {id: 4, name: 'Contato', slug: 'contact'}
    ];

    return {
        getItems: function() {
            return items;
        }
    };
});