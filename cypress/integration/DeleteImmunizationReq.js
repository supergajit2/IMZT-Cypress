/// <reference types = "Cypress" />

describe('Delete Immunization Requirement', () => {
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
    });
    it('Open Immunization Requirement', () => {
        cy.get('.kUEoEl').contains('Visitors').click()
        cy.get('[class="cizuhu-0 jLgude"]').eq(0).should('have.value', '203')
        cy.get('[class="cizuhu-0 jLgude"]').eq(1).should('have.value', 'SQ')
        cy.get('.eMRJJx').contains('Visitors')
    });
    it('Delete Requirement', () => {
        cy.get('.Buttons__EndButton-sc-5cvxcs-2 > .sc-7932sm-0').click()
        cy.get(':nth-child(2) > .sc-1lb7nf5-0').click()
        cy.get('.pay24v-0').contains('The requirement  known as Visitors are not permitted. has been deleted')
    })
})