const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const ElementsPage = require('../pages/elements');

/* ---------- TEXT BOX ---------- */
Given('user opens text box page', async function () {
  this.elements = new ElementsPage(this.page);
  await this.elements.openTextBox();
});

When('user submits text box form', async function () {
  await this.elements.fillTextBox();
});

Then('text box output should match entered values', async function () {
  const output = await this.elements.getTextBoxOutput();

  expect(output).toContain('John Doe');
  expect(output).toContain('john@test.com');
  expect(output).toContain('Address 1');
  expect(output).toContain('Address 2');
});

/* ---------- RADIO BUTTON ---------- */
Given('user opens radio button page', async function () {
  this.elements = new ElementsPage(this.page);
  await this.elements.openRadioButton();
});

When('user selects Yes option', async function () {
  await this.elements.selectYesRadio();
});

Then('radio button result should be Yes', async function () {
  const result = await this.elements.getRadioResult();
  expect(result).toBe('Yes');
});

/* ---------- CHECK BOX ---------- */
Given('user opens check box page', async function () {
  this.elements = new ElementsPage(this.page);
  await this.elements.openCheckBox();
});

When('user selects Desktop checkbox', async function () {
  await this.elements.expandAll();
  await this.elements.selectDesktopCheckbox();
});

Then('selected checkbox result should be displayed', async function () {
  const result = await this.elements.getCheckBoxResult();

  expect(result).toContain('desktop');
  expect(result).toContain('notes');
  expect(result).toContain('commands');
});
