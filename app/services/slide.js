'use strict';

var app = angular.module('thaisMartins');
app.factory('SlideService', function () {

    var items = [
        {id: 1, name: 'Desenvolvimento Web', description: 'Para atingir novos clientes e aumentar o engajamento dos atuais, sua marca deve estar sempre atualizada e alinhada com os objetivos do seu negócio.', image: 'cms.jpg'},
        {id: 2, name: 'Sites Responsivos', description: 'O número de pessoas que acessam a internet através de dispositivos móveis cresce cada dia mais, por isso tenha um único site rodando em todos eles.', image: 'responsive.jpg'},
        {id: 3, name: 'Sistemas Web', description: 'Que tal mapear e automatizar os processos do seu negócio, tornando sua a operação ainda mais eficiente?', image: 'system.jpg'}
    ];

    return {
        getItems: function() {
            return items;
        }
    };
});