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

    it('should have Register in the navbar', () => {
        expect(navBar.getNavigation('Register').isPresent()).toBeTruthy();
    });

    it('should be able to login user x', () => {
        page.login('x', 'x');
        expect(navBar.userNameLabel.getText()).toBe('x');
    });

    it('should no longer be on the login page', () => {
        expect(page.isOpen()).toBeFalsy();
    });

    it('should display the right buttons', () => {
        expect(navBar.getNavigation('Register').isPresent()).toBeFalsy();
        expect(navBar.getNavigation('Login').isPresent()).toBeFalsy();
        expect(navBar.getNavigation('Todo').isPresent()).toBeTruthy();
    });
});
