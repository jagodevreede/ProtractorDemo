System.register(['angular2/core', './child.component'], function(exports_1, context_1) {
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
    var core_1, child_component_1;
    var SimplebindComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (child_component_1_1) {
                child_component_1 = child_component_1_1;
            }],
        execute: function() {
            SimplebindComponent = (function () {
                function SimplebindComponent() {
                    this.myname = 'Simple';
                }
                SimplebindComponent = __decorate([
                    core_1.Component({
                        selector: 'simplebind',
                        templateUrl: 'app/simplebind/simplebind.html',
                        directives: [child_component_1.ChildComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SimplebindComponent);
                return SimplebindComponent;
            }());
            exports_1("SimplebindComponent", SimplebindComponent);
        }
    }
});

//# sourceMappingURL=simplebind.component.js.map
