// <reference types = "Cypress" />

describe('Run all the MTC Reports', () => {
    beforeEach(() => {
        Cypress.Cookies.preserveOnce(...["ChurchSSO-int", "JSESSIONID", "__VCAP_ID__"])
    })
    it('Successful login', () => {
        cy.visit('https://missionary-stage.churchofjesuschrist.org/portal/admin-home?lang=eng')
        cy.get('#username').type('imt23')
        cy.get('#password').type('password1')
        cy.get('#sign-in').click()
        cy.get('[data-testid="title-text"]').contains('Missionary Immunization Search')
    });    
    it('Run Columbia/Venezuela', () => {
        cy.get('[data-testid="nav-menu"]').click()
        cy.get('[name="MTC List"]').click()
        cy.get('[name="Colombia Missionary Training Center- Venezuela Satellite"]').click() 
        cy.get('[data-testid="subtitle-text"]').contains('Summary Report')
        cy.get('[data-testid="week-summary"]').contains('Younger')
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
    it('Run Columbia Remote', () => {
        cy.get('[data-testid="nav-menu"]').click()
        cy.get('[name="MTC List"]').click()
        cy.get('[name="Colombia Missionary Training Center- Remote Training"]').click() 
        cy.get('[data-testid="subtitle-text"]').contains('Summary Report')
    });
    it('Run Ghana Remote', () => {
        cy.get('[data-testid="nav-menu"]').click()
        cy.get('[name="MTC List"]').click()
        cy.get('[name="Ghana Missionary Training Center- Remote Training"]').click() 
        cy.get('[data-testid="subtitle-text"]').contains('Summary Report')
    });
    it('Run Provo Remote', () => {
        cy.get('[data-testid="nav-menu"]').click()
        cy.get('[name="MTC List"]').click()
        cy.get('[name="Provo Missionary Training Center- Remote Training"]').click() 
        cy.get('[data-testid="subtitle-text"]').contains('Summary Report')
    });
    it('Run Brazil Remote', () => {
        cy.get('[data-testid="nav-menu"]').click()
        cy.get('[name="MTC List"]').click()
        cy.get('[name="Brazil Missionary Training Center- Remote Training"]').click() 
        cy.get('[data-testid="subtitle-text"]').contains('Summary Report')
    });
    it('Run Mexico Remote', () => {
        cy.get('[data-testid="nav-menu"]').click()
        cy.get('[name="MTC List"]').click()
        cy.get('[name="Mexico Missionary Training Center- Remote Training"]').click() 
        cy.get('[data-testid="subtitle-text"]').contains('Summary Report')
    });
    it('Run England Remote', () => {
        cy.get('[data-testid="nav-menu"]').click()
        cy.get('[name="MTC List"]').click()
        cy.get('[name="England Missionary Training Center- Remote Training"]').click() 
        cy.get('[data-testid="subtitle-text"]').contains('Summary Report')
    });
    it('Run New Zealand Remote', () => {
        cy.get('[data-testid="nav-menu"]').click()
        cy.get('[name="MTC List"]').click()
        cy.get('[name="New Zealand Missionary Training Center- Remote Training"]').click() 
        cy.get('[data-testid="subtitle-text"]').contains('Summary Report')
    });
    it('Run Phillippines Remote', () => {
        cy.get('[data-testid="nav-menu"]').click()
        cy.get('[name="MTC List"]').click()
        cy.get('[name="Philippines Missionary Training Center- Remote Training"]').click() 
        cy.get('[data-testid="subtitle-text"]').contains('Summary Report')
    });
    /* it('Logout', () => {
        cy.get('[data-testid="text-with-icon"]').contains('24').click()
        cy.get('[data-testid="link"]').contains('Sign Out').click()
    }) */
})