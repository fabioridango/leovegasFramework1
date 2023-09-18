const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  env: { // Sharing variables between Test Files using Environment Variables(key: value), in the spec file use e.g : cy.visit(Cypress.env('login_url'))
    login_url: '/login',
    products_url: '/products',
  },
  e2e: {
    testIsolation: true, // true enabled to ensure a clean browser context between tests 
    //baseUrl: 'https://www.leovegas.com/en-row/',
    //defaultCommandTimeout: 10000,
    //pageLoadTimeout: 10000,
    //chromeWebSecurity: false,
    //video = true
    viewportWidth: 1400,
    viewportHeight: 900,
    specPattern: [
      "**/*feature",
    ],
    setupNodeEvents,
  },
});