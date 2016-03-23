/// <amd-dependency path="angular-ui-router"/>
/// <amd-dependency path="angular-sanitize"/>

/// <amd-dependency path="./app.routes"/>

import angular = require('angular');
import HomeCtrl = require('./home/home.ctrl');
import Navbar = require('./navbar/navbar.component');

let applicationName = 'protractor-ng1-demo';
let app: angular.IModule = angular.module(applicationName, ['demo.routes']);

app.controller('HomeCtrl', HomeCtrl);
app.directive('navbar', [Navbar['Navbar']]);

// initialize bootstrap
angular.bootstrap(document, [applicationName]);
