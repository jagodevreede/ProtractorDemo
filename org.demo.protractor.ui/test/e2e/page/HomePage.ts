import BasePage = require('./_basePage');

class HomePage extends BasePage {

    open() {
        browser.get('/');
    }

}

export = HomePage;
