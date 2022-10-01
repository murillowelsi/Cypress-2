
const uuid = () => Cypress._.random(0, 1e10)
describe('Schema validation Tests', () => {

    const testdata = require('../../fixtures/play.json')
    testdata.forEach((data) => {
    it(`${data.guid}`, () => {
        const id = uuid()
        data.guid = id
        cy.log(data.guid)
             
    })
  })
  testdata.forEach((data) => {
    it(`${data.TestCase}`, () => {
        cy.log(JSON.stringify(data))
             
    })
  })
})