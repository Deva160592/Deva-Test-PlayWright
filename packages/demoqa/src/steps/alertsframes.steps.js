const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const alertsframesPage = require('../pages/alertsframes');

When('user handles alert', async function () {
  this.alerts = new alertsframesPage(this.page);
  await this.alerts.handleAlert();
});

Then('user validates frame content', async function () {
  const text = await this.alerts.assertFrame();
  expect(text).toBe('This is a sample page');
});
