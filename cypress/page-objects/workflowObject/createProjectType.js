class AddProjectType {

    createNewProjecttype() {
        cy.get(':nth-child(1) > .MuiToolbar-root > .MuiButtonBase-root > .MuiIconButton-label').click().then(() => {
            cy.wait(5000)
            cy.get('input[name="name"]').clear().type('Project Types Test')
            cy.get('div[id="mui-component-select-reviewCycle"]').click().then(() => {
                cy.get('div[id="menu-reviewCycle"]').contains('Annual').click()
            })
            cy.get('img[alt="Delete"]').click().then(() => {
                cy.get('.MuiGrid-justify-xs-space-between > .MuiButtonBase-root > .MuiIconButton-label').click()
                cy.get('input[name="workflowStates.0.name"]').clear().type('Initiate')
                cy.xpath('//div[@id="mui-component-select-workflowStates.0.group"]').click().then(() => {
                    cy.xpath('//body/div[@id="menu-workflowStates.0.group"]').contains('Admin').click()
                })
            })
            cy.get('.MuiGrid-justify-xs-space-between > .MuiButtonBase-root > .MuiIconButton-label').click()
            cy.get('input[name="workflowStates.1.name"]').clear().type('Freeze')
            cy.xpath('//div[@id="mui-component-select-workflowStates.1.group"]').click().then(() => {
                cy.xpath('//body/div[@id="menu-workflowStates.1.group"]').contains('Admin').click()
            })
            cy.get('.MuiGrid-justify-xs-space-between > .MuiButtonBase-root > .MuiIconButton-label').click()
            cy.get('input[name="workflowStates.2.name"]').clear().type('Review')
            cy.xpath('//div[@id="mui-component-select-workflowStates.2.group"]').click().then(() => {
                cy.xpath('//body/div[@id="menu-workflowStates.2.group"]').contains('Admin').click()
            })
            cy.get('.MuiGrid-justify-xs-space-between > .MuiButtonBase-root > .MuiIconButton-label').click()
            cy.get('input[name="workflowStates.3.name"]').clear().type('Approval')
            cy.xpath('//div[@id="mui-component-select-workflowStates.3.group"]').click().then(() => {
                cy.xpath('//body/div[@id="menu-workflowStates.3.group"]').contains('Admin').click()
            })
            cy.get('.MuiGrid-justify-xs-space-between > .MuiButtonBase-root > .MuiIconButton-label').click()
            cy.get('input[name="workflowStates.4.name"]').clear().type('Approved')
            cy.xpath('//div[@id="mui-component-select-workflowStates.4.group"]').click().then(() => {
                cy.xpath('//body/div[@id="menu-workflowStates.4.group"]').contains('Admin').click()
            })
            cy.get('button[type="submit"]').click()
        })
    }
}
export default AddProjectType