'use strict';

var app = angular.module('thaisMartins');
app.factory('MenuService', function () {

    var items = [
        {id: 1, name: 'Home', slug: 'home'},
        {id: 2, name: 'Quem Sou', slug: 'sobre-mim'},
        {id: 3, name: 'Serviços', slug: 'servicos'},
        {id: 4, name: 'Meus Trabalhos', slug: 'trabalhos'},
        {id: 5, name: 'Contato', slug: 'contato'}
    ];

    return {
        getItems: function() {
            return items;
        }
    };
});