class CreateNewContentLibrary {

    addContentLib() {
        cy.get(':nth-child(1) > .MuiToolbar-root > .MuiButtonBase-root > .MuiIconButton-label').click().then(() => {
            cy.wait(5000)
            cy.get('input[name="name"]').clear().type('Content Library Test')
            cy.get('div[id="mui-component-select-defaultContentType"]').click().then(() => {
                cy.xpath('//body/div[@id="menu-defaultContentType"]').contains('Default').click()
            })
            cy.get('div[id="mui-component-select-groups"]').click().then(() => {
                cy.xpath('//body/div[@id="menu-groups"]').contains('Admin').click({ force: true })
            })
            cy.get('.MuiBox-root > form').contains('Save').click({ force: true })
        })
    }
}
export default CreateNewContentLibrary