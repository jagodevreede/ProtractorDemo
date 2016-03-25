abstract class BasePage {

    abstract open();

    openNewTab() {
        browser.driver.executeScript('window.open("/","_blank");');
        browser.sleep(250);
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);
        });
    }

    switchToOriginalTab() {
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[0]);
        });
    }

    closeTab() {
        browser.close();
    }

    checkSpecPassed(): void {
        var passed = jasmine.getEnv().currentSpec.results().passed();
        if(!passed) {
            console.log('\nThere is a test failure, will close the browser in 10 seconds, you can still have a look whats wrong...');
            // Wait a few seconds, so you can see the error, especially handy in a remote execution
            browser.sleep(10000);
            jasmine.getEnv().specFilter = function(spec) {
                return false;
            };
        }
    }
}

export = BasePage;
