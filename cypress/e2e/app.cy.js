describe('App flow', () => {
  it('', () => {
    // Home - redirect to login
    cy.visit('http://localhost:3000/')
    cy.url().should('include', '/login')

    // Movie details - redirect to login
    cy.visit('http://localhost:3000/movies/true-grit')
    cy.url().should('include', '/login')

    // Login
    cy.get('form').should('exist')
    cy.get('input').first().type(Cypress.env('email'))
    cy.get('input').eq(1).type(Cypress.env('password'))
    cy.get('button').click()

    cy.url().should('eq', 'http://localhost:3000/')

    cy.visit('http://localhost:3000/movies/true-grit')
  })
})
