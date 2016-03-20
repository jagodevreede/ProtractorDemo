///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
System.register(['angular2/platform/browser', 'angular2/router', './app.component', './blocks/logger.service', 'angular2/http', 'angular2/core', './blocks/CORSBrowserXHR'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, router_1, app_component_1, logger_service_1, http_1, http_2, core_1, CORSBrowserXHR_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (CORSBrowserXHR_1_1) {
                CORSBrowserXHR_1 = CORSBrowserXHR_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                logger_service_1.LoggerService, router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS,
                core_1.provide(http_2.BrowserXhr, { useClass: CORSBrowserXHR_1.CORSBrowserXHR })
            ]);
        }
    }
});

//# sourceMappingURL=boot.js.map
