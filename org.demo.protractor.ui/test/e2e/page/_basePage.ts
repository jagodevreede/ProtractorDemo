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
}

export = BasePage;
