// https://docs.cypress.io/api/introduction/api.html

describe('Test the root page', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Your Vue.js + TypeScript App')
  })
})
// describe('Test the login page', () => {
//   it('Visit the app login url', () => {
//     cy.visit('/login')
//     cy.contains('h1','Sign in to Voter')
//   })
// })
