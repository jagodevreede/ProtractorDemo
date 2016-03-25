import LoginPage = require('../page/LoginPage');
import NavBar = require('../page/NavBar');

describe('Login page', () => {
    let navBar: NavBar = new NavBar();
    let page: LoginPage = new LoginPage();

    it('should open the login page via the navbar', () => {
        navBar.getNavigation('Login').click();
        expect(page.isOpen()).toBeTruthy();
    });

    it('should not be logged in yet', () => {
        expect(navBar.userNameLabel.getText()).toBe('Not logged in');
    });

    it('should not resister in the navigation', () => {
        expect(navBar.getNavigation('Register').isPresent()).toBeTruthy();
    });

    it('should be able to login user x', () => {
        page.username.sendKeys('x');
        page.password.sendKeys('x');
        page.loginButton.click();
        expect(navBar.userNameLabel.getText()).toBe('x');
    });

    it('should no longer be on the login page', () => {
        expect(page.isOpen()).toBeFalsy();
    });

    it('should not have resister anymore', () => {
        expect(navBar.getNavigation('Register').isPresent()).toBeFalsy();
    });

    it('should be able to logout the user', () => {
        navBar.userNameLabel.click();
        navBar.singInOrOutButton.click();
        expect(navBar.userNameLabel.getText()).toBe('Not logged in');
    });

    afterEach(page.checkSpecPassed);
});
