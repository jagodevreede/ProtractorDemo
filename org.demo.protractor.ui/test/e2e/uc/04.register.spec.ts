import MailPage = require('../page/MailPage');
import RegisterPage = require('../page/RegisterPage');
import NavBar = require('../page/NavBar');
import LoginPage = require('../page/LoginPage');

describe('Register page', () => {
    let navBar: NavBar = new NavBar();
    let mail: MailPage = new MailPage();
    let register: RegisterPage = new RegisterPage();
    let login: LoginPage = new LoginPage();
    let address: string;
    let username: string;

    it('should open the register page', () => {
        register.open();
        expect(register.isOpen()).toBeTruthy();
    });

    it('should open the email client and get a new email address', () => {
        mail.open();
        mail.getAddress().then((a) => {
            expect(a).toContain('@');
            address = a;
            username = a.substr(0, a.indexOf('@'));
        });
        mail.switchTab(0);
    });

    it('should register a new user', () => {
        register.username.sendKeys(username);
        register.password.sendKeys('1');
        register.email.sendKeys(address);
        register.registerButton.click();
        // We are done, close this tab
        mail.closeTab();
    });

    it('should get an activation link in an email, navigate to it and be logged in', () => {
        mail.openActivationLink();
        expect(navBar.userNameLabel.getText()).toBe(username);
    });

    it('should be able to logout the user', () => {
        navBar.userNameLabel.click();
        navBar.singInOrOutButton.click();
        expect(navBar.userNameLabel.getText()).toBe('Not logged in');
    });

    it('should open the login page via the navbar', () => {
        navBar.getNavigation('Login').click();
        expect(login.isOpen()).toBeTruthy();
    });

    it('should be able to login user x', () => {
        login.username.sendKeys(username);
        login.password.sendKeys('1');
        login.loginButton.click();
        expect(navBar.userNameLabel.getText()).toBe(username);
    });

    it('should be able to logout the user', () => {
        navBar.userNameLabel.click();
        navBar.singInOrOutButton.click();
        expect(navBar.userNameLabel.getText()).toBe('Not logged in');
    });
});
