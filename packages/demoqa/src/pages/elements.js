
const { expect } = require('@playwright/test');
class ElementsPage {
  constructor(page) {
    this.page = page;
    this.url='https://demoqa.com/text-box';
    this.url1='https://demoqa.com/radio-button';
    this.url2='https://demoqa.com/checkbox';
  }

  /* ---------------- TEXT BOX ---------------- */
  async openTextBox() {
  
    await this.page.goto(this.url, { waitUntil: 'load', timeout: 190000 });
  }

  async fillTextBox() {
    await this.page.waitForSelector('#userName', { timeout: 190000 });
    await this.page.fill('#userName', 'John Doe');
    await this.page.fill('#userEmail', 'john@test.com');
    await this.page.fill('#currentAddress', 'Address 1');
    await this.page.fill('#permanentAddress', 'Address 2');
    await this.page.click('#submit');
  }

  async getTextBoxOutput() {
    return this.page.locator('#output').textContent();
  }

  /* ---------------- RADIO BUTTON ---------------- */
  async openRadioButton() {
    
    await this.page.goto(this.url1, { waitUntil: 'load', timeout: 190000 });
  }

  async selectYesRadio() {
    await this.page.waitForSelector('label[for="yesRadio"]', { timeout: 190000 });
    await this.page.click('label[for="yesRadio"]');
  }

  async getRadioResult() {
    return this.page.locator('.text-success').textContent();
  }

  /* ---------------- CHECK BOX ---------------- */
  async openCheckBox() {
    await this.page.goto(this.url2, { waitUntil: 'load', timeout: 190000 });
  }

  async expandAll() {
    await this.page.click('button[title="Expand all"]');
  }

  async selectDesktopCheckbox() {
    await this.page.click('label[for="tree-node-desktop"]');
  }

  async getCheckBoxResult() {
    return this.page.locator('#result').textContent();
  }
}

module.exports = ElementsPage;
