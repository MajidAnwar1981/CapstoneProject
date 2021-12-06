class CreateNewContent {

    // RD20-486 Content create function
    createNewContentOnlib() {
        cy.get('input[name=topic').type('Deletion Content Test')
        cy.get('#mui-component-select-contentType').click({ force: true }).then(() => {
            cy.xpath('//body/div[@id="menu-contentType"]').contains('Shahed T1').click({ force: true })
        })
        cy.xpath('//div[@id="mui-component-select-library"]').click({ force: true }).then(() => {
            cy.get('.Mui-selected').contains('shahed test').click({ force: true })
        })
        cy.get('div[name="relatedContents"]').click().then(() => {
            cy.get('div[name="relatedContents"]').type('Call quality', { timeout: 2000 }).then(() => {
                cy.xpath('//li[contains(text(),"12: Call quality")]').contains('12: Call quality').click()
            })
        })
        cy.get('.MuiBox-root > form').contains('Next').click({ force: true })
        cy.get('.MuiBox-root > form').contains('Back').click({ force: true })
        cy.get('input[name="sme"]').click().then(() => {
            cy.get('input[name="sme"]').type('Ali, MDShahed', { timeout: 2000 }).then(() => {
                cy.xpath('//li[contains(text(),"Ali, MDShahed")]').contains('Ali, MDShahed').click()
            })
        })
        cy.get('#mui-component-select-reviewCycle').click({ force: true }).then(() => {
            cy.contains('Annual').click({force: true})
        })
        cy.get('#mui-component-select-attributeProfile').click({ force: true }).then(() => {
            cy.xpath('//body/div[@id="menu-attributeProfile"]').contains('ABC').click()
            cy.get('.MuiBox-root > form').contains('Next').click({ force: true })
            cy.get('.MuiBox-root > form').contains('Next').click({ force: true })
            cy.get('.MuiBox-root > form').contains('Next').click({ force: true })
        })
        cy.get('textarea[name=text]').clear().type('Deletion enhancement Test')
        const fixtureFile = 'RapidDocs US Letter.docx';
        cy.get('input[name="file"]').attachFile(fixtureFile);
        cy.wait(5000)
    }
}
export default CreateNewContent