import BasePage = require('./_basePage');
import NavBar = require('./NavBar');

class LoginPage extends BasePage {
    navBar: NavBar = new NavBar();
    loginButton = element(by.id('login-btn'));
    username = element(by.id('username'));
    password = element(by.id('password'));

    open() {
        this.navBar.getNavigation('Login').click();
    }

    isOpen() {
        return this.loginButton.isPresent();
    }

}

export = LoginPage;
