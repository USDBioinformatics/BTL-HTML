var btlApp = angular.module('btlApp', ['ui.router', 'btlApp.services', 'btlApp.controllers']); //btlApp is our main module

btlApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
 
    $stateProvider
        .state('tools', {
            url:'/',
            templateUrl: 'templates/tools.html'
//            controller: 'ShowsController'
        });
//        .state('shows.detail', {
//            url: '/detail/:id',
//            templateUrl: 'templates/shows-detail.html',
//            controller: 'ShowsDetailController'
//        });
}]);