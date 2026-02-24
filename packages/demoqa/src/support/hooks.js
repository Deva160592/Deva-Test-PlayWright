const{Before, After,setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(60*10000);

Before(async function(){
    // Launch browser before each scenario
       await this.launchBrowser();
}); 
After(async function(){
    // Close browser after each scenario
      //await this.closeBrowser();
});