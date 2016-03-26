import BasePage = require('./_basePage');

class RegisterPage extends BasePage {
    registerButton = element(by.id('register-btn'));
    username = element(by.id('username'));
    password = element(by.id('password'));
    email = element(by.id('email'));

    open() {
        browser.get('#/register');
    }

    isOpen() {
        return this.registerButton.isPresent();
    }

}

export = RegisterPage;
