class MailPage {
    private emailField = element(by.id('addyForm:addressSelect'));

    openNewTab() {
        browser.driver.executeScript('window.open("/","_blank");');
        browser.sleep(250);
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);
        });
    }

    switchTab(index: number) {
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[index]).then(() => {
                browser.sleep(500);
            });
        });
    }

    closeTab() {
        browser.close();
        this.switchTab(0);
    }

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
        link.click().then(() => {
            // We can synchronize again
            browser.ignoreSynchronization = false;
            // Wait for Todo app to open with the just activated user account
            browser.sleep(1000);
        });
    }
}

export = MailPage;
