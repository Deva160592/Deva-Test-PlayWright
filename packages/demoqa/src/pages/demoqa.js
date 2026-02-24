const { expect } = require('@playwright/test');
const locators = require('../locators/registrationform.locator');
class DemoQA {
    constructor(page) {
        this.page = page;
        this.url = 'https://demoqa.com/automation-practice-form';
    }
    async navigate() {
        // Increase navigation timeout to 60s and wait for full load.
        await this.page.goto(this.url, { waitUntil: 'load', timeout: 90000 });
    }

    async fillRegistrationForm(firstname, lastname, email, gender, mobile, dob, subject, hobbies, pictures, address, state, city) {
        await this.page.waitForSelector(locators.firstName, { timeout: 90000 });
        await this.page.fill(locators.firstName, firstname);
        await this.page.fill(locators.lastname, lastname);
    await this.page.fill(locators.email, email);
    // The gender radio inputs on the demo site are often hidden; click the label instead.
    // Map the incoming gender string to the corresponding input id and click its label.
    const genderLower = (gender || '').toString().toLowerCase();
    let genderId = 'gender-radio-1'; // default to Male
    if (genderLower.startsWith('f')) genderId = 'gender-radio-2';
    else if (genderLower.startsWith('o')) genderId = 'gender-radio-3';
    await this.page.locator(`//label[@for='${genderId}']`).click();
        await this.page.fill(locators.mobile, mobile);
        await this.page.locator(locators.dob).fill(dob);
        
        const subjectInput = this.page.locator (locators.subject);
        await subjectInput.click();
        await subjectInput.type(subject , { delay: 100 });
        // wait for suggestion list to appear
        await this.page.waitForTimeout(500);
        // select first suggestion
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');

        // Handle hobbies: the site uses hidden inputs for checkboxes, click labels instead.
        // Support comma-separated hobbies (e.g., "Sports, Reading").
        if (hobbies) {
            const hobbyList = hobbies.toString().split(',').map(h => h.trim().toLowerCase()).filter(Boolean);
            for (const h of hobbyList) {
                let hobbyId = null;
                // Map common hobby names to the checkbox ids used on demoqa
                if (h.startsWith('s')) hobbyId = 'hobbies-checkbox-1'; // Sports
                else if (h.startsWith('r')) hobbyId = 'hobbies-checkbox-2'; // Reading
                else if (h.startsWith('m')) hobbyId = 'hobbies-checkbox-3'; // Music/Other
                if (hobbyId) {
                    await this.page.locator(`//label[@for='${hobbyId}']`).click();
                }
            }
        }
        // Upload picture if provided (pictures may be a filename or comma-separated list)
        if (pictures) {
            // Accept either a single filename or comma-separated list and use the first file
            const file = pictures.toString().split(',')[0].trim();
            if (file) {
                try {
                    await this.page.setInputFiles(locators.pictures, file);
                } catch (err) {
                    // If file not found or upload fails, surface a clearer message
                    throw new Error(`Failed to set input files for pictures: ${file} - ${err.message}`);
                }
            }
        }
        await this.page.fill(locators.currentaddress, address);
        const stateInput = this.page.locator (locators.state);
        await stateInput.click();
        await stateInput.type(state , { delay: 100 });
        // wait for suggestion list to appear
        await this.page.waitForTimeout(500);
        // select first suggestion
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        const cityInput = this.page.locator (locators.city);
        await cityInput.click();
        await cityInput.type(city , { delay: 100 });
        // wait for suggestion list to appear
        await this.page.waitForTimeout(500);
        // select first suggestion
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
    }
    async submitForm() {
        await this.page.click(locators.submit);
    }
    async verifySuccessMessage(firstname, lastname, email, gender, mobile, dob, subject, hobbies, pictures, address, state, city) {

 const tableData = await this.page.$$eval(
  'table tbody tr',
  rows => {
    const data = {};
    rows.forEach(row => {
      const cells = row.querySelectorAll('td');
      const key = cells[0].innerText.trim();
      const value = cells[1].innerText.trim();
      data[key] = value;
    });
    return data;
  }
);

console.log('Table Data:', tableData);
expect(tableData['Student Name']).toBe(firstname + ' ' + lastname);
expect(tableData['Student Email']).toBe(email);
expect(tableData['Gender']).toBe(gender);
expect(tableData['Mobile']).toBe(mobile);
expect(tableData['Date of Birth']).toBe(dob);
expect(tableData['Subjects']).toBe(subject);
expect(tableData['Hobbies']).toBe(hobbies);
expect(tableData['Picture']).toBe(pictures);
expect(tableData['Address']).toBe(address);
expect(tableData['State and City']).toBe(state + ' ' + city);
await this.page.mouse.click(10, 10);
    }
    
}
module.exports = { DemoQA };
// Compare this snippet from packages/demoqa/src/pages/demoqa.js:
// module.exports = { DemoQA };