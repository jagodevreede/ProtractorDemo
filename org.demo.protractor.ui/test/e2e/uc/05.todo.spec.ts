import TodoPage = require('../page/TodoPage');
import LoginPage = require('../page/LoginPage');

describe('Todo page', () => {
    let todo: TodoPage = new TodoPage();
    let loginPage: LoginPage = new LoginPage();

    it('should login as user x', () => {
        loginPage.ensureLogin('x', 'x');
    });

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

    it('should be able to create a second list', () => {
        todo.addList.click();
        expect(todo.getTodoLists().count()).toEqual(2);
    });

    it('should be able to add a todo item in the second list', () => {
        todo.addTodoItem(1, 'test todo other list');
        expect(todo.getTodos(1).count()).toEqual(1);
        expect(todo.getTodo(1, 0)).toEqual('test todo other list');
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
