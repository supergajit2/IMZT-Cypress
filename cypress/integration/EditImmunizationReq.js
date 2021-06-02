describe ('Edit Immunization Requirement', () => {
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
    });
    it('Open Immunization Requirement', () => {
        cy.get('.kUEoEl').contains('Visitors').click()
        cy.get('[class="cizuhu-0 jLgude"]').eq(0).should('have.value', '203')
        cy.get('[class="cizuhu-0 jLgude"]').eq(1).should('have.value', 'SQ')
        cy.get('.eMRJJx').contains('Visitors')
    });
    it('Add Vaccination Option', () => {
        cy.get('[data-testid=option-set]').contains('Add Vaccination Option').click()
        cy.get('.sc-11cmx9o-0').click()
        cy.get('.u27cpt-0').eq(1).contains('Vaccination Rule Configuration')
        cy.get('[class="cizuhu-0 jLgude"]').eq(3).type('3')
        
    })
})
