import BasePage = require('./_basePage');
import NavBar = require('./NavBar');

class TodoPage extends BasePage {
    navBar: NavBar = new NavBar();
    todoItemsLocator = by.xpath('.//ul/li');
    addList = element(by.id('addNewList'));
    todoLists = element.all(by.repeater('todoList in todolistCtrl.todos'));

    open() {
        this.navBar.getNavigation('Todo').click();
    }

    isOpen() {
        return this.addList.isPresent();
    }
    
    getTodos(todoListIndex: number) {
        return this.todoLists.get(todoListIndex).all(this.todoItemsLocator);
    }

    getTodoLists() {
        return this.todoLists;
    }

    getTodo(todoListIndex: number, todoItemIndex: number) {
        return this.todoLists
            .get(todoListIndex)
            .all(this.todoItemsLocator)
            .get(todoItemIndex)
            .element(by.css('.description'))
            .getText();
    }

    addTodoItem(todoListIndex: number, todoItemDescription: string) {
        let inputField = this.todoLists
            .get(todoListIndex)
            .element(by.model('todoList.todo.name'));
        inputField.clear();
        inputField.sendKeys(todoItemDescription);

        this.todoLists.get(todoListIndex).element(by.css('button.btn-primary')).click();
    }

    removeTodoItem(todoListIndex: number, todoItemIndex: number) {
        return this.todoLists
            .get(todoListIndex)
            .all(this.todoItemsLocator)
            .get(todoItemIndex)
            .element(by.css('span.remove'))
            .click();
    }

    uploadImage(todoListIndex: number): webdriver.promise.Promise<any> {
        return this.uploadFile('protractor.jpeg', this.todoLists.get(todoListIndex));
    }

    isImageUploaded(todoListIndex: number): webdriver.promise.Promise<any> {
        return this.isFileUploaded(
            this.todoLists
                .get(todoListIndex)
                .element(by.css('img.upload-image'))
                .locator()
        );
    }
}

export = TodoPage;
