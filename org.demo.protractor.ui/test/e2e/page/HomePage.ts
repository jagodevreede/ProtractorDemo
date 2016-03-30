import BasePage = require('./_basePage');
import NavBar = require('./NavBar');

class HomePage extends BasePage {
    navBar: NavBar = new NavBar();
    image = element(by.css('img'));

    open() {
        this.navBar.getNavigation('Home').click();
    }

}

export = HomePage;
