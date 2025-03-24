const { defineConfig } = require("cypress");


module.exports = defineConfig({
projectId: "Saik007"


  defaultCommandTimeout: 40000,
  video: true,
  reporter: 'cypress-mochawesome-reporter', //for html reports
  reporterOptions: {
    html: true,
    json: true,
    charts: true,
    overwrite: true,
    printLogsToConsole: "always",
    printLogsToFile: "always",
    outputRoot: "cypress/logs",
    outputTarget: {
      "cypress/logs/output.log": "txt",
      "cypress/reports/output.json": "json",
    },
  },
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com/",
    setupNodeEvents(on, config) {
      chromeWebSecurity: false,
      // implement node event listeners here
      screenshotOnRunFailure=true;
      pageLoadTimeout: 120000, // Increase timeout to 2 minutes
      require('cypress-mochawesome-reporter/plugin')(on); //for html reports
       require("cypress-terminal-report/src/installLogsPrinter")(on);//captures logs from the browser and Node.js process, making debugging easier. It provides detailed logs of failed tests, network requests, console errors, and more.
       on('task', {
        logMessage(message) {
          console.log(message); // This prints logs in the VS Code terminal
          return null; // Returning `null` signals success
        },
      });
    },

  },
});
