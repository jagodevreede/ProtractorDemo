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
});
