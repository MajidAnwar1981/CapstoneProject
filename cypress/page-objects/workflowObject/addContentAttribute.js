class AddContentAttribute {
    addContentAttribute() {
        cy.get('.MuiGrid-grid-sm-7 > .MuiToolbar-root > .MuiButtonBase-root > .MuiIconButton-label').click().then(() => {
            cy.wait(5000)
            cy.get('input[name="name"]').clear().type('Add Attribute Test')
            cy.get('input[name="showInList"]').click()
            cy.get('input[name="includeInExport"]').click()
            cy.get('div[id="mui-component-select-type"]').click().then(() => {
                cy.xpath('//body/div[@id="menu-type"]').contains('Contact').click().then(() => {
                    cy.get('div[id="mui-component-select-groupId"]').click().then(() => {
                        cy.xpath('//body/div[@id="menu-groupId"]').contains('Admin').click()
                    })
                })
            })
            cy.get('.MuiBox-root > form').contains('Save').click()
        })
    }
}
export default AddContentAttribute