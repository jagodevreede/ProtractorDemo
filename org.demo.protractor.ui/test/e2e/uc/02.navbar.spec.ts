import NavBar = require('../page/NavBar');

describe('NavBar', () => {
    let page: NavBar = new NavBar();

    it('should display that the user is not logged in', () => {
        expect(page.userNameLabel.getText()).toBe('Not logged in');
    });

    it('should display the home button', () => {
        expect(page.getNavigation('Home').isPresent()).toBeTruthy();
    });

    it('should not display the todo button', () => {
        expect(page.getNavigation('Todo').isPresent()).toBeFalsy();
    });

    it('should be able to open the user dropdown', () => {
        // Closed by default
        expect(page.signInOrOutButton.isDisplayed()).toBeFalsy();
        page.userNameLabel.click();
        // Should now be open
        expect(page.signInOrOutButton.isDisplayed()).toBeTruthy();
        page.userNameLabel.click();
        // Should be closed again
        expect(page.signInOrOutButton.isDisplayed()).toBeFalsy();
    });
});
