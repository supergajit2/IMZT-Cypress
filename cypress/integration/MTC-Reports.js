/// <reference types = "Cypress" />

describe('Run all the MTC Reports', () => {
    it('Run Columbia/Venezuela', () => {
        cy.get('[data-testid="nav-menu"]').click()
        cy.get('[name="MTC List"]').click()
        cy.get('[name="Colombia Missionary Training Center- Venezuela Satellite"]').click() 
    });

    it('Run Peru Remote', () => {
        cy.get('[data-testid="nav-menu"]').click()
        cy.get('[name="MTC List"]').click()
        cy.get('[name="Perú Missionary Training Center- Remote Training"]').click() 
    });
   
})