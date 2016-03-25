import NavBar = require('../page/NavBar');

describe('NavBar', () => {
    let page: NavBar = new NavBar();

    it('should display that the user is not logged in', () => {
        expect(page.userNameLabel.getText()).toBe('Not logged in');
    });

    it('should display the home button', () => {
        expect(page.getNavigation('Home').isPresent()).toBeTruthy();
    });

    it('should display the todo button', () => {
        expect(page.getNavigation('Todo').isPresent()).toBeTruthy();
    });

    it('should be able to open the user pane', () => {
        // Closed by default
        expect(page.singInOrOutButton.isDisplayed()).toBeFalsy();
        page.userNameLabel.click();
        // Should now be open
        expect(page.singInOrOutButton.isDisplayed()).toBeTruthy();
        page.userNameLabel.click();
        // Should be closed again
        expect(page.singInOrOutButton.isDisplayed()).toBeFalsy();
    });

    afterEach(page.checkSpecPassed);
});
