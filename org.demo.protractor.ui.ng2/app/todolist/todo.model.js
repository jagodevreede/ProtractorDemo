System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Todo;
    return {
        setters:[],
        execute: function() {
            Todo = (function () {
                function Todo(name, done) {
                    this.name = name;
                    this.done = done;
                }
                Todo.clone = function (todo) {
                    return new Todo(todo.name, todo.done);
                };
                Todo.prototype.clear = function () {
                    this.name = '';
                    this.done = false;
                };
                return Todo;
            }());
            exports_1("Todo", Todo);
        }
    }
});

//# sourceMappingURL=todo.model.js.map
