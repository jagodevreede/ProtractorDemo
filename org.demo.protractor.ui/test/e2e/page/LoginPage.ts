import BasePage = require('./_basePage');

class LoginPage extends BasePage {
    loginButton = element(by.id('login-btn'));
    username = element(by.id('username'));
    password = element(by.id('password'));

    open() {
        browser.get('/login');
    }

    isOpen() {
        return this.loginButton.isPresent();
    }

}

export = LoginPage;
