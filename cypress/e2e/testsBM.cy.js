describe('Tests BackMarket page register', () => {
  it('Inscription reussie', () => {
    cy.visit('https://preprod.backmarket.fr/fr-fr/register')
    cy.get('[data-qa=accept-cta]').click()
    cy.get('#firstName').type('Alexandre')
    cy.get('#lastName').type('Deray')
    cy.get('#signup-email').type('alexderay@jetmail.com')
    cy.get('#signup-password').type('motDePass123')
    cy.get('[data-qa=signup-submit-button]').click()
  })
  it('inscription echouée', () => {
    cy.visit('https://preprod.backmarket.fr/fr-fr/register')
    cy.get('[data-qa=accept-cta]').click()
    cy.get('#firstName').type('Jean')
    cy.get('#lastName').type('Tretien')
    cy.get('#signup-email').type('jtertien@gouple.com')
    cy.get('#signup-password').type('motDePass')
    cy.get('[data-qa=signup-submit-button]').click()
    cy.contains('Au moins 8 caractères').should('have.class', '!text-danger')
  })
  it('connexion réussie', () => {
    cy.visit('https://preprod.backmarket.fr/fr-fr/register')
    cy.get('[data-qa=accept-cta]').click()
    cy.get('#signin-email').type('alexderay@jetmail.com')
    cy.get('#signin-password').type('motDePass123')
    cy.get('[data-qa=signup-submit-button]').click()
  })
  it('connexion échouée', () => {
    cy.visit('https://preprod.backmarket.fr/fr-fr/register')
    cy.get('[data-qa=accept-cta]').click()
    cy.get('#signin-email').type('alexderay@jetmail.com')
    cy.get('#signin-password').type('motDePass1234')
    cy.get('[data-qa=signup-submit-button]').click()
  })
})