 describe('Some Tests', () => {
  before(() => {
      // runs once before all tests
    cy.generateFixture()
  })
  
const testdata = require('../../fixtures/play.json')

  testdata.hits.forEach((data) => {
    it(`${data.objectId}`, () => {
        cy.log(JSON.stringify(data))
    })
  }) 
})   


























  // describe('Hacker Stories', () => {
  //   before(() => {
  //     // runs once before all tests
  //     cy.generateFixture()
  //   })
    
  //   let testdata = '../../fixtures/play.json'
  //   testdata.hits.forEach((data) => {
  //   it(`${data.objectID}`, () => {
  //       cy.log(JSON.stringify(data))
  //   })
  // })

/* WORKS but if one of the object fails while sending to the api it wont probaly try the rest of them */

// it('Tests', () => {
//     cy
//     .fixture('play')
//     .then((list) => {
//       // cy.log(JSON.stringify(list.hits))
//       list.hits.forEach((item) => {
//         cy.log(JSON.stringify(item))
//         })
//     })
// })
