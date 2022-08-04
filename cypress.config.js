const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '84u68g',
  e2e: {  
    defaultCommandTimeout: 10000,
    baseUrl: 'http://automationpractice.com/',
    experimentalSessionAndOrigin: false,
    specPattern: 'cypress//e2e//**/*.{js,jsx,ts,tsx}',
    video:false
  },
});
