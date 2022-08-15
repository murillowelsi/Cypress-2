
it('downloads a simple PDF file', () => {

    cy.visit('http://www.africau.edu/')
  
    cy.contains('Download')
      .click()
  
    cy.readFile('cypress/downloads/simple.pdf', 'utf8')
    cy.task('readPdf', 'cypress/downloads/simple.pdf')
  
  })