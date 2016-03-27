import TodoPage = require('../page/TodoPage');

describe('Todo page', () => {
    let todo: TodoPage = new TodoPage();

    it('should open the todo page', () => {
        todo.open();
        expect(todo.isOpen()).toBeTruthy();
    });
});
