import BasePage = require('./_basePage');

class HomePage extends BasePage {
    image = element(by.css('img'));

    open() {
        browser.get('/');
    }

}

export = HomePage;
