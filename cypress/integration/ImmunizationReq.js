describe('Create/Edit/Delete New Immunization Requirement', () => {
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
    it('Open Immunization Requirements Page', () => {
        cy.get('[data-testid="nav-menu"]').click()
        cy.get('[name="Immunization Requirements"]').click()
        cy.wait(5000)
        cy.get('.u27cpt-0').contains('Immunization Requirements')
    })
    // The DB saves deleted alt groups so it will error if the same block_id is used twice. If you want to
    // run this multiple times btween DB refreshes you will have to change the typed values in these two lines:
    // cy.get('.cizuhu-0').eq(1).type('203')
    // cy.get('.cizuhu-0').eq(2).type('SQ')
    
    it('Create New Requirement', () => {
        cy.get('[data-testid="text-with-icon"]').contains('Add Immunization Requirement').click()
        cy.get('[data-testid="req-config"]').contains('Identification')
        cy.get('.cizuhu-0').eq(1).type('203')
        cy.get('.cizuhu-0').eq(2).type('SQ')
        cy.get('.eMRJJx')
        cy.get('[data-testid="select"]').select('Regular series').should('have.value', '3')
        cy.wait(5000)
        cy.get('p').contains('Before you')
        cy.get('[data-testid="button"]').contains('Create Requirement').click()
        cy.get('.eSguHt').contains('Continue').click()
        cy.get('.u27cpt-0').contains('Immunization Requirements')
    })
    /* it('Logout', () => {
        cy.get('[data-testid="text-with-icon"]').eq(1).click()
        cy.get('[data-testid="link"]').contains('Sign Out').click()
    }) */
})