'use strict';

var app = angular.module('thaisMartins');
app.factory('SkillsService', function () {

    var items = [
        {
            id: 1,
            name: 'design',
            description: 'Posso te ajudar <br> <strong>com o visual</strong> <br> do seu negócio',
            items: [
                {
                    name: 'Wireframe',
                    icon: 'sitemap'
                },
                {
                    name: 'UX / UI',
                    icon: 'users'
                },
                {
                    name: 'Photoshop',
                    icon: 'desktop'
                },
                {
                    name: 'Illustrator',
                    icon: 'file-image-o'
                }
            ]
        },
        {
            id: 2,
            name: 'frontend',
            description: 'Transformo o visual <br>  da sua marca <br> <strong> em estrutura web</strong>',
            items: [
                {
                    name: 'HTML5',
                    icon: 'html5'
                },
                {
                    name: 'CSS3',
                    icon: 'css3'
                },
                {
                    name: 'Responsividade',
                    icon: 'mobile-phone'
                },
                {
                    name: 'Bootstrap',
                    icon: 'bold'
                },
                {
                    name: 'Javascript',
                    icon: 'code'
                },
                {
                    name: 'Jquery',
                    icon: 'code'
                },
                {
                    name: 'AngularJS',
                    icon: 'buysellads'
                },
                {
                    name: 'SASS',
                    icon: 'terminal'
                }

            ]
        },
        {
            id: 3,
            name: 'backend',
            description: 'Torno sua<br>  estrutura web<br> <strong>em sistema web</strong>',
            items: [
                {
                    name: 'NodeJS',
                    icon: 'code'
                },
                {
                    name: 'Express',
                    icon: 'cubes'
                },
                {
                    name: 'CoffeeScript',
                    icon: 'cubes'
                },
                {
                    name: 'PHP',
                    icon: 'code'
                },
                {
                    name: 'Yii Framework',
                    icon: 'cubes'
                },
                {
                    name: 'Codeigniter',
                    icon: 'cubes'
                },
                {
                    name: 'Slim Framework',
                    icon: 'cubes'
                },
                {
                    name: 'Doctrine',
                    icon: 'cogs'
                },
                {
                    name: 'Apache/Ngnix/PHP-FPM',
                    icon: 'hdd-o'
                },
                {
                    name: 'Java',
                    icon: 'code'
                },
                {
                    name: 'AngularJS',
                    icon: 'buysellads'
                },
                {
                    name: 'Spring',
                    icon: 'cubes'
                },
                {
                    name: 'Jboss',
                    icon: 'hdd-o'
                },
                {
                    name: 'Tomcat',
                    icon: 'hdd-o'
                },
                {
                    name: 'Git',
                    icon: 'git'
                },
                {
                    name: 'MySQL',
                    icon: 'database'
                },
                {
                    name: 'MongoDB',
                    icon: 'database'
                }
            ]
        },
        {
            id: 4,
            name: 'apps',
            description: 'Converto seu <br> sistema em <br> <strong>aplicativo mobile</strong>',
            items: [
                {
                    name: 'Android',
                    icon: 'android'
                },
                {
                    name: 'Android Studio',
                    icon: 'cube'
                },
                {
                    name: 'IOS',
                    icon: 'apple'
                },
                {
                    name: 'Swift',
                    icon: 'cube'
                },
                {
                    name: 'Phonegap',
                    icon: 'mobile'
                },
                {
                    name: 'Ionic',
                    icon: 'circle-o'
                }
            ]
        }
    ];

    return {
        getAll: function() {
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