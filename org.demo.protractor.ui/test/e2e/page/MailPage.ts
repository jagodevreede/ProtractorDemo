import BasePage = require('./_basePage');

class MailPage extends BasePage {
    private emailField = element(by.id('addyForm:addressSelect'));

    open() {
        this.openNewTab();
        browser.ignoreSynchronization = true;
        browser.get('http://10minutemail.com/10MinuteMail/index.html');
        let EC = protractor.ExpectedConditions;
        let condition = EC.presenceOf(this.emailField);
        browser.wait(condition, 5000);
    }

    getAddress() {
        return this.emailField.getAttribute('value');
    }

    openActivationLink() {
        let mail = element(by.css('#emailTable tbody tr a'));
        let EC = protractor.ExpectedConditions;
        let condition = EC.presenceOf(mail);
        browser.wait(condition, 50000);
        mail.click();
        let link = element(by.id('activation-link-protractor-demo'));
        condition = EC.presenceOf(link);
        browser.wait(condition, 5000);
        link.click();
        // We can synchronize again
        browser.ignoreSynchronization = true;
    }
}

export = MailPage;
