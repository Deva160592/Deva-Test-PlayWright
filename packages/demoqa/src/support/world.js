const{setWorldConstructor} = require('@cucumber/cucumber');
const{chromium} = require('playwright');

class CustomWorld
{
    constructor(){
        this.browser = null;
        this.page = null;
        this.context = null;
    }
    async launchBrowser(){
        this.browser = await chromium.launch({headless: process.env.HEADLESS === 'false'});
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }
    async closeBrowser(){
        await this.browser.close();
    }   
}
// Register the CustomWorld with Cucumber
setWorldConstructor(CustomWorld);
