/// <reference types = "Cypress" />

describe('Create New Immunization Requirement', () => {
    before(() => {
        cy.visit(Cypress.env("stageAdminHome"))
        cy.fixture('users').then(function(user) {
            globalThis.user = user
        })
    })
    beforeEach(() => {
        Cypress.Cookies.preserveOnce(...["ChurchSSO-int", "JSESSIONID", "__VCAP_ID__"])
    })
    it('Successful login', () => {
        cy.login(user.imt23, user.password)
        cy.get('[data-testid="title-text"]').contains('Missionary Immunization Search')
    });  

    it('Open Immunization Requirements Page', () => {
        cy.get('[data-testid="nav-menu"]').click()
        cy.get('[name="Immunization Requirements"]').click()
        cy.wait(5000)
        cy.get('.u27cpt-0').contains('Immunization Requirements')
    })
    // The DB saves deleted alt groups so it will error if the same block_id is used twice. If you want to
    // run this multiple times between DB refreshes you will have to change the typed values in these two lines:
    // cy.get('.BlockIdDescription__FormFieldSmall-s0miop-3').type('203')
    // cy.get('.ReqConfig__FormFieldSmall-sc-1ph5kx2-4 > .sc-8e6q3s-0 > .cizuhu-0').type('SQ')
    // and the verification done in this line will also need to be changed:
    // cy.get('.eMRJJx').contains('Visitors')
    
    it('Create New Requirement', () => {
        cy.get('[data-testid="text-with-icon"]').contains('Add Immunization Requirement').click()
        cy.get('[data-testid="req-config"]').contains('Identification')
        cy.get('.BlockIdDescription__FormFieldSmall-s0miop-3').type('203')
        cy.get('.ReqConfig__FormFieldSmall-sc-1ph5kx2-4 > .sc-8e6q3s-0 > .cizuhu-0').type('SQ')
        cy.get('.eMRJJx').contains('Visitors')
        cy.get('[data-testid="select"]').select('Regular series').should('have.value', '3')
        cy.wait(5000)
        cy.get('p').contains('Before you')
        cy.get('[data-testid="button"]').contains('Create Requirement').click()
        cy.get('.eSguHt').contains('Continue').click()
        cy.get('.u27cpt-0').contains('Immunization Requirements')
    })

    it('Logout', () => {
        cy.get('[data-testid="text-with-icon"]').eq(1).click()
        cy.get('[data-testid="link"]').contains('Sign Out').click()
    }) 
})