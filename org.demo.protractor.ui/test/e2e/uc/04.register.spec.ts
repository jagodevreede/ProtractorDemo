import MailPage = require('../page/MailPage');
import RegisterPage = require('../page/RegisterPage');
import NavBar = require('../page/NavBar');

describe('Login page', () => {
    let navBar: NavBar = new NavBar();
    let mail: MailPage = new MailPage();
    let register: RegisterPage = new RegisterPage();
    let address: string;
    let username: string;

    it('should open the register page', () => {
        register.open();
        expect(register.isOpen()).toBeTruthy();
    });

    it('should the email client and get a address', () => {
        mail.open();
        mail.getAddress().then((a) => {
            expect(a).toContain('@');
            address = a;
            username = a.substr(0, a.indexOf('@'));
        });
        mail.switchTab(0);
    });

    it('should register a new user', () => {
        register.username.sendKeys(username);
        register.password.sendKeys('1');
        register.email.sendKeys(address);
        register.registerButton.click();
        // We are done close this tab
        mail.closeTab();
    });

    it('should should get the activation link', () => {
        mail.openActivationLink();
    });

    it('should now be logged in', () => {
        expect(navBar.userNameLabel.getText()).toBe(username);
    });
});
