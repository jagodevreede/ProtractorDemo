System.register(['./todo.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var todo_model_1;
    var TodoList;
    return {
        setters:[
            function (todo_model_1_1) {
                todo_model_1 = todo_model_1_1;
            }],
        execute: function() {
            TodoList = (function () {
                function TodoList() {
                    this.list = [];
                    this.todo = new todo_model_1.Todo('Add me to list!', false);
                }
                TodoList.prototype.addTodo = function () {
                    this.list.push(todo_model_1.Todo.clone(this.todo));
                    this.todo.clear();
                };
                TodoList.prototype.delTodo = function (index) {
                    this.list.splice(index, 1);
                };
                return TodoList;
            }());
            exports_1("TodoList", TodoList);
        }
    }
});

//# sourceMappingURL=todoList.model.js.map
