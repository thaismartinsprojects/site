'use strict';

var app = angular.module('thaisMartins');
app.factory('WorksService', function () {

    var items = [
        {id: 1, name: 'Viva Design Hostel', shortdescription: 'Criação da marca e site institucional', path: 'vivahostel',
        description: 'Cuidei de todo processo criativo da logomarca e do website. Foi responsável pelo desenvolvimento frontend (html/ccs). ',
        images: [
            {id: 1, name: 'Home', image: 'home.jpg'},
            {id: 2, name: 'Conteúdo Interno', image: 'conteudo.jpg'},
            {id: 3, name: 'Listagem de Fotos', image: 'fotos.jpg'},
            {id: 4, name: 'Tour', image: 'tour.jpg'}
        ], tags: ['design', 'layout', 'html', 'css3', 'javascript'], url: ''},
        {id: 2, name: 'Apperone', shortdescription: 'UX/UI do aplicativo', path: 'apperone',
        description: 'Design do Aplicativo',
        images: [
            {id: 1, name: 'Home', image: 'home.jpg'},
            {id: 2, name: 'Busca', image: 'busca.jpg'},
            {id: 3, name: 'Listagem de Estabelecimentos', image: 'lista.jpg'},
            {id: 4, name: 'Conteúdo Interno', image: 'detalhes.jpg'}
        ], tags: ['design', 'ux'], url: ''},
        {id: 3, name: 'Mão na Roda', shortdescription: 'Desenvolvimento FrontEnd', path: 'maonaroda',
        description: 'Desenvolvimento FrontEnd',
        images: [
            {id: 1, name: 'Home', image: 'home.jpg'},
            {id: 2, name: 'Orçamento', image: 'orcamento.jpg'}
        ], tags: ['html', 'css3', 'javascript', 'jquery', 'bootstrap'], url: ''},
        {id: 4, name: 'Constrói Fácil', shortdescription: 'Desenvolvimento FrontEnd', path: 'constroifacil',
            description: 'Desenvolvimento FrontEnd',
            images: [
                {id: 1, name: 'Home', image: 'home.jpg'},
                {id: 2, name: 'Menu de Categorias', image: 'menu.jpg'},
                {id: 3, name: 'Menu Lateral', image: 'menu-side.jpg'},
                {id: 4, name: 'Busca', image: 'search.jpg'},
                {id: 5, name: 'Login', image: 'login.jpg'},
                {id: 6, name: 'Cadastro Usuário', image: 'register.jpg'},
                {id: 7, name: 'Cadastro Profissional', image: 'register-professional.jpg'},
                {id: 8, name: 'Cadastro Profissional', image: 'register-professional-2.jpg'},
                {id: 9, name: 'Perfil Profissional (Sem Permissão)', image: 'my-project.jpg'},
                {id: 10, name: 'Perfil Profissional (Com Permissão)', image: 'profile.jpg'},
                {id: 11, name: 'Modal de Novos Projetos', image: 'new-project.jpg'},
                {id: 12, name: 'Minha Conta', image: 'account.jpg'},
                {id: 13, name: 'Meus Endereços', image: 'address.jpg'},
                {id: 14, name: 'Favoritos', image: 'favorites.jpg'}
            ], tags: ['angularjs', 'html', 'css3', 'javascript', 'jquery', 'bootstrap'], url: ''},
        {id: 5, name: 'Appolice', shortdescription: 'Desenvolvimento FrontEnd', path: 'appolice',
            description: 'Desenvolvimento FrontEnd',
            images: [
                {id: 1, name: 'Login', image: 'login.jpg'},
                {id: 2, name: 'Listagem de Clientes', image: 'clients.jpg'},
                {id: 3, name: 'Modal de Cliente', image: 'client.jpg'},
                {id: 4, name: 'Mensagens', image: 'messages.jpg'},
                {id: 5, name: 'Painel de Controle', image: 'panel.jpg'},
                {id: 6, name: 'Cotações e Renovações', image: 'quotations.jpg'},
                {id: 7, name: 'Upload de Imagens', image: 'images.jpg'}
            ], tags: ['html', 'css3', 'javascript', 'angularjs', 'bootstrap'], url: 'http://www.appolice.me/dashboard'},
        {id: 6, name: 'CheckBeer', shortdescription: 'Aplicativo Android e IOS', path: 'checkbeer',
            description: 'Desenvolvimento App Android e IOS',
            images: [
                {id: 1, name: 'Welcome', image: 'welcome.jpg'},
                {id: 2, name: 'Login', image: 'login.jpg'},
                {id: 3, name: 'Home', image: 'home.jpg'},
                {id: 4, name: 'Bares', image: 'bars.jpg'},
                {id: 5, name: 'Favoritos', image: 'favorites.jpg'}
            ], tags: ['ionic', 'cordova', 'phonegap', 'angularjs'], url: ''},
        {id: 7, name: 'Izzi App', shortdescription: 'Desenvolvimento App Android e IOS', path: 'iziiapp',
            description: 'Desenvolvimento App Android e IOS',
            images: [
                {id: 1, name: 'Login', image: 'login.png'},
                {id: 2, name: 'Cadastro de Usuário', image: 'register.png'},
                {id: 3, name: 'Recuperar Senha', image: 'remember.png'}
            ], tags: ['nodejs', 'express', 'websockets', 'painel administrativo', 'html', 'css3', 'javascript', 'bootstrap', 'ionic', 'cordova', 'phonegap', 'angularjs'], url: ''},
        {id: 8, name: 'Medtronic', shortdescription: 'Desenvolvimento FrontEnd', path: 'medtronic',
            description: 'Desenvolvimento FrontEnd',
            images: [
                {id: 1, name: 'Home', image: 'home.png'},
                {id: 2, name: 'Sobre a Medtronic', image: 'medtronic.png'},
                {id: 3, name: 'Encontre um Médico', image: 'doctors.png'},
                {id: 4, name: 'Tratamento', image: 'treatment.png'},
                {id: 5, name: 'Desvendando Mitos', image: 'myths.png'},
                {id: 6, name: 'Perguntas Frequentes', image: 'faq.png'},
                {id: 7, name: 'Histórias', image: 'history.png'},
                {id: 8, name: 'Contato', image: 'contact.png'}
            ], tags: ['html', 'css3', 'javascript', 'jquery', 'bootstrap'], url: 'http://tratandovarizes.com.br/'},
        {id: 9, name: 'Maison Alexandrine', shortdescription: 'Desenvolvimento Ecommerce', path: 'alexandrine',
            description: 'Desenvolvimento Ecommerce',
            images: [
                {id: 1, name: 'Home', image: 'home.jpg'},
                {id: 2, name: 'Le Essence', image: 'essence.jpg'},
                {id: 3, name: 'La Mode', image: 'mode.jpg'},
                {id: 4, name: 'La Mode', image: 'products.jpg'},
                {id: 5, name: 'L\'Experience', image: 'experience.jpg'},
                {id: 6, name: 'L\'Experience', image: 'experience2.jpg'},
                {id: 7, name: 'Les Talents', image: 'talents.jpg'},
                {id: 8, name: 'Les Talents', image: 'talents2.jpg'},
                {id: 9, name: 'Le Journal', image: 'journal.jpg'}
            ], tags: ['wordpress', 'woocommerce', 'html', 'css3', 'javascript', 'jquery', 'bootstrap'], url: ''},
        {id: 10, name: 'GypaNews Online', shortdescription: 'Desenvolvimento Wordpress', path: 'gypanews',
            description: 'Desenvolvimento wordpress da versão online do jornal do bairro Morumbi',
            images: [
                {id: 1, name: 'Home', image: 'home.png'},
                {id: 2, name: 'Sobre a GypaNews', image: 'about.png'},
                {id: 3, name: 'Perfil', image: 'profile.png'},
                {id: 4, name: 'Guia do Bairro', image: 'guide.png'},
                {id: 5, name: 'Dicas', image: 'tips.png'},
                {id: 6, name: 'Agenda', image: 'calendar.png'},
                {id: 7, name: 'Página Interna', image: 'intern.png'}
            ], tags: ['wordpress', 'html', 'css3', 'javascript', 'jquery', 'bootstrap'], url: 'http://www.gypanewsonline.com.br/'}
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