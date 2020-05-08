describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.url().should('equal', 'http://localhost:3000/')
  })

  it('should shows title', () => {
    cy.get('p').should(
      'have.text',
      'Edit src/pages/Home/Home.tsx and save to reload.'
    )
    cy.get('a').should('have.text', 'Learn React')
  })
})
