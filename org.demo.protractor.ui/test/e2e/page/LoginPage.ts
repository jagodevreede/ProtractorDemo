import NavBar = require('./NavBar');

let loggedInUser: string;

class LoginPage {
    navBar: NavBar = new NavBar();
    loginButton = element(by.id('login-btn'));
    username = element(by.id('username'));
    password = element(by.id('password'));

    constructor() {
    }

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
        loggedInUser = username;
    }

    logout() {
        loggedInUser = null;
        this.navBar.userNameLabel.click();
        this.navBar.signInOrOutButton.click();
    }

    ensureLogin(username: string, password: string) {
        if (loggedInUser && loggedInUser !== username) {
            this.logout();
        }
        if (loggedInUser !== username) {
            this.isOpen().then((open) => {
                if (!open) {
                    this.open();
                }
                this.login(username, password);
            });
        }
    }

}

export = LoginPage;
