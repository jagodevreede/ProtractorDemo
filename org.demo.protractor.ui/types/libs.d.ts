/// <reference path="./require.d.ts" />
/// <reference path="./angularjs/angular.d.ts" />
/// <reference path="./angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="./angular-protractor.d.ts" />
/// <reference path="./selenium-webdriver/selenium-webdriver.d.ts" />
/// <reference path="./jasmine.d.ts" />
/// <reference path="./libsprotector.d.ts" />
declare module "require" {
    export = require;
}

declare type Response<T> = angular.IHttpPromiseCallbackArg<T>;

declare module angular {
    interface IAngularStatic {
        resumeBootstrap(modules: string[]):void;
    }
}

// Set plugin extensions on the jQuery interface to force TypeScript compiling
interface JQuery { fileupload: any; }
