// <reference types = "Cypress" />

describe('Run all the MTC Reports', () => {
    beforeEach(() => {
        Cypress.Cookies.preserveOnce(...["ChurchSSO-int", "JSESSIONID", "__VCAP_ID__"])
    })
    it('Successful login', () => {
        cy.visit('https://missionary-stage.churchofjesuschrist.org/portal/admin-home?lang=eng')
        cy.get('#username').type('imt24')
        cy.get('#password').type('password1')
        cy.get('#sign-in').click()
        cy.get('[data-testid="title-text"]').contains('Missionary Immunization Search')
    });    
    it('Run Columbia/Venezuela', () => {
        cy.get('[data-testid="nav-menu"]').click()
        cy.get('[name="MTC List"]').click()
        cy.get('[name="Colombia Missionary Training Center- Venezuela Satellite"]').click() 
        cy.get('[data-testid="subtitle-text"]').contains('Summary Report')
    });
    it('Run Peru Remote', () => {
        cy.get('[data-testid="nav-menu"]').click()
        cy.get('[name="MTC List"]').click()
        cy.get('[name="Perú Missionary Training Center- Remote Training"]').click() 
        cy.get('[data-testid="subtitle-text"]').contains('Summary Report')
    });
    it('Run S. Africa Remote', () => {
        cy.get('[data-testid="nav-menu"]').click()
        cy.get('[name="MTC List"]').click()
        cy.get('[name="South Africa Missionary Training Center- Remote Training"]').click() 
        cy.get('[data-testid="subtitle-text"]').contains('Summary Report')
    });
})