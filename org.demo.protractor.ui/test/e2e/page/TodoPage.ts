import BasePage = require('./_basePage');
import NavBar = require('./NavBar');

class TodoPage extends BasePage {
    navBar: NavBar = new NavBar();
    addList = element(by.id('addNewList'));
    todoLists = element.all(by.repeater('todoList in todolistCtrl.todos'));
    todoItemsLocator = by.repeater('item in todoList.list');
    addButtonLocator = by.css('button.btn-primary');
    removeButtonLocator = by.css('span.remove');

    open() {
        this.navBar.getNavigation('Todo').click();
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

    removeTodoItem(todoListIndex: number, todoItemIndex: number) {
        return this.todoLists.get(todoListIndex).all(this.todoItemsLocator).get(todoItemIndex).element(this.removeButtonLocator).click();
    }

    uploadImage(todoListIndex: number): webdriver.promise.Promise<any> {
        return this.uploadFile('protractor.jpeg', this.todoLists.get(todoListIndex));
    }

    isImageUploaded(todoListIndex: number): webdriver.promise.Promise<any> {
        return this.isFileUploaded(this.todoLists.get(todoListIndex).element(by.css('img.upload-image')).locator());
    }
}

export = TodoPage;
