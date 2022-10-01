
const uuid = () => Cypress._.random(0, 1e10)
describe('Schema validation Tests', () => {

  beforeEach(() => {
    cy.generateFixture()
  })

  it('Test', () => {
  cy.log('test')
  })
  //   const testdata = require('../../fixtures/play.json')
  //   testdata.forEach((data) => {
  //   it(`${data.objectID}`, () => {
  //       // const id = uuid()
  //       // data.guid = id
  //       cy.log(data.objectID)
             
  //   })
  // })
  // testdata.forEach((data) => {
  //   it(`${data.TestCase}`, () => {
  //       cy.log(JSON.stringify(data))
             
  //   })
  // })
})