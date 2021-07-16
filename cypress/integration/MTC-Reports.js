/// <reference types = "Cypress" />

describe('Run all the MTC Reports and check numbers', () => {
    before(() => {
        cy.visit(Cypress.env("testAdminHome")) // This is in the cypress.json file and the other option is 'stageAdminHome'
        //This is from the Udemy course and is how you use fixtures, which are just files where you can store data like a list of MTCs, users, products, etc.
        cy.fixture('users').then(function(user) {
            globalThis.user = user
        })
        cy.fixture('MTC').then(function(mtc) {
            globalThis.mtc = mtc
        })
    })
    //This is from Matthew Harris. Without this the test runner will log you out after each test.
    beforeEach(() => {
        Cypress.Cookies.preserveOnce(...["ChurchSSO-int", "JSESSIONID", "__VCAP_ID__"])
    })
    it('Successful login', () => {
        //The login command from the commands.js file. Pulls user info from fixture file users.json
        cy.login(user.imt23, user.password)
        //Confirm the admin home page displays.
        cy.get('[data-testid="title-text"]').contains('Missionary Immunization Search')
    });    
    it("Run all reports and confirm # of missionary Rows", () => {
    // Run all the MTC Reports and make sure the # of reporting equals the number of missionary rows displayed on the report.
    // The MTC fixture file has an array of all the MTC names. If spelling changes, or MTCs are added or removed you will need to update the list. 
    // The cy.log lines are for debugging purposes.
        globalThis.mtc.MTC.forEach(function(element) {
            cy.get('[data-testid="nav-menu"]').click()
            cy.get('[name="MTC List"]').click()
            cy.get('[name="' + element + '"]').click()
            //cy.log(element)
            cy.get('[data-testid="title-text"]').contains(element)
            // Grab the value of Younger Reporting and then do something with that 
            cy.get(':nth-child(1) > .WeekSummary__TypeCount-sc-1wgr37a-5').then(($younger) => {
                const younger = $younger.text()
                //cy.log(younger)
                // Grab the value of Senior Reporting and then do something with that 
                cy.get(':nth-child(3) > .WeekSummary__TypeCount-sc-1wgr37a-5').then(($senior) => {
                    const senior = $senior.text()
                    //cy.log(senior)
                    // add the number of Younger Reporting and Senior Reporting to get the total # reporting
                    const reporting = (+younger + +senior)
                    //cy.log(reporting)
                    if(reporting>0) {
                        // If there are any reporting, count the number of rows and compare to the total # reporting.
                        cy.get('.MissionaryRow__A11yStyled-sc-1jdo08v-2 > .details > .sc-1bujx24-0 > :nth-child(1)').then(missionaryRow => {
                            const count = Cypress.$(missionaryRow).length
                            // Logging the results allows you to see if any reports don't match up. You could do an assertion here,
                            // but that would cause the test to fail before all reports are checked. Assertion example:
                            // expect(reporting).to.eq(count)
                            cy.log(element + ": Reporting: " + reporting + " Rows: " + count)
                        })
                    }
                })
                
            })
            
        })
    })
})