'use strict';

angular.module('thaisMartins')
.run(['$rootScope', 'MenuService', function($rootScope, MenuService) {

    $rootScope.activeMenu = false;
    $rootScope.menu = MenuService.getItems();

    $rootScope.toogleMenu = function() {
        $rootScope.activeMenu = !$rootScope.activeMenu;
    };

    $rootScope.currentWork = false;
    $rootScope.currentWorkImage = false;
}])
.constant('RESOURCES', {
    'API_URL': 'https://thaismartins-api.herokuapp.com/api'
});