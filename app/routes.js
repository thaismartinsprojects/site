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
                    controller: 'SlidesController'
                },
                'about@': {
                    templateUrl: 'app/views/about.html',
                    controller: 'AboutController'
                },
                'skills@': {
                    templateUrl: 'app/views/skills/index.html',
                    controller: 'SkillsController'
                },
                'skills-design@skills': {
                    templateUrl: 'app/views/skills/design.html',
                    controller: 'SkillsController'
                },
                'change-page@': {
                    templateUrl: 'app/views/partials/change-page.html',
                    controller: 'WorksController'
                },
                'works@': {
                    templateUrl: 'app/views/works.html',
                    controller: 'WorksController'
                },
                'works-modal@': {
                    templateUrl: 'app/views/partials/works-modal.html',
                    controller: 'WorksController'
                },
                'works-modal-image@': {
                    templateUrl: 'app/views/partials/works-modal-image.html',
                    controller: 'WorksController'
                },
                'contact@': {
                    templateUrl: 'app/views/contact.html',
                    controller: 'ContactController'
                }
            }
        })
        .state('main.skills', {
            url: "/",
            parent: 'main',
            views: {
                'skills-design@': {
                    templateUrl: 'app/views/skills/design.html',
                    controller: 'SkillsController'
                },
                'skills-frontend@': {
                    templateUrl: 'app/views/skills/frontend.html',
                    controller: 'SkillsController'
                },
                'skills-backend@': {
                    templateUrl: 'app/views/skills/backend.html',
                    controller: 'SkillsController'
                },
                'skills-apps@': {
                    templateUrl: 'app/views/skills/apps.html',
                    controller: 'SkillsController'
                }
            }
        });

    $locationProvider.html5Mode(true);
}]);