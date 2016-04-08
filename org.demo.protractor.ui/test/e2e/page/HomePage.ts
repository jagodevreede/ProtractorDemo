import NavBar = require('./NavBar');

class HomePage {
    navBar: NavBar = new NavBar();
    image = element(by.css('img'));

    open() {
        this.navBar.getNavigation('Home').click();
    }

}

export = HomePage;
