describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.url().should('equal', 'http://localhost:3000/')
  })

  it('should shows slicks', () => {
    cy.get('[data-cy="slick"]')
      .eq(0)
      .within(() => {
        cy.get('p').eq(0).should('have.text', 'Big Sale')
        cy.get('p').eq(1).should('have.text', "Women's Summer Collection")
      })

    cy.get('[data-cy="slick"]')
      .eq(1)
      .within(() => {
        cy.get('p').eq(0).should('have.text', '50% OFF')
        cy.get('p').eq(1).should('have.text', "Men's Winter Collection")
      })

    cy.get('[data-cy="slick"]')
      .eq(2)
      .within(() => {
        cy.get('p').eq(0).should('have.text', "Today's Special")
        cy.get('p').eq(1).should('have.text', 'Sale on Jacket')
      })
  })
})
