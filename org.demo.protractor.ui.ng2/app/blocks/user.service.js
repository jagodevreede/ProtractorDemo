System.register(['rxjs/Rx', 'angular2/core', 'angular2/http', '../app.settings'], function(exports_1, context_1) {
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
    var core_1, http_1, app_settings_1;
    var UserService;
    return {
        setters:[
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_settings_1_1) {
                app_settings_1 = app_settings_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService(http) {
                    this.http = http;
                    this.userChangeEvent = new core_1.EventEmitter();
                    this.headers = new http_1.Headers();
                    this.headers.append('Content-Type', 'application/json');
                }
                UserService.prototype.getUser = function () {
                    var _this = this;
                    return this.http.get(app_settings_1.APP_SETTINGS.basedir + 'login')
                        .map(function (res) {
                        return _this.changeUser(res.json());
                    });
                };
                UserService.prototype.register = function (user) {
                    return this.http.put(app_settings_1.APP_SETTINGS.basedir + 'login', JSON.stringify(user), { headers: this.headers });
                };
                UserService.prototype.logout = function () {
                    this.changeUser(null);
                    return this.http.delete(app_settings_1.APP_SETTINGS.basedir + 'login', { headers: this.headers });
                };
                UserService.prototype.login = function (user) {
                    var _this = this;
                    return this.http.post(app_settings_1.APP_SETTINGS.basedir + 'login', JSON.stringify(user), { headers: this.headers })
                        .map(function (res) {
                        return _this.changeUser(res.json());
                    });
                };
                UserService.prototype.changeUser = function (user) {
                    if (user === this.currentUser || (user != null && this.currentUser != null && user.email === this.currentUser.email)) {
                        return user;
                    }
                    this.currentUser = user;
                    this.userChangeEvent.emit(user);
                    return user;
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});

//# sourceMappingURL=user.service.js.map
