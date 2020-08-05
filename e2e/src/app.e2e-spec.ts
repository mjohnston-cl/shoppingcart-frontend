import { Homepage } from './app.po';
import { browser, logging } from 'protractor';

describe('Shopping Cart App', () => {
    let homepage: Homepage;

    beforeEach(() => {
        homepage = new Homepage();
    });

    it('should be on the homepage', () => {
        homepage.navigateTo();
        expect(browser.getCurrentUrl()).toContain('catalog');
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});
