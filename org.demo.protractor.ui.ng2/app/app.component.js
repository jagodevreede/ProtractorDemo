System.register(['angular2/core', 'angular2/router', './app.routes', './navbar/navbar.component', './blocks/logger.service', './blocks/user.service', 'angular2/http', './register/register.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, app_routes_1, navbar_component_1, logger_service_1, user_service_1, http_1, register_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(logger) {
                    this.logger = logger;
                    this.appRoutes = app_routes_1.APP_ROUTES;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'main-app',
                        templateUrl: 'app/app.html',
                        directives: [router_1.RouterOutlet, navbar_component_1.NavbarComponent, register_component_1.RegisterComponent],
                        providers: [user_service_1.UserService],
                        viewProviders: [http_1.HTTP_PROVIDERS]
                    }),
                    router_1.RouteConfig(app_routes_1.APP_ROUTES), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=app.component.js.map
