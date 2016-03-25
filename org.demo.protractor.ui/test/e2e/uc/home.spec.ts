import HomePage = require('../page/HomePage');

describe('Home page', () => {
    let page: HomePage = new HomePage();
    it('should have image', () => {
        page.open();
        let ng2Img = element(by.css('img'));
        expect(ng2Img.isDisplayed()).toBeTruthy();
    });
});
