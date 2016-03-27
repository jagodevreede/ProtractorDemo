import BasePage = require('./_basePage');

class TodoPage extends BasePage {
    addList = element(by.id('addNewList'));

    open() {
        browser.get('#/todo');
    }

    isOpen() {
        return this.addList.isPresent();
    }

}

export = TodoPage;
