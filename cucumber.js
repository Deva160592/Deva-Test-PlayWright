module.exports = {
    default: {
        paths: ['packages/demoqa/src/features/*.feature'],     
        require: ['packages/demoqa/src/steps/*.steps.js', 'packages/demoqa/src/support/*.js'],
        format: ['progress', 'html:reports/cucumber-report.html'],
        formatOptions: {snippetInterface: 'async-await'},   
        publishQuiet: true
    }
};