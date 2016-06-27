'use strict';

angular.module('thaisMartins', [
    'ui.router',
    'ui.mask'
])
.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('root', {
            abstract: true,
            views: {
                'header': {templateUrl: 'app/views/partials/header.html'},
                'footer': {templateUrl: 'app/views/partials/footer.html'}
            }
        })
        .state('main', {
            url: "/",
            parent: 'root',
            views: {
                'slide@': {
                    templateUrl: 'app/views/slide.html',
                    controller: 'SlideController'
                },
                'about@': {
                    templateUrl: 'app/views/about.html',
                    controller: 'AboutController'
                },
                'skills@': {
                    templateUrl: 'app/views/skills.html',
                    controller: 'SkillsController'
                },
                'works@': {
                    templateUrl: 'app/views/works.html',
                    controller: 'WorksController'
                },
                'works-modal@': {
                    templateUrl: 'app/views/works-modal.html',
                    controller: 'WorksController'
                },
                'contact@': {
                    templateUrl: 'app/views/contact.html',
                    controller: 'ContactController'
                }
            }
        });

    $locationProvider.html5Mode(true);
}]);