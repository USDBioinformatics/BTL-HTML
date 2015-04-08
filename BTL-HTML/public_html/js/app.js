var btlApp = angular.module('btlApp', ['ui.router', 'btlApp.services', 'btlApp.controllers', 'treeControl']); //btlApp is our main module

btlApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
                .state('home', {
                    url: "/home",
                    views: {
                        '': {templateUrl: 'templates/partial-home.html'},
                        'list@home': {templateUrl: 'templates/tool-list.html'},
                        'details@home': {templateUrl: 'templates/tool-details.html'},
                        'bridges@home': {templateUrl: 'templates/bridge-list.html'},
                        'tree@home': {templateUrl: 'templates/tree.html', controller: 'TreeController'}
                    }
                })
                // HOME STATES AND NESTED VIEWS ========================================
                .state('about', {
                    url: '/about',
                    templateUrl: 'templates/about.html'
                })
                .state('contact', {
                    url: '/contact',
                    templateUrl: 'templates/contact.html'
                })
                .state('repos', {
                    url: '/repos',
                    templateUrl: 'templates/repo-list.html',
                    controller: 'RepoListController'

                });
//                .state('tools', {
//                    url: '/',
//                    templateUrl: 'templates/tools.html'
////            controller: 'ShowsController'
//                })
//                .state('similartools', {
//                    url: '/similar',
//                    templateUrl: 'templates/similar.html'
////            controller: 'ShowsController'
//                });
    }]);