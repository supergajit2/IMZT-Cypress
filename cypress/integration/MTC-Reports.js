// <reference types = "Cypress" />

describe('Run all the MTC Reports and check numbers', () => {
    before(() => {
        cy.visit(Cypress.env("testAdminHome"))
        cy.fixture('users').then(function(user) {
            globalThis.user = user
        })
        cy.fixture('MTC').then(function(mtc) {
            globalThis.mtc = mtc
        })
    })
    beforeEach(() => {
        Cypress.Cookies.preserveOnce(...["ChurchSSO-int", "JSESSIONID", "__VCAP_ID__"])
    })
    it('Successful login', () => {
        cy.login(user.imt23, user.password)
        cy.get('[data-testid="title-text"]').contains('Missionary Immunization Search')
    });    
    it("Run all reports and confirm # of missionary Rows", () => {
        
        globalThis.mtc.MTC.forEach(function(element) {
            cy.get('[data-testid="nav-menu"]').click()
            cy.get('[name="MTC List"]').click()
            cy.get('[name="' + element + '"]').click()
            //cy.log(element)
            cy.get('[data-testid="title-text"]').contains(element)
            cy.get(':nth-child(1) > .WeekSummary__TypeCount-sc-1wgr37a-5').then(($younger) => {
                const younger = $younger.text()
                //cy.log(younger)
                cy.get(':nth-child(3) > .WeekSummary__TypeCount-sc-1wgr37a-5').then(($senior) => {
                    const senior = $senior.text()
                    //cy.log(senior)
                    const reporting = (+younger + +senior)
                    //cy.log(reporting)
                    if(reporting>0) {
                        cy.get('.MissionaryRow__A11yStyled-sc-1jdo08v-2 > .details > .sc-1bujx24-0 > :nth-child(1)').then(missionaryRow => {
                            const count = Cypress.$(missionaryRow).length
                            expect(reporting).to.eq(count)
                        })
                    }
                })
                
            })
            
        })
    })
})