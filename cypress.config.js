const { defineConfig } = require("cypress");


module.exports = defineConfig({
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

    setupNodeEvents(on, config) {
      chromeWebSecurity: false,
      // implement node event listeners here
      screenshotOnRunFailure=true;
      pageLoadTimeout: 120000, // Increase timeout to 2 minutes
      require('cypress-mochawesome-reporter/plugin')(on); //for html reports
       require("cypress-terminal-report/src/installLogsPrinter")(on);//captures logs from the browser and Node.js process, making debugging easier. It provides detailed logs of failed tests, network requests, console errors, and more.
       on('task', {
        clearSession() {
          console.log('Clearing session...');
          return null; // Return `null` or `true` to signal success
        }
      });
    },

  },
});
