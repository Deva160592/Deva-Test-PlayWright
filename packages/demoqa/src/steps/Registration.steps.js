const { When } = require ('@cucumber/cucumber');
const { DemoQA } = require('../pages/demoqa');
When('I navigate to the student registration form page', async function () {
    // instantiate the page object exported from ../pages/demoqa.js
    this.demoPage = new DemoQA(this.page);
    await this.demoPage.navigate();
});
When('user enters {string},{string},{string},{string},{string}, {string},{string},{string},{string},{string},{string},{string}', async function (firstname, lastname, email, gender, mobile, dob, subject, hobbies, pictures, address, state, city) {
      await this.demoPage.fillRegistrationForm(firstname, lastname, email, gender, mobile, dob, subject, hobbies, pictures, address, state, city);
});
When('user submits the registration form', async function () {
    await this.demoPage.submitForm();
});
When('registration should be successful {string},{string},{string},{string},{string}, {string},{string},{string},{string},{string},{string},{string}', async function (firstname, lastname, email, gender, mobile, dob, subject, hobbies, pictures, address, state, city) {
    await this.demoPage.verifySuccessMessage(firstname, lastname, email, gender, mobile, dob, subject, hobbies, pictures, address, state, city);
});
    