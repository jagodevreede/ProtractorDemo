import BasePage = require('./_basePage');

class TodoPage extends BasePage {
    addList = element(by.id('addNewList'));
    todoLists = element.all(by.repeater('todoList in todolistCtrl.todos'));
    todoItemsLocator = by.repeater('item in todoList.list');
    addButtonLocator = by.css('button.btn-primary');
    removeButtonLocator = by.css('span.remove');

    open() {
        browser.get('#/todo');
    }

    isOpen() {
        return this.addList.isPresent();
    }

    getTodoLists() {
        return this.todoLists;
    }

    getTodos(todoListIndex: number) {
        return this.todoLists.get(todoListIndex).all(this.todoItemsLocator);
    }

    getTodo(todoListIndex: number, todoItemIndex: number) {
        return this.todoLists.get(todoListIndex).all(this.todoItemsLocator).get(todoItemIndex).element(by.css('.description')).getText();
    }

    addTodoItem(todoListIndex: number, todoItemDescription: string) {
        let inputField = this.todoLists.get(todoListIndex)
                                        .element(by.id('todo'));
        inputField.clear();
        inputField.sendKeys(todoItemDescription);

        this.todoLists.get(todoListIndex).element(this.addButtonLocator).click();
    }

    removeTodoItem(todoListIndex, todoItemIndex) {
        return this.todoLists.get(todoListIndex).all(this.todoItemsLocator).get(todoItemIndex).element(this.removeButtonLocator).click();
    }
}

export = TodoPage;
