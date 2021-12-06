class AddContentType {

    createNewContentType() {
        cy.get(':nth-child(2) > .MuiToolbar-root > .MuiButtonBase-root > .MuiIconButton-label').click().then(() => {
            cy.wait(5000)
            cy.get('input[name="name"]').clear().type('Review Test')
            cy.get('div[id="mui-component-select-reviewCycle"]').click().then(() => {
                cy.xpath('//body/div[@id="menu-reviewCycle"]').contains('Annual').click()
            })
            cy.get('img[alt="Delete"]').click().then(() => {
                cy.wait(2000)
                cy.get('.MuiGrid-root > .MuiButtonBase-root > .MuiIconButton-label').click().then(() => {
                    cy.get('input[name="workflowStates.0.name"]').clear().type('Initiate')
                    cy.get('div[id="mui-component-select-workflowStates.0.group"]').click().then(() => {
                        cy.xpath('//body/div[@id="menu-workflowStates.0.group"]').contains('Admin').click()
                    })
                    cy.get('input[name="workflowStates.0.canPublish"]').click()
                })

                cy.wait(2000)
                cy.get('.MuiGrid-root > .MuiButtonBase-root > .MuiIconButton-label').click().then(() => {
                    cy.get('input[name="workflowStates.1.name"]').clear().type('Evaluate')
                    cy.get('div[id="mui-component-select-workflowStates.1.group"]').click().then(() => {
                        cy.xpath('//body/div[@id="menu-workflowStates.1.group"]').contains('Admin').click()
                    })
                    cy.get('input[name="workflowStates.1.canPublish"]').click()
                })

                cy.wait(2000)
                cy.get('.MuiGrid-root > .MuiButtonBase-root > .MuiIconButton-label').click().then(() => {
                    cy.get('input[name="workflowStates.2.name"]').clear().type('Edit')
                    cy.get('div[id="mui-component-select-workflowStates.2.group"]').click().then(() => {
                        cy.xpath('//body/div[@id="menu-workflowStates.2.group"]').contains('Admin').click()
                    })
                    cy.get('input[name="workflowStates.2.canPublish"]').click()
                })

                cy.wait(2000)
                cy.get('.MuiGrid-root > .MuiButtonBase-root > .MuiIconButton-label').click().then(() => {
                    cy.get('input[name="workflowStates.3.name"]').clear().type('Approval')
                    cy.get('div[id="mui-component-select-workflowStates.3.group"]').click().then(() => {
                        cy.xpath('//body/div[@id="menu-workflowStates.3.group"]').contains('Admin').click()
                    })
                    cy.get('input[name="workflowStates.3.canPublish"]').click()
                })

                cy.wait(2000)
                cy.get('.MuiGrid-root > .MuiButtonBase-root > .MuiIconButton-label').click().then(() => {
                    cy.get('input[name="workflowStates.4.name"]').clear().type('Publish')
                    cy.get('div[id="mui-component-select-workflowStates.4.group"]').click().then(() => {
                        cy.xpath('//body/div[@id="menu-workflowStates.4.group"]').contains('Admin').click()
                    })
                    cy.get('input[name="workflowStates.4.canPublish"]').click()
                })
            })
            cy.get('.MuiBox-root > form').contains('Save').click()
        })
    }
}
export default AddContentType