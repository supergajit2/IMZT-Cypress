describe ('Edit Immunization Requirement', () => {
    beforeEach(() => {
        Cypress.Cookies.preserveOnce(...["ChurchSSO-int", "JSESSIONID", "__VCAP_ID__"])
    })
    it('Successful login', () => {
        cy.visit('https://missionary-test.churchofjesuschrist.org/portal/admin-home?lang=eng')
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
        cy.get('[class="cizuhu-0 jLgude"]').eq(2).type('3')
        cy.get('.sc-7932sm-0').eq(1).contains('Load Block').click()
        cy.get('[data-testid=form-wrapper] > :nth-child(2) > [data-testid=space] > [data-testid=block-id-description] > .BlockIdDescription__Content-s0miop-4 > :nth-child(2) > .BlockIdDescription__Description-s0miop-0').contains('{TITLE} {FULL_NAME}{BR}{ADDR}')
        cy.get('[class="cizuhu-0 jLgude"]').eq(3).type('SQ1')
        cy.get('[data-testid="select"]').eq(1).select('2 doses').should('have.value', '2')
        cy.get('.NextDoseRule__InputFixedWidth-sc-1opg6ft-1').type('25')
        cy.get('[data-testid="select"]').eq(3).select('Immunity for 7 years').should('have.value', '2555')
        cy.get('[data-testid="button"]').contains('Create Rule').click()
        cy.get(':nth-child(2) > .sc-1lb7nf5-0').click()
        cy.get('.VaccinationOption__ButtonWrapper-sc-1cg6md6-1 > [data-testid=select]').contains('{TITLE} {FULL_NAME}')
        cy.get('.Buttons__MainButtons-sc-5cvxcs-1 > [data-testid=button]').contains('Update Requirement')
        cy.get(':nth-child(2) > .sc-1lb7nf5-0').click()
        cy.get('.pay24v-0').contains('The requirement  known as Visitors are not permitted. has been updated')
    })
})
