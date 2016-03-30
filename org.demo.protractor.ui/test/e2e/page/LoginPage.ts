import BasePage = require('./_basePage');
import NavBar = require('./NavBar');

class LoginPage extends BasePage {
    navBar: NavBar = new NavBar();
    loginButton = element(by.id('login-btn'));
    username = element(by.id('username'));
    password = element(by.id('password'));
    private loggedInUser: string;

    open() {
        this.navBar.getNavigation('Login').click();
    }

    isOpen() {
        return this.loginButton.isPresent();
    }

    login(username: string, password: string) {
        this.username.sendKeys(username);
        this.password.sendKeys(password);
        this.loginButton.click();
        this.loggedInUser = username;
    }

    logout() {
        this.loggedInUser = null;
        this.navBar.userNameLabel.click();
        this.navBar.singInOrOutButton.click();
    }

    ensureLogin(username: string, password: string) {
        this.isOpen().then((open) => {
            if (!open) {
                 this.open();
            }
            this.login(username, password);
        });
    }

}

export = LoginPage;
