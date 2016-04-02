let path = require('path');

abstract class BasePage {

    abstract open();

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

    uploadFile(filename: string, base: protractor.ElementFinder): webdriver.promise.Promise<any> {
        let absolutePath = path.resolve('test/e2e/assets', filename);
        base.element(by.css('input[type="file"]')).sendKeys(absolutePath);
        return base.element(by.css('button.submit')).click();
    }

    isFileUploaded(uploadLocator: webdriver.Locator): webdriver.promise.Promise<any> {
        return element(uploadLocator).isPresent();
    }
}

export = BasePage;
