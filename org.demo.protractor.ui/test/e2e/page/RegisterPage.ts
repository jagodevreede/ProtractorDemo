import NavBar = require('./NavBar');

class RegisterPage {
    navBar: NavBar = new NavBar();
    registerButton = element(by.id('register-btn'));
    username = element(by.id('username'));
    password = element(by.id('password'));
    email = element(by.id('email'));

    open() {
        this.navBar.getNavigation('Register').click();
    }

    isOpen() {
        return this.registerButton.isPresent();
    }

}

export = RegisterPage;
