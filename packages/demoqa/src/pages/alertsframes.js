class alertsframesPage {
  constructor(page) {
    this.page = page;
  }

  async handleAlert() {
    await this.page.goto('https://demoqa.com/alerts');
    this.page.once('dialog', dialog => dialog.accept());
    await this.page.click('#alertButton');
  }

  async assertFrame() {
    await this.page.goto('https://demoqa.com/frames');
    return this.page
      .frameLocator('#frame1')
      .locator('h1')
      .textContent();
  }
}

module.exports = alertsframesPage;
