//work in progress
it('downloads a simple PDF file', () => {

    cy.visit('http://www.africau.edu/')
  
    cy.contains('Download')
      .click()
    cy.log('this is pdf read test')
    cy.readFile('cypress/downloads/simple.pdf', 'utf8')
    cy.task('readPdf', 'cypress/downloads/simple.pdf')
  
  })