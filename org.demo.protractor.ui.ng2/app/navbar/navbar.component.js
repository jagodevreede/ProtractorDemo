System.register(['angular2/core', 'angular2/common', 'angular2/router', '../blocks/user.service'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, user_service_1;
    var NavbarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            NavbarComponent = (function () {
                function NavbarComponent(userService, router) {
                    var _this = this;
                    this.userService = userService;
                    this.router = router;
                    userService.getUser().subscribe(function (user) { return _this.user = user; }, function (error) { return _this.user = null; });
                    userService.userChangeEvent.subscribe(function (newUser) { return _this.user = newUser; });
                }
                NavbarComponent.prototype.signout = function () {
                    var _this = this;
                    this.userService.logout().subscribe(function (data) {
                        _this.router.navigate(['Home']);
                    }, function (error) { return console.error('Could not logout user.'); });
                };
                NavbarComponent.prototype.signin = function () {
                    this.router.navigate(['Login']);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], NavbarComponent.prototype, "brand", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], NavbarComponent.prototype, "routes", void 0);
                NavbarComponent = __decorate([
                    core_1.Component({
                        selector: 'navbar',
                        templateUrl: 'app/navbar/navbar.html',
                        styleUrls: [
                            'app/navbar/navbar.css'
                        ],
                        directives: [router_1.RouterLink, common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
                ], NavbarComponent);
                return NavbarComponent;
            }());
            exports_1("NavbarComponent", NavbarComponent);
        }
    }
});

//# sourceMappingURL=navbar.component.js.map
