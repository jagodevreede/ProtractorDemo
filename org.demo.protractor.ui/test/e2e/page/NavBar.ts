class NavBar {

    userNameLabel = null; // FIXME: Add correct selector
    signInOrOutButton = element(by.css('.signinout'));

    open() {
        browser.get('/');
    }

    getNavigation(name: string) {
        return element(by.css('a[ui-sref="' + name + '"]'));
    }

}

export = NavBar;
