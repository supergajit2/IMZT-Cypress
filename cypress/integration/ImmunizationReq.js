describe('Create/Edit/Delete New Immunization Requirement', () => {
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
    it('Open Immunization Requirements Page', () => {
        cy.get('[data-testid="nav-menu"]').click()
        cy.get('[name="Immunization Requirements"]').click()
        cy.get('.u27cpt-0').contains('Immunization Requirements')
    })
    it('Create New Requirement', () => {
        cy.get('[data-testid="text-with-icon"]').contains('Add Immunization Requirement').click()
    })
    it('Logout', () => {
        cy.get('[data-testid="text-with-icon"]').contains('24').click()
        cy.get('[data-testid="link"]').contains('Sign Out').click()
    })
})