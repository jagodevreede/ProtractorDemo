import BasePage = require('./_basePage');

class NavBar extends BasePage {

    userNameLabel = element(by.id('user-name-label'));
    signInOrOutButton = element(by.css('.signinout'));

    open() {
        browser.get('/');
    }

    getNavigation(name: string) {
        return element(by.css('a[ui-sref="' + name + '"]'));
    }

}

export = NavBar;
