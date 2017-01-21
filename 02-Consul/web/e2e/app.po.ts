import { browser, element, by } from 'protractor';

export class WebPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('qt-root h1')).getText();
  }
}
