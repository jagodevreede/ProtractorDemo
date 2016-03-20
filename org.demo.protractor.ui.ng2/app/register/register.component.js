System.register(['angular2/core', 'angular2/common', '../blocks/user.service'], function(exports_1, context_1) {
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
    var core_1, common_1, user_service_1, common_2;
    var RegisterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            RegisterComponent = (function () {
                function RegisterComponent(userService) {
                    this.userService = userService;
                    this.user = {
                        username: 'x',
                        password: 'x',
                        email: 'x@x.com'
                    };
                    this.submitted = false;
                }
                RegisterComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                    this.userService.register(this.user).subscribe(function (data) {
                        // noop
                    }, function (error) { return console.error('Could not create user.'); });
                };
                RegisterComponent = __decorate([
                    core_1.Component({
                        selector: 'register',
                        templateUrl: 'app/register/register.html',
                        directives: [common_1.CORE_DIRECTIVES, common_2.NgForm]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], RegisterComponent);
                return RegisterComponent;
            }());
            exports_1("RegisterComponent", RegisterComponent);
        }
    }
});

//# sourceMappingURL=register.component.js.map
