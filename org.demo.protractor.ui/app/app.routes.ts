import angular = require('angular');

var ngModule: angular.IModule = angular.module('demo.routes', ['ui.router']);

ngModule.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/home/home.html',
            controller: 'HomeCtrl as homeCtrl'
        });

        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise('/home');
    }]);