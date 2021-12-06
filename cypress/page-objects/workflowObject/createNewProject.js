class CreateNewProject {

    // RD20-437 Project creation Function
    createNewProjectOnProject() {
        cy.get('img[alt="Add"]').click().then(() => {
            cy.wait(5000)
            cy.get('input[name="title"]').clear().type('Shahed TT1')
            cy.get('div[id="mui-component-select-projectType"]').click({ force: true }).then(() => {
                cy.xpath('//body/div[@id="menu-projectType"]').contains('mshahed Test').click({ force: true })
            })
            cy.get('input[name="client"]').clear().type('QA').then(() => {
                cy.get('.MuiPaper-root > .MuiList-root > [tabindex="0"]').contains('QA').click()
            })
            /*cy.get('#mui-component-select-language').click().then(() => {
                 cy.xpath('//body/div[@id="menu-language"]').contains('English').click()
            })*/
            cy.get('div[id="mui-component-select-attributeProfile"]').click().then(() => {
                cy.xpath('//body/div[@id="menu-attributeProfile"]').contains('ABC').click({ force: true })
            })
            cy.get('div[id="mui-component-select-reviewCycle"]').click().then(() => {
                cy.xpath('//body/div[@id="menu-reviewCycle"]').contains('Annual').click({ force: true })
            })
            cy.get('button[type="submit"]').click()
            cy.get('button[type="submit"]').click()
            const fixtureFile = 'RFP Vendor RFI.xlsx';
            cy.get('input[name="file"]').attachFile(fixtureFile);
            cy.get('button[type="submit"]').click()
            cy.wait(5000)
            cy.get('textarea[name="note"]').clear().type('Test Note').type('{enter}')
            cy.wait(5000)
            cy.get('button[type="submit"]').click()
        })
    }
}
export default CreateNewProject