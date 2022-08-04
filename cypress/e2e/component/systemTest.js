import HomePage from '../../pages/HomePage'
describe('These are component tests', () => {
  before('Launch the application', () => {
    cy.visit('/')
  })
it('Test to verify that the menu item Women is displayed', () => {
    cy.get('a[title="Women"]')
      .should('be.visible')
      .and('have.text','Women')

      cy.get('a[title="Women"]').trigger('mouseover')
      cy.get('a[title="Women"]').should('have.css', 'display', 'block')

      const homePage = new HomePage()
      homePage.getWomenMenu()
      // cy.get('#block_top_menu > ul.sf-menu > li:nth-child(1) > a')
              .should('have.text','Women')
              // .siblings('ul')
              // .contains('a[title]','Dresses')
      homePage.getDressesCategory()
              .should('have.text','Dresses')
              // .should('have.attr','href').and('include', 'id_category=8')
})
})
