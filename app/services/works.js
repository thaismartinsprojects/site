'use strict';

var app = angular.module('thaisMartins');
app.factory('WorksService', function () {

    var items = [
        {id: 1, name: 'Viva Design Hostel', shortdescription: 'Criação do site institucional', path: 'vivahostel', images: [
            {id: 1, name: 'Home', image: 'home.jpg'},
            {id: 2, name: 'Conteúdo Interno', image: 'conteudo.jpg'},
            {id: 3, name: 'Listagem de Fotos', image: 'fotos.jpg'},
            {id: 4, name: 'Tour', image: 'tour.jpg'}
        ], tags: ['design', 'layout', 'html', 'css', 'javascript'], url: 'http://www.vivahostel.com.br/'},
        {id: 2, name: 'Apperone', shortdescription: 'Layout do Aplicativo', path: 'apperone', images: [
            {id: 1, name: 'Home', image: 'home.jpg'},
            {id: 2, name: 'Busca', image: 'busca.jpg'},
            {id: 3, name: 'Listagem de Estabelecimentos', image: 'lista.jpg'},
            {id: 4, name: 'Conteúdo Interno', image: 'detalhes.jpg'}
        ], tags: ['design'], url: ''},
        {id: 3, name: 'Mão na Roda', shortdescription: 'Criação do frontend', path: 'maonaroda', images: [
            {id: 1, name: 'Home', image: 'home.jpg'},
            {id: 2, name: 'Orçamento', image: 'orcamento.jpg'},
        ], tags: ['html', 'css', 'javascript', 'jquery', 'bootstrap'], url: ''}
    ];

    return {
        getItems: function() {
            return items;
        },
        getItem: function(id) {

            var result = false;
            items.forEach(function(elem) {
                if(elem.id == id)
                    result = elem;
            });

            return result;
        }
    };
});