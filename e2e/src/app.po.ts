import { browser, by, element } from 'protractor';

export class Homepage {
    navigateTo() {
        return browser.get(browser.baseUrl) as Promise<any>;
    }
}
