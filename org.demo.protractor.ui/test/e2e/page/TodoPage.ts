import webdriver = require('selenium-webdriver');
import BasePage = require('./_basePage');

class TodoPage extends BasePage {
    addList = element(by.id('addNewList'));
    todoLists = element.all(by.repeater('todoList in todolistCtrl.todos'));
    todoItemsLocator = by.repeater('item in todoList.list');
    todoItemDescriptionLocator = by.id('todo');
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

    getTodos(todoListIndex) {
        return this.todoLists.get(todoListIndex).all(this.todoItemsLocator);
    }

    getTodo(todoListIndex, todoItemIndex) {
        return this.todoLists.get(todoListIndex).all(this.todoItemsLocator).get(todoItemIndex).element(by.css('.description')).getText();
    }

    addTodoItem(todoListIndex, todoItemDescription) {
        this.todoLists.get(todoListIndex)
            .element(this.todoItemDescriptionLocator)
            .sendKeys(webdriver.Key.CONTROL, 'a', webdriver.Key.NULL, todoItemDescription);
        return this.todoLists.get(todoListIndex).element(this.addButtonLocator).click();
    }

    removeTodoItem(todoListIndex, todoItemIndex) {
        return this.todoLists.get(todoListIndex).all(this.todoItemsLocator).get(todoItemIndex).element(this.removeButtonLocator).click();
    }
}

export = TodoPage;
