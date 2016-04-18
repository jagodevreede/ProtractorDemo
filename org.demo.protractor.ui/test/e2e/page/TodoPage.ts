import NavBar = require('./NavBar');
let path = require('path');

class TodoPage {
    navBar: NavBar = new NavBar();
    todoItemsLocator = by.xpath('.//ul/li');
    addList = element(by.css('button[ng-click^="todolistCtrl.addNewList()"]'));
    todoLists = element.all(by.repeater('todoList in todolistCtrl.todos'));

    open() {
        this.navBar.getNavigation('Todo').click();
    }

    isOpen() {
        return this.addList.isPresent();
    }

    getTodos(todoListIndex: number) {
        return this.todoLists
            .get(todoListIndex)
            .all(this.todoItemsLocator);
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

        this.todoLists
            .get(todoListIndex)
            .element(by.css('button.btn-primary'))
            .click();
    }

    removeTodoItem(todoListIndex: number, todoItemIndex: number) {
        return this.todoLists
            .get(todoListIndex)
            .all(this.todoItemsLocator)
            .get(todoItemIndex)
            .element(by.css('span.remove'))
            .click();
    }

    uploadImage(todoListIndex: number, filename: string) {
        let absolutePath = path.resolve('test/e2e/assets', filename);
        this.todoLists
            .get(todoListIndex)
            .element(by.css('input[type="file"]'))
            .sendKeys(absolutePath);
        return this.todoLists
            .get(todoListIndex)
            .element(by.css('button.submit'))
            .click();
    }

    isImageUploaded(todoListIndex: number) {
        return this.todoLists
            .get(todoListIndex)
            .element(by.css('img.upload-image'))
            .isPresent();
    }
}

export = TodoPage;
