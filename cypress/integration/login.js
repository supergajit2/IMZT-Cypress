/// <reference types = "Cypress" />

describe('Login to Missionary Portal', () => {
    it('Successful login', () => {
        cy.visit('https://missionary-stage.churchofjesuschrist.org/portal/home')
        cy.get('#username').type('imt24')
        cy.get('#password').type('password1')
        cy.get('#sign-in').click()
        cy.get('[data-testid="title-text"]').contains('Missionary Immunization Search')
    })
})