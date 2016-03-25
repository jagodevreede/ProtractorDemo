import HomePage = require('../page/HomePage');

describe('Home page', () => {
    let page: HomePage = new HomePage();

    it('should have image', () => {
        page.open();
        expect(page.image.isDisplayed()).toBeTruthy();
    });

    afterEach(page.checkSpecPassed);
});
