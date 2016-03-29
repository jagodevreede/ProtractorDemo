import TodoPage = require('../page/TodoPage');

describe('Todo page', () => {
    let todo: TodoPage = new TodoPage();

    it('should open the todo page', () => {
        todo.open();
        expect(todo.isOpen()).toBeTruthy();
    });

    it('should have one todo list with zero items', () => {
        expect(todo.getTodoLists().count()).toEqual(1);
        expect(todo.getTodos(0).count()).toEqual(0);
    });

    it('should be able to add a todo item', () => {
        todo.addTodoItem(0, 'test todo');
        expect(todo.getTodos(0).count()).toEqual(1);
        expect(todo.getTodo(0, 0)).toEqual('test todo');
    });

    it('should be able to remove a todo item', () => {
        todo.addTodoItem(0, 'test todo 2');
        expect(todo.getTodos(0).count()).toEqual(2);
        expect(todo.getTodo(0, 0)).toEqual('test todo');
        expect(todo.getTodo(0, 1)).toEqual('test todo 2');
        todo.removeTodoItem(0, 0);
        expect(todo.getTodos(0).count()).toEqual(1);
        expect(todo.getTodo(0, 0)).toEqual('test todo 2');
    });
});
