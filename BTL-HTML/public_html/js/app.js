var btlApp = angular.module('btlApp', ['ui.router', 'btlApp.services', 'btlApp.controllers']); //btlApp is our main module

btlApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
                .state('home', {
                    url: "/home",
                    views: {
                        '': {templateUrl: 'templates/partial-home.html'},
                        'categories@home': {templateUrl: 'templates/categories.html'},
                        'list@home': {templateUrl: 'templates/tool-list.html'},
                        'details@home': {templateUrl: 'templates/tool-details.html'}
                    }
                })
                // HOME STATES AND NESTED VIEWS ========================================
                .state('about', {
                    url: '/about',
                    templateUrl: 'templates/about.html'
                });
//                
//                
//                
//                .state('tools', {
//                    url: '/',
//                    templateUrl: 'templates/tools.html'
////            controller: 'ShowsController'
//                })
//                .state('testJS', {
//                    url: '/',
//                    templateUrl: 'templates/testrest.html'
////            controller: 'ShowsController'
//                })
//                .state('similartools', {
//                    url: '/similar',
//                    templateUrl: 'templates/similar.html'
////            controller: 'ShowsController'
//                });
////        .state('shows.detail', {
////            url: '/detail/:id',
////            templateUrl: 'templates/shows-detail.html',
////            controller: 'ShowsDetailController'
////        });
    }]);