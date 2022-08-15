const { defineConfig } = require("cypress");
import { readPdf } from 'cypress/scripts/readPdf' 

module.exports = defineConfig({
  projectId: '84u68g',
  e2e: {  
    setupNodeEvents(on, config) {
      on('task', {
        readPdf
      })
    },
    defaultCommandTimeout: 10000,
    baseUrl: 'http://automationpractice.com/',
    experimentalSessionAndOrigin: false,
    specPattern: 'cypress//e2e//**/*.{js,jsx,ts,tsx}',
    video:false
  },
});
