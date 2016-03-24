import angular = require('angular');

var ngModule: angular.IModule = angular.module('demo.routes', ['ui.router']);

ngModule.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('Home', {
            url: '/home',
            templateUrl: 'app/home/home.html',
            controller: 'HomeCtrl as homeCtrl'
        })
        .state('Login', {
            url: '/login',
            templateUrl: 'app/login/login.html',
            controller: 'LoginCtrl as loginCtrl'
        });

        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise('/home');
    }]);