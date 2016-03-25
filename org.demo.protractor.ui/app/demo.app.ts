/// <amd-dependency path="angular-ui-router"/>
/// <amd-dependency path="angular-sanitize"/>
/// <amd-dependency path="angular-drag-drop-lists"/>
/// <amd-dependency path="ng-file-upload"/>

/// <amd-dependency path="./app.routes"/>

import angular = require('angular');
import HomeCtrl = require('./home/home.ctrl');
import LoginCtrl = require('./login/login.ctrl');
import Navbar = require('./navbar/navbar.component');
import UserService = require('./blocks/user.service');
import RegisterCtrl = require('./register/register.ctrl');
import TodolistCtrl = require('./todolist/todolist.ctrl');

let applicationName = 'protractor-ng1-demo';
let app: angular.IModule = angular.module(applicationName, ['demo.routes', 'dndLists', 'ngFileUpload']);

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
}]);

app.controller('HomeCtrl', HomeCtrl);
app.controller('LoginCtrl', LoginCtrl);
app.controller('TodolistCtrl', TodolistCtrl);
app.controller('RegisterCtrl', RegisterCtrl);
app.directive('navbar', [Navbar['Navbar']]);
app.service('userService', UserService['UserService']);

// initialize bootstrap
angular.bootstrap(document, [applicationName]);

