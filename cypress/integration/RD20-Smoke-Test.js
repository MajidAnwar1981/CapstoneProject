import { HomePage } from "../page-objects/HomePage";
import credentital from "../page-objects/credentital";
import ControlCenter from "../page-objects/PaneObject/controlCenter";
import oktacredentital from "../page-objects/authentication/oktaCredentital";
import 'cypress-file-upload';
import CreateNewContentLibrary from "../page-objects/workflowObject/createContent";
import AddProjectType from "../page-objects/workflowObject/createProjectType";
import CreateNewContent from "../page-objects/workflowObject/createNewContent";
import CreateNewProject from "../page-objects/workflowObject/createNewProject"
import AddContentType from "../page-objects/workflowObject/createContentType";
import AddContentAttribute from "../page-objects/workflowObject/addContentAttribute";
import systemsettingobject from "../page-objects/Setting/settingObject";

describe("Smoke Test", () => {
    const homePage = new HomePage();
    const controlCenter = new ControlCenter();

    beforeEach(() => {
        if (Boolean = true) {
            cy.visit("/")
            cy.visit(homePage.navigateToRocketdocsPage())
            credentital.Email
            credentital.Password
            credentital.SignIn
        } else {
            // Okta Credentital Login page 
            cy.visit("/")
            cy.visit(homePage.navigateToRocketdocsPage())
            oktacredentital.LoginOrganization
            oktacredentital.UserName
            oktacredentital.Password
            oktacredentital.SignIn
        }
        expect(cy)
            .property('xpath')
            .to.be.a('function')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });

    it('Verify Add, Modify and Delete Content library', () => {
        const contentlibrary = new CreateNewContentLibrary()
        /*RD20-947 Add Content library*/
        cy.wait(5000)
        cy.get(controlCenter.navigateControlCenterOptions).contains('Administration', { timeout: 3000 }).click({ force: true }).then(() => {
            cy.get('img[alt="Settings"]').click({ force: true }).then(() => {
                cy.wait(5000)
                cy.xpath('//span[contains(text(),"Content Settings")]').click().then(() => {
                    cy.wait(5000)
                    contentlibrary.addContentLib()
                })
                cy.wait(5000)
                cy.reload()
                /*RD20-948 Modify Content library*/
                cy.xpath('//p[contains(text(),"Content Library Test")]').contains('Content Library Test').click().then(() => {
                    cy.wait(5000)
                    cy.get('input[name="name"]').clear().type('Content Library Test1')
                    cy.get('div[id="mui-component-select-defaultContentType"]').click().then(() => {
                        cy.xpath('//body/div[@id="menu-defaultContentType"]').contains('Shahed T1').click()
                    })
                    cy.get('div[id="mui-component-select-groups"]').click().then(() => {
                        cy.xpath('//body/div[@id="menu-groups"]').contains('Admin').click()
                        cy.xpath('//body/div[@id="menu-groups"]').contains('QA').click()
                    })
                    cy.get('.MuiBox-root > form').contains('Save').click({ force: true })
                })
                cy.wait(5000)
                cy.reload()
                /*RD20-949 Delete Content library*/
                cy.xpath('//p[contains(text(),"Content Library Test1")]').contains('Content Library Test1').click().then(() => {
                    cy.wait(5000)
                    cy.get('.MuiBox-root > form').contains('Delete Library').click().then(() => {
                        cy.get(':nth-child(19) > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root').contains('Yes').click({ force: true })

                    })
                })
                cy.wait(5000)
                cy.reload()
                /*Verify New Project Types no longer exist on Project Types*/
                cy.contains('Content Library Test1")]').should('not.exist');
            })
        })
    })

    it('Verify Add, Modify and Delete Project Types', () => {
        const projecttype = new AddProjectType()
        /*RD20-947,460 Add Project Types Scenario*/
        cy.wait(5000)
        cy.get(controlCenter.navigateControlCenterOptions).contains('Administration', { timeout: 3000 }).click({ force: true }).then(() => {
            cy.get('img[alt="Settings"]').click({ force: true }).then(() => {
                cy.get('img[alt="Project Settings"]').click({ timeout: 3000 }).then(() => {
                    cy.wait(5000)
                    projecttype.createNewProjecttype()
                })
                cy.wait(5000)
                cy.reload()
                /*RD20-948 Modify Project Types*/
                cy.xpath('//p[contains(text(),"Project Types Test")]').contains('Project Types Test').click().then(() => {
                    cy.get('input[name="name"]').clear().type('Project Types Test Execute')
                    cy.get('div[id="mui-component-select-reviewCycle"]').click().then(() => {
                        cy.get('div[id="menu-reviewCycle"]').contains('Annual').click()
                    })
                    cy.get('.Mui-selected').contains('Initiate').click()
                    cy.get('input[name="workflowStates.0.name"]').clear().type('InitiateDoc')
                    cy.xpath('//div[@id="mui-component-select-workflowStates.0.group"]').click().then(() => {
                        cy.xpath('//body/div[@id="menu-workflowStates.0.group"]').contains('QA').click()
                    })
                    cy.get('button[type="submit"]').click()
                    cy.wait(5000)
                    cy.xpath('//p[contains(text(),"Project Types Test Execute")]').contains('Project Types Test Execute').click().then(() => {
                        cy.wait(5000)
                        cy.get('[data-rbd-draggable-id="step-1"]').contains('Freeze').click()
                        cy.get('input[name="workflowStates.1.name"]').clear().type('FreezeDoc')
                        cy.xpath('//div[@id="mui-component-select-workflowStates.1.group"]').click().then(() => {
                            cy.xpath('//body/div[@id="menu-workflowStates.1.group"]').contains('QA').click()
                        })
                        cy.get('button[type="submit"]').click()
                    })
                    cy.wait(5000)
                    cy.xpath('//p[contains(text(),"Project Types Test Execute")]').contains('Project Types Test Execute').click().then(() => {
                        cy.wait(5000)
                        cy.get('[data-rbd-draggable-id="step-2"]').contains('Review').click()
                        cy.get('input[name="workflowStates.2.name"]').clear().type('ReviewDoc')
                        cy.xpath('//div[@id="mui-component-select-workflowStates.2.group"]').click().then(() => {
                            cy.xpath('//body/div[@id="menu-workflowStates.2.group"]').contains('QA').click()
                        })
                        cy.get('button[type="submit"]').click()
                    })
                    cy.wait(5000)
                    cy.xpath('//p[contains(text(),"Project Types Test Execute")]').contains('Project Types Test Execute').click().then(() => {
                        cy.wait(5000)
                        cy.get('[data-rbd-draggable-id="step-3"]').contains('Approval').click()
                        cy.get('input[name="workflowStates.3.name"]').clear().type('ApprovalDoc')
                        cy.xpath('//div[@id="mui-component-select-workflowStates.3.group"]').click().then(() => {
                            cy.xpath('//body/div[@id="menu-workflowStates.3.group"]').contains('QA').click()
                        })
                        cy.get('button[type="submit"]').click()
                    })
                    cy.wait(5000)
                    cy.xpath('//p[contains(text(),"Project Types Test Execute")]').contains('Project Types Test Execute').click().then(() => {
                        cy.wait(5000)
                        cy.get('[data-rbd-draggable-id="step-4"]').contains('Approved').click()
                        cy.get('input[name="workflowStates.4.name"]').clear().type('ApprovedDoc')
                        cy.xpath('//div[@id="mui-component-select-workflowStates.4.group"]').click().then(() => {
                            cy.xpath('//body/div[@id="menu-workflowStates.4.group"]').contains('QA').click()
                        })
                        cy.get('button[type="submit"]').click()
                    })
                    cy.wait(5000)
                })
                cy.reload()
                /*RD20-949 Delete Project Types*/
                cy.xpath('//p[contains(text(),"Project Types Test Execute")]').contains('Project Types Test Execute').click().then(() => {
                    cy.get('button[type="button"]').contains('Delete Project Type').click().then(() => {
                        cy.wait(5000)
                        cy.get(':nth-child(19) > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root').contains('Yes').click()
                    })
                })
                cy.wait(5000)
                /*Verify New Project Types no longer exist on Project Types*/
                cy.contains('Project Types Test Execute').should('not.exist');
            })
        })
    })

    it('Verify Create Content By Publish Now', () => {
        const newcontent = new CreateNewContent()
        cy.wait(5000)
        cy.get(controlCenter.navigateControlCenterOptions).contains('Libraries', { timeout: 3000 }).click({ force: true }).then(() => {
            cy.get(controlCenter.navigateControlCenterOptions).contains('shahed test', { timeout: 3000 }).click({ force: true }).then(() => {
                cy.wait(5000)
                cy.get('img[alt="Add"]').click().then(() => {
                    cy.wait(5000)
                    newcontent.createNewContentOnlib()
                    // Verify Publish Now
                    cy.get('input[name="isPublished"]').click().then(() => {
                        cy.get('div[id="mui-component-select-reviewCycle"]').click().then(() => {
                            cy.xpath('//body/div[@id="menu-reviewCycle"]').contains('Annual').click()
                        })
                        cy.get('input[name="expirationDate"]').type('08/19/2022')
                    })
                    cy.get('.MuiBox-root > form').contains('Submit').click().then(() => {
                        cy.wait(15000)
                        cy.go('back')
                        cy.wait(15000)
                        cy.xpath('//a[contains(text(),"Deletion Content Test")]').then($td => {
                            if ($td.is(':visible')) {
                            }
                        })
                    })
                    cy.get('.MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-paddingCheckbox > .MuiButtonBase-root > .MuiIconButton-label').click().then(() => {
                        cy.get('.MuiButton-containedSizeSmall > .MuiButton-label > .MuiSvgIcon-root').click().then(() => {
                            cy.get('#split-button-menu > :nth-child(6)').contains('Delete').click().then(() => {
                                cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root').contains('Yes').click()
                            })
                            cy.wait(5000)
                        })
                    })
                    cy.reload()
                    cy.wait(5000)
                    cy.contains('Deletion Content Test').should('not.exist')
                })
            })
        })
    })

    it('Verify Create Project', () => {
        const createproject = new CreateNewProject()
        // Navigate Project to add new project 
        cy.wait(5000)
        cy.get(controlCenter.navigateControlCenterOptions).contains('Projects').click({ force: true }).then(() => {
            // Verify [+] icon button is visible
            cy.wait(5000)
            cy.get('img[alt="Add"]').then($button => {
                if ($button.is(':visible')) {
                }
            })
            createproject.createNewProjectOnProject()
            cy.wait(10000)
            cy.xpath('//p[contains(text(),"Shahed TT1")]').should(
                "have.text",
                "Shahed TT1"
            )
            // Removed New project
            cy.wait(5000)
            cy.get('.MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-paddingCheckbox > .MuiButtonBase-root > .MuiIconButton-label').click({ multiple: true }).then(() => {
                cy.get('.MuiButton-containedSizeSmall').click().then(() => {
                    cy.get('#split-button-menu > [tabindex="0"]').contains('Archive').click({ force: true })
                })
            })
            // Verify project is no longer exist
            cy.wait(5000)
            cy.contains('Shahed TT1').should('not.exist');

        })
    })

    it('Verify Add, Modify and Delete Content Types', () => {
        const contenttype = new AddContentType()
        /*RD20-947 Add Content Types*/
        cy.wait(5000)
        cy.get(controlCenter.navigateControlCenterOptions).contains('Administration', { timeout: 3000 }).click({ force: true }).then(() => {
            cy.wait(5000)
            cy.get('img[alt="Settings"]').click({ force: true }).then(() => {
                cy.wait(5000)
                cy.xpath('//span[contains(text(),"Content Settings")]').click().then(() => {
                    cy.wait(5000)
                    contenttype.createNewContentType()
                })
                cy.wait(10000)
                cy.reload()
                /*RD20-948 Modify Content Types*/
                cy.xpath('//p[contains(text(),"Review Test")]').contains('Review Test').click().then(() => {
                    cy.wait(5000)
                    cy.get('input[name="name"]').clear().type('Document Test')
                    cy.get('div[id="mui-component-select-reviewCycle"]').click().then(() => {
                        cy.xpath('//body/div[@id="menu-reviewCycle"]').contains('Semi-annual').click()
                    })
                    cy.get('.Mui-selected').contains('Initiate').click().then(() => {
                        cy.get('input[name="workflowStates.0.name"]').clear().type('InitiateDoc')
                        cy.get('div[id="mui-component-select-workflowStates.0.group"]').click().then(() => {
                            cy.xpath('//body/div[@id="menu-workflowStates.0.group"]').contains('QA').click()
                        })
                        cy.get('input[name="workflowStates.0.canPublish"]').click()
                        cy.get('.MuiBox-root > form').contains('Save').click()
                        cy.wait(5000)
                    })
                })

                cy.xpath('//p[contains(text(),"Document Test")]').contains('Document Test').click().then(() => {
                    cy.wait(5000)
                    cy.get('[data-rbd-draggable-id="step-1"]').contains('Evaluate').click().then(() => {
                        cy.get('input[name="workflowStates.1.name"]').clear().type('EvaluateDoc')
                        cy.get('div[id="mui-component-select-workflowStates.1.group"]').click().then(() => {
                            cy.xpath('//body/div[@id="menu-workflowStates.1.group"]').contains('QA').click()
                        })
                        cy.get('input[name="workflowStates.1.canPublish"]').click()
                        cy.get('.MuiBox-root > form').contains('Save').click()
                        cy.wait(5000)
                    })
                })

                cy.xpath('//p[contains(text(),"Document Test")]').contains('Document Test').click().then(() => {
                    cy.wait(5000)
                    cy.get('[data-rbd-draggable-id="step-2"]').contains('Edit').click().then(() => {
                        cy.get('input[name="workflowStates.2.name"]').clear().type('EditDoc')
                        cy.get('div[id="mui-component-select-workflowStates.2.group"]').click().then(() => {
                            cy.xpath('//body/div[@id="menu-workflowStates.2.group"]').contains('QA').click()
                        })
                        cy.get('input[name="workflowStates.2.canPublish"]').click()
                        cy.get('.MuiBox-root > form').contains('Save').click()
                        cy.wait(5000)
                    })
                })

                cy.xpath('//p[contains(text(),"Document Test")]').contains('Document Test').click().then(() => {
                    cy.wait(5000)
                    cy.get('[data-rbd-draggable-id="step-3"]').contains('Approval').click().then(() => {
                        cy.get('input[name="workflowStates.3.name"]').clear().type('ApprovalDoc')
                        cy.get('div[id="mui-component-select-workflowStates.3.group"]').click().then(() => {
                            cy.xpath('//body/div[@id="menu-workflowStates.3.group"]').contains('QA').click()
                        })
                        cy.get('input[name="workflowStates.3.canPublish"]').click()
                        cy.get('.MuiBox-root > form').contains('Save').click()
                        cy.wait(5000)
                    })
                })

                cy.xpath('//p[contains(text(),"Document Test")]').contains('Document Test').click().then(() => {
                    cy.wait(5000)
                    cy.get('[data-rbd-draggable-id="step-4"]').contains('Publish').click().then(() => {
                        cy.get('input[name="workflowStates.4.name"]').clear().type('PublishDoc')
                        cy.get('div[id="mui-component-select-workflowStates.4.group"]').click().then(() => {
                            cy.xpath('//body/div[@id="menu-workflowStates.4.group"]').contains('QA').click()
                        })
                        cy.get('input[name="workflowStates.4.canPublish"]').click()
                        cy.get('.MuiBox-root > form').contains('Save').click()
                        cy.wait(5000)
                    })
                })
                cy.reload()
                /*RD20-949 Delete Content Types*/
                cy.xpath('//p[contains(text(),"Document Test")]').contains('Document Test').click().then(() => {
                    cy.wait(5000)
                    cy.get('button[type="button"]').contains('Delete Type').click().then(() => {
                        cy.get(':nth-child(20) > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root >').contains('Yes').dblclick()
                    })
                })
                cy.wait(5000)
                cy.reload()
                /*Verify New Content Types no longer exist on Content Types*/
                cy.contains('Document Test').should('not.exist');
            })
        })
    })

    it('Verify Project Document Template Creation', () => {
        /*Project Document Template Creation*/
        cy.wait(5000)
        cy.get(controlCenter.navigateControlCenterOptions).contains('Administration', { timeout: 3000 }).click({ force: true }).then(() => {
            cy.get('img[alt="Settings"]').click({ force: true }).then(() => {
                cy.get('img[alt="Project Settings"]').click({ timeout: 3000 }).then(() => {
                    cy.get(':nth-child(2) > .MuiToolbar-root > .MuiButtonBase-root > .MuiIconButton-label').click()
                    cy.wait(5000)
                    cy.get('input[name="name"]').type('shahed test 2021 ')
                    const fixtureFile = 'RFP Vendor RFI.xlsx';
                    cy.get('input[name="attachment"]').attachFile(fixtureFile);
                    cy.get('.MuiBox-root > form').contains('Save').click()
                })

                /*Modify Project Document Template Creation*/
                cy.wait(5000)
                cy.xpath('//p[contains(text(),"shahed test 2021")]').click().then(() => {
                    cy.wait(5000)
                    cy.get('input[name="name"]').clear().type('shahedTest2021')
                    const fixtureFile = 'RapidDocs US Letter.docx';
                    cy.get('input[name="attachment"]').attachFile(fixtureFile);
                    cy.wait(3000)
                    cy.get('.MuiBox-root').contains('Save').click()
                })

                /*Delete Project Document Template Creation*/
                cy.wait(5000)
                cy.xpath('//p[contains(text(),"shahedTest2021")]').click().then(() => {
                    cy.wait(5000)
                    cy.get('img[alt="Delete"]').click().then(() => {
                        cy.get(':nth-child(20) > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root').contains('Yes').click({ force: true })
                    })
                })
                /*Verify Project Document Template Creation no longer exist on Project Document Template Creation*/
                cy.wait(5000)
                cy.contains('shahedTest2021').should('not.exist')
            })
        })
    })

    it('Verify Add, Modify and Delete Content Attribute', () => {
        const addconattr = new AddContentAttribute()
        /*RD20-860 Add Content Attribute*/
        cy.wait(5000)
        cy.get(controlCenter.navigateControlCenterOptions).contains('Administration', { timeout: 3000 }).click({ force: true }).then(() => {
            cy.get('img[alt="Settings"]').click({ force: true }).then(() => {
                cy.wait(5000)
                cy.xpath('//span[contains(text(),"Content Settings")]').click().then(() => {
                    cy.wait(5000)
                    addconattr.addContentAttribute()
                })
                cy.wait(5000)
                cy.reload()
                /*RD20-861 Modify Content Attribute*/
                cy.xpath('//p[contains(text(),"Add Attribute Test")]').contains('Add Attribute Test').click().then(() => {
                    cy.wait(5000)
                    cy.get('input[name="name"]').clear().type('Add Attribute Test Execute')
                    cy.get('div[id="mui-component-select-groupId"]').click().then(() => {
                        cy.xpath('//body/div[@id="menu-groupId"]').contains('QA').click()
                    })
                })
                cy.get('.MuiBox-root > form').contains('Save').click()
                cy.wait(5000)
                cy.reload()
                /*RD20-862 Delete Content Attribute*/
                cy.xpath('//p[contains(text(),"Add Attribute Test Execute")]').contains('Add Attribute Test Execute').click().then(() => {
                    cy.wait(5000)
                    cy.get('button[type="button"]').contains('Delete Attribute').click().then(() => {
                        cy.get(':nth-child(21) > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root').contains('Yes').dblclick()
                    })
                })
                cy.wait(5000)
                cy.reload()
                /*Verify New Content Attribute  no longer exist on Content Attribute*/
                cy.contains('Add Attribute Test Execute').should('not.exist');
            })
        })
    })

    it('Verify Add, Modify and Delete Content Attribute Profile', () => {
        /*RD20-863 Add Content Attribute Profile*/
        cy.wait(5000)
        cy.get(controlCenter.navigateControlCenterOptions).contains('Administration').click({ force: true }).then(() => {
            cy.wait(5000)
            cy.get('img[alt="Settings"]').click({ force: true }).then(() => {
                cy.wait(5000)
                cy.xpath('//span[contains(text(),"Content Settings")]').click().then(() => {
                    cy.wait(5000)
                    cy.get('.MuiGrid-grid-sm-5 > .MuiToolbar-root > .MuiButtonBase-root > .MuiIconButton-label').click().then(() => {
                        cy.wait(5000)
                        cy.get('input[name="name"]').clear().type('Add Attribute Profile test')
                        /*cy.get('.MuiFormControl-root-448').clear().type('5')
                        cy.get('.MuiInputBase-root-519').click().then(() => {
                            cy.xpath('//body/div[@id="menu-attributes.1.value"]').contains('Cindy, Zhang').click()
                        })*/
                    })
                })
                cy.get('.MuiBox-root > form').contains('Save').click()
                cy.wait(5000)
                /*RD20-864 Modify Content Attribute Profile*/
                cy.xpath('//p[contains(text(),"Add Attribute Profile test")]').contains('Add Attribute Profile test').click().then(() => {
                    cy.wait(5000)
                    cy.get('input[name="name"]').clear().type('Add Attribute Profile test1')
                    /*cy.get('.MuiFormControl-root-184').clear().type('5')
                    cy.get('.MuiFormControl-root-227').click().then(() => {
                        cy.xpath('//body/div[@id="menu-attributes.1.value"]').contains('Cindy, Zhang').click()
                    })*/
                })
                cy.get('.MuiBox-root > form').contains('Save').click()
                cy.wait(5000)
                /*RD20-865 Delete Content Attribute Profile*/
                cy.xpath('//p[contains(text(),"Add Attribute Profile test1")]').contains('Add Attribute Profile test1').click().then(() => {
                    cy.wait(5000)
                    cy.get('button[type="button"]').contains('Delete Attribute Profile').click().then(() => {
                        cy.get(':nth-child(22) > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root').contains('Yes').click()
                    })
                })
                cy.wait(5000)
                /*Verify New Content Attribute Profile no longer exist on Content Attribute Profile*/
                cy.contains('Add Attribute Profile test1').should('not.exist');
            })
        })
    })

    it('Verify Add, Modify and Delete Content Placeholder', () => {
        /*RD20-866 Add Content Placeholder*/
        cy.wait(5000)
        cy.get(controlCenter.navigateControlCenterOptions).contains('Administration', { timeout: 3000 }).click({ force: true }).then(() => {
            cy.wait(5000)
            cy.get('img[alt="Settings"]').click({ force: true }).then(() => {
                cy.xpath('//span[contains(text(),"Content Settings")]').click().then(() => {
                    cy.wait(5000)
                    cy.get(':nth-child(5) > .MuiToolbar-root > :nth-child(2) > .MuiIconButton-label').click().then(() => {
                        cy.wait(5000)
                        cy.get('input[name="name"]').clear().type('Add Content Placeholder Test')
                        cy.get('input[name="value"]').clear().type('rocketdocs2.0')
                    })
                })
                cy.get('.MuiBox-root > form').contains('Save').click()
                cy.wait(5000)
                cy.reload()
                /*RD20-867 Modify Content Placeholder*/
                cy.xpath('//p[contains(text(),"Add Content Placeholder Test")]').contains('Add Content Placeholder Test').click().then(() => {
                    cy.wait(5000)
                    cy.get('input[name="name"]').clear().type('Add Content Placeholder Test1')
                    cy.get('input[name="value"]').clear().type('rocketdocs2.0.0')
                })
                cy.get('.MuiBox-root > form').contains('Save').click()
                cy.wait(5000)
                cy.reload()
                /*RD20-868 Delete Content Placeholder*/
                cy.xpath('//p[contains(text(),"Add Content Placeholder Test1")]').contains('Add Content Placeholder Test1').click().then(() => {
                    cy.wait(5000)
                    cy.get('button[type="button"]').contains('Delete Placeholder').click()
                })
                cy.wait(5000)
                cy.reload()
                /*Verify New Content Placeholder no longer exist on Content Placeholder*/
                cy.contains('Add Content Placeholder Test1').should('not.exist');
            })
        })
    })
    it('Verify Add, Modify and Delete Project Attribute', () => {
        /*RD20-944,470 Add Project Attribute*/
        cy.wait(5000)
        cy.get(controlCenter.navigateControlCenterOptions).contains('Administration', { timeout: 3000 }).click({ force: true }).then(() => {
            cy.get('img[alt="Settings"]').click({ force: true }).then(() => {
                cy.get('img[alt="Project Settings"]').click({ timeout: 3000 }).then(() => {
                    cy.get('.MuiGrid-grid-sm-7 > .MuiToolbar-root > .MuiButtonBase-root > .MuiIconButton-label').click()
                    cy.wait(2000)
                    cy.get('input[name="name"]').clear().type('Test2')
                    cy.get('input[name="showInList"]').click()
                    cy.get('div[id="mui-component-select-type"]').click().then(() => {
                        cy.xpath('//body/div[@id="menu-type"]').contains('Contact').click({ force: true })
                        cy.get('div[id="mui-component-select-groupId"]').click().then(() => {
                            cy.xpath('//body/div[@id="menu-groupId"]').contains('Admin').click()
                        })
                    })
                    cy.get('.MuiBox-root > form').contains('Save').click()
                    cy.wait(5000)
                })
                /*RD20-945 Modify Project Attribute*/
                cy.get('td[class="MuiTableCell-root MuiTableCell-body"]').contains('Test2').click().then(() => {
                    cy.wait(2000)
                    cy.get('input[name="name"]').clear().type('Test3')
                    cy.get('div[id="mui-component-select-groupId"]').click().then(() => {
                        cy.xpath('//body/div[@id="menu-groupId"]').contains('QA').click()
                    })
                    cy.get('.MuiBox-root > form').contains('Save').click()
                    cy.wait(5000)
                    cy.reload()
                })

                /*RD20-946 Delete Project Attribute*/
                cy.xpath('//p[contains(text(),"Test3")]').click().then(() => {
                    cy.wait(2000)
                    cy.get('.MuiBox-root > form').contains('Delete Attribute').click().then(() => {
                        cy.wait(3000)
                        cy.get(':nth-child(21) > .MuiDialog-container > .MuiPaper-root > .MuiDialogContent-root > .MuiBox-root').should('have.text', 'Are you sure you want to delete this Project Attribute?')
                        cy.get(':nth-child(21) > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root >').contains('Yes').click()
                        cy.wait(3000)
                    })
                })
                cy.reload()
                /*Verify New Attribute no longer exist on Project Attribute*/
                cy.contains('Test3').should('not.exist');
            })
        })
    })

    it('Verify Add, Modify and Delete Project Attribute Profile', () => {
        /*RD20-947,484 Add Project Attribute Profile*/
        cy.wait(5000)
        cy.get(controlCenter.navigateControlCenterOptions).contains('Administration', { timeout: 3000 }).click({ force: true }).then(() => {
            cy.wait(5000)
            cy.get('img[alt="Settings"]').click({ force: true }).then(() => {
                cy.get('img[alt="Project Settings"]').click({ timeout: 3000 }).then(() => {
                    cy.wait(5000)
                    cy.get('.MuiGrid-grid-sm-5 > .MuiToolbar-root > .MuiButtonBase-root > .MuiIconButton-label').click().then(() => {
                        cy.wait(5000)
                        cy.get('input[name="name"]').clear().type('Test QA')
                        cy.get('input[name="attributes.0.value"]').clear().type('Attribute Profile Test')
                        cy.xpath('//div[@id="mui-component-select-attributes.1.value"]').click().then(() => {
                            cy.wait(2000)
                            cy.get('li[data-value="qa,dev,prod"]').click()
                            cy.get('li[data-value="leadership,CSM,devteam"]').click()
                        })
                        cy.get('button[type="submit"]').contains('Save').click({ force: true })
                    })
                })
                cy.reload()
                cy.wait(5000)
                /*RD20-948 Modify Project Attribute Profile*/
                cy.xpath('//p[contains(text(),"Test QA")]').click().then(() => {
                    cy.get('input[name="name"]').clear().type('Test QA1')
                    cy.get('input[name="attributes.0.value"]').clear().type('Attribute Profile Test')
                    cy.xpath('//div[@id="mui-component-select-attributes.1.value"]').click().then(() => {
                        cy.get('li[data-value="leadership,CSM,devteam"]').click()
                        cy.get('li[data-value="qa,dev,prod"]').click()
                    })
                    cy.get('button[type="submit"]').contains('Save').click({ force: true })
                })
                cy.reload()
                cy.wait(5000)
                /*RD20-949 Delete Project Attribute Profile*/
                cy.xpath('//p[contains(text(),"Test QA1")]').click().then(() => {
                    cy.get('button[type="button"]').contains('Delete Attribute Profile').click().then(() => {
                        cy.wait(3000)
                        cy.get(':nth-child(23) > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root').contains('Yes').click()
                    })
                })
                cy.wait(5000)
                /*Verify New Attribute no longer exist on Project Attribute Profile*/
                cy.contains('Test QA1').should('not.exist');
            })
        })
    })

    it('Verify Add, Modify And Delete Groups within the permission', () => {
        cy.wait(5000)
        cy.get(controlCenter.navigateControlCenterOptions).contains('Administration').click({ force: true }).then(() => {
            cy.wait(5000)
            cy.get('img[alt="Permissions"]').click({ force: true }).then(() => {
                cy.wait(5000)
                cy.get('img[alt="Groups"]').click().then(() => {
                    cy.wait(5000)
                    cy.get('img[alt="Add"]').click().then(() => {
                        cy.wait(5000)
                        cy.get('input[name="name"]').type('TestGropus')
                        cy.get(':nth-child(1) > .MuiFormControlLabel-root').click()
                        cy.get(':nth-child(2) > .MuiFormControlLabel-root').click()
                        cy.get(':nth-child(3) > .MuiFormControlLabel-root').click()
                        cy.get(':nth-child(4) > .MuiFormControlLabel-root').click()
                        cy.get(':nth-child(5) > .MuiFormControlLabel-root').click()
                        cy.get(':nth-child(6) > .MuiFormControlLabel-root').click()
                        cy.get('.MuiBox-root > form').contains('Save').click()
                        cy.wait(5000)
                    })
                    cy.get('.MuiTableBody-root > :nth-child(5) > :nth-child(2)').contains('TestGropus').click().then(() => {
                        cy.get('img[alt="Delete"]').click().then(() => {
                            cy.get('.MuiDialogContent-root > .MuiBox-root').contains('Are you sure you want to delete this group?')
                            cy.get('.MuiDialogActions-root').contains('Yes').click()
                        })
                    })
                    cy.contains('TestGropus').should('not.exist');
                })
            })
        })
    })

    it('Verify Add, Modify And Delete Users within the permission', () => {  // Required Fix for new user submission 
        cy.wait(5000)
        cy.get(controlCenter.navigateControlCenterOptions).contains('Administration').click({ force: true }).then(() => {
            cy.wait(5000)
            cy.get('img[alt="Permissions"]').click({ force: true }).then(() => {
                cy.wait(5000)
                cy.get('img[alt="Users"]').click().then(() => {
                    cy.wait(5000)
                    cy.get('img[alt="Add"]').click().then(() => {
                        cy.get('input[name="firstName"]').type('Team')
                        cy.get('input[name="lastName"]').type('Test')
                        cy.get('input[name="email"]').type('mshahed@rocketdocs.com')
                        cy.get('#mui-component-select-groups').click().then(() => {
                            cy.wait(5000)
                            cy.xpath('//body/div[@id="menu-groups"]').contains('Admin').click({ force: true })
                            // lICENSES CORE SELECTION
                            cy.get(':nth-child(5) > .MuiFormGroup-root > :nth-child(1) > .MuiFormControlLabel-root').click({ force: true }).then(() => {
                                cy.wait(5000)
                                cy.get(':nth-child(6) > .MuiFormGroup-root > :nth-child(1) > .MuiFormControlLabel-root').click({ force: true })
                                cy.get(':nth-child(6) > .MuiFormGroup-root > :nth-child(2) > .MuiFormControlLabel-root').click({ force: true })
                                cy.get(':nth-child(6) > .MuiFormGroup-root > :nth-child(4) > .MuiFormControlLabel-root').click({ force: true })
                                cy.get(':nth-child(5) > .MuiFormControlLabel-root').click({ force: true })
                                cy.get(':nth-child(6) > .MuiFormControlLabel-root').click({ force: true })
                                cy.get('.MuiFormGroup-root > :nth-child(7)').click({ force: true })
                                cy.get(':nth-child(7) > .MuiFormControlLabel-root').click({ force: true })
                                cy.get('.MuiBox-root > form').contains('Save', { timeout: 10000 }).click({ force: true })
                                // cy.wait(15000)
                            })
                        })
                    })
                })
            })
        })
    })

    it('Verify Bulk Update within the permission', () => {
        const newcontent = new CreateNewContent()
        cy.wait(5000)
        cy.get(controlCenter.navigateControlCenterOptions).contains('Libraries', { timeout: 3000 }).click({ force: true }).then(() => {
            cy.get(controlCenter.navigateControlCenterOptions).contains('shahed test', { timeout: 3000 }).click({ force: true }).then(() => {
                cy.wait(5000)
                cy.get('img[alt="Add"]').click().then(() => {
                    cy.wait(5000)
                    cy.get('input[name=topic').type('Test007')
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
                        cy.contains('Bi-annual').click()
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
                    cy.get('.MuiBox-root > form').contains('Submit').click().then(() => {
                        cy.wait(15000)
                        cy.get('textarea[name="topic"]').clear().type("TestQuestionTopic")
                        cy.get('textarea[name="summary"]').clear().type("Content details summary test")
                        cy.get('img[alt="Insert Placeholder"]').click().then(() => {
                            cy.wait(2000)
                            cy.get('.MuiPaper-root > .MuiList-root > :nth-child(6)').click()
                        })
                        // Verify responses Attachment Fn
                        cy.get(':nth-child(5)').contains('remove').click().then(() => {
                            cy.wait(5000)
                            cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root').contains('Yes').click().then(() => {
                                cy.wait(5000)
                                const fixtureFile = 'RFP Vendor RFI.xlsx';
                                cy.get('input[name="attachment"]').attachFile(fixtureFile);
                            })
                            cy.get('button[type="submit"]').contains('Save').click({ force: true })
                            cy.wait(10000)
                        })
                        // Verify Taxonomy & Tags Input Field
                        cy.get('img[alt="Attributes & Tags"]').click().then(() => {
                            cy.get('div[name="tags"]').type('ContentAtt&TagTest')
                            cy.get('button[type="submit"]').contains('Save').click({ force: true })
                            cy.wait(5000)
                        })
                        cy.get('img[alt="Prior Versions"]').click().then(() => {
                            cy.get(':nth-child(3)').contains('Shahed T1')
                            cy.get(':nth-child(4)').contains('shahed test')
                            cy.get(':nth-child(5)').contains('Ali, MDShahed')
                            cy.get(':nth-child(6)').contains('Ali, MDShahed')
                            cy.get(':nth-child(7)').contains('draft')
                        })
                        cy.contains('No prior versions recorded.')
                        cy.contains('No usage to display.')
                        // Verify notes
                        cy.get('img[alt="Notes"]').click().then(() => {
                            cy.get(':nth-child(3) > .MuiButtonBase-root > .MuiIconButton-label').click().then(() => {
                                cy.get('textarea[name="text"]').type('Adding Notes Test content within lib')
                                cy.get('.MuiBox-root > form').contains('Save').click()
                                cy.wait(5000)
                            })
                            cy.get('img[alt="Delete"]').click().then(() => {
                                cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root').contains('Yes').click()
                            })
                            cy.wait(2000)
                            cy.contains('No notes found.')
                        })
                    })

                    // Rd20-639 partial varification of three dot Fn merged within this code block
                    cy.get('.MuiNav-logoDiv').click().then(() => {
                        cy.wait(5000)
                        cy.get(controlCenter.navigateControlCenterOptions).contains('Libraries').click({ force: true }).then(() => {
                            cy.wait(5000)
                            cy.get(controlCenter.navigateControlCenterOptions).contains('shahed test').click({ force: true }).then(() => {
                                cy.wait(10000)
                                cy.xpath('//a[contains(text(),"Test007")]').then($td => {
                                    if ($td.is(':visible')) {
                                    }
                                    cy.get('.MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-paddingCheckbox > .MuiButtonBase-root > .MuiIconButton-label').click().then(() => {
                                        cy.get('.MuiButton-containedSizeSmall > .MuiButton-label > .MuiSvgIcon-root').click().then(() => {
                                            cy.get('#split-button-menu > :nth-child(7)').contains('Export Content').click().then(() => {
                                                cy.wait(5000)
                                                cy.get('input[type="text"]').last().click().type('Test007_exp', { force: true })
                                                cy.get('button[type="button"]').contains('Yes').click()
                                                cy.xpath('//span[@id="client-snackbar"]').contains('exported')
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })

                    // Navigate to [Bulk Update] to verify Exported new content from content library
                    cy.wait(5000)
                    cy.get(controlCenter.navigateControlCenterOptions).contains('Administration', { timeout: 3000 }).click({ force: true }).then(() => {
                        cy.xpath('//span[contains(text(),"Bulk Updates")]').click().then(() => {
                            cy.contains('Test007_exp').then(() => {
                                cy.get(':nth-child(1) > :nth-child(6) > :nth-child(2) > .MuiIconButton-label >').click().then(() => {
                                    const fixtureFile = 'RapidDocs US Letter.docx';
                                    cy.get('input[name="attachment"]').attachFile(fixtureFile);
                                    cy.wait(5000)
                                    cy.get('.MuiDialogActions-root').contains('Yes').click()
                                })
                            })
                            cy.get('img[alt="Delete"]').click()
                            cy.xpath('//span[@id="client-snackbar"]').contains('deleted')

                            // Navigate to CONTENT IMPORT Tab
                            cy.get('.MuiTabs-flexContainer > :nth-child(2)').click().then(() => {
                                cy.contains('automation1')
                                cy.get('img[alt="Delete"]').click()
                            })
                        })
                        cy.wait(5000)
                    })

                    // Navigate back to Control center
                    cy.get('div[class="MuiNav-logoDiv"]').click().then(() => {
                        cy.wait(10000)
                        cy.get(controlCenter.navigateControlCenterOptions).contains('Libraries', { timeout: 3000 }).click({ force: true }).then(() => {
                            cy.get('form > .MuiInputBase-root > .MuiInputBase-input').clear().type('Test007').type('{enter}').then(() => {
                                cy.wait(10000)
                                cy.get('.MuiTableBody-root > :nth-child(1) > .MuiTableCell-paddingCheckbox > .MuiButtonBase-root > .MuiIconButton-label').click().then(() => {
                                    cy.get('[alt="Delete"]').click()
                                    cy.xpath('//div[contains(text(),"Are you sure you want to delete the selected content?")]')
                                        .should('have.text', 'Are you sure you want to delete the selected content? They cannot be retrieved once they have been deleted. This operation will remove links to any other entities as well as all related content');
                                    cy.get('button[type=button]').contains('Yes').click({ force: true })
                                })
                            })
                        })
                    })
                    cy.wait(5000)
                    cy.reload()
                    cy.contains('Test007').should('not.exist');
                })
            })
        })
    })

    it('Verify Migration Tool', () => {
        cy.wait(5000)
        cy.get(controlCenter.navigateControlCenterOptions).contains('Administration', { timeout: 3000 }).click({ force: true }).then(() => {
            cy.get('img[alt="System Tools"]').click().then(() => {
                cy.wait(10000)
                // verify Migration tool Users
                cy.get(':nth-child(4) > .MuiGrid-root > .MuiPaper-root > .MuiButtonBase-root > .MuiCardContent-root').click().then(() => {
                    cy.wait(5000)
                    const fixtureFile = 'RapidDocs US Letter.docx';
                    cy.get('input[name="attachment"]').attachFile(fixtureFile);
                    cy.get('.MuiBox-root > form').contains('Save').click()
                    cy.wait(5000)
                })
                // verify Migration tool Placeholders
                cy.get(':nth-child(6) > :nth-child(1) > .MuiPaper-root > .MuiButtonBase-root > .MuiCardContent-root').click().then(() => {
                    cy.wait(5000)
                    const fixtureFile = 'RapidDocs US Letter.docx';
                    cy.get('input[name="attachment"]').attachFile(fixtureFile);
                    cy.get('.MuiBox-root > form').contains('Save').click()
                    cy.wait(5000)
                })
                // verify Migration tool Attribute
                cy.get(':nth-child(6) > :nth-child(2) > .MuiPaper-root > .MuiButtonBase-root > .MuiCardContent-root').click().then(() => {
                    cy.wait(5000)
                    const fixtureFile = 'RapidDocs US Letter.docx';
                    cy.get('input[name="attachment"]').attachFile(fixtureFile);
                    cy.get('.MuiBox-root > form').contains('Save').click()
                    cy.wait(5000)
                })
                // verify Migration tool Attribute Profiles
                cy.get(':nth-child(6) > :nth-child(3) > .MuiPaper-root > .MuiButtonBase-root > .MuiCardContent-root').click().then(() => {
                    cy.wait(5000)
                    const fixtureFile = 'RapidDocs US Letter.docx';
                    cy.get('input[name="attachment"]').attachFile(fixtureFile);
                    cy.get('.MuiBox-root > form').contains('Save').click()
                    cy.wait(5000)
                })
                // verify Migration tool Content
                cy.get(':nth-child(4) > .MuiPaper-root').click().then(() => {
                    cy.wait(5000)
                    const fixtureFile = 'RapidDocs US Letter.docx';
                    cy.get('input[name="attachment"]').attachFile(fixtureFile);
                    cy.xpath('//div[@id="mui-component-select-library"]').click({ force: true }).then(() => {
                        cy.get('[data-value="23"]').contains('shahed test').click({ force: true })
                    })
                    cy.get('#mui-component-select-contentType').click({ force: true }).then(() => {
                        cy.get('[data-value="4"]').contains('Default').click({ force: true })
                    })
                    cy.get('input[name="assignTo"]').click().then(() => {
                        cy.xpath('//li[contains(text(),"Ali, MDShahed")]').contains('Ali, MDShahed').click()
                    })
                    cy.get('div[id="mui-component-select-contentStatus"]').click().then(() => {
                        cy.xpath('//body/div[@id="menu-contentStatus"]').contains('Draft').click()
                    })
                    cy.get('.MuiBox-root > form').contains('Save').click()
                    cy.wait(5000)
                })

                // verify Migration tool Attributes
                cy.get(':nth-child(8) > :nth-child(1) > .MuiPaper-root > .MuiButtonBase-root > .MuiCardContent-root').click().then(() => {
                    cy.wait(5000)
                    const fixtureFile = 'RapidDocs US Letter.docx';
                    cy.get('input[name="attachment"]').attachFile(fixtureFile);
                    cy.get('.MuiBox-root > form').contains('Save').click()
                    cy.wait(5000)
                })

                // Verify Prohect component within Migration tool
                cy.get(':nth-child(8) > :nth-child(2) > .MuiPaper-root').click().then(() => {
                    cy.wait(5000)
                    const fixtureFile = 'RapidDocs US Letter.docx';
                    cy.get('input[name="attachment"]').attachFile(fixtureFile);
                    cy.get('div[id="mui-component-select-projectType"]').click().then(() => {
                        cy.xpath('//li[contains(text(),"mshahed Test")]').contains('mshahed Test').click()
                    })
                    cy.get('input[name="assignTo"]').click().then(() => {
                        cy.xpath('//li[contains(text(),"Ali, MDShahed")]').contains('Ali, MDShahed').click()
                    })
                    cy.get('.MuiBox-root > form').contains('Save').click()
                    cy.wait(5000)
                })
                // verify Migration tool Project Audit History
                cy.get(':nth-child(8) > :nth-child(3) > .MuiPaper-root > .MuiButtonBase-root > .MuiCardContent-root').click().then(() => {
                    cy.wait(5000)
                    const fixtureFile = 'RapidDocs US Letter.docx';
                    cy.get('input[name="attachment"]').attachFile(fixtureFile);
                    cy.get('.MuiBox-root > form').contains('Save').click()
                    cy.wait(5000)
                })
            })
        })
    })

    xit('Verify System Setting', () => {
        cy.wait(5000)
        cy.get(controlCenter.navigateControlCenterOptions).contains('Administration', { timeout: 3000 }).click({ force: true }).then(() => {
            cy.get('img[alt="Settings"]').click({ force: true }).then(() => {
                cy.get('img[alt="System Settings"]').click().then(() => {

                    ////////////CONTENT EMAIL////////////
                    // verify Content Email Setting Subject
                    cy.wait(10000)
                    systemsettingobject.CES.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentEmailSubject"]').clear().type('A content has been sent', { timeout: 2000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.CES.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentEmailSubject"]').clear().type('A content has been sent to you', { timeout: 2000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.CEB.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentEmailBody"]').clear().type('**createdby** has sent a content <br/>Topic : **topic**<br/>Text : **text**<br/>Summary : **summary**', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.CEB.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentEmailBody"]').clear().type('**createdby** has sent a content to you <br/>Topic : **topic**<br/>Text : **text**<br/>Summary : **summary**', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)

                    ////////////CONTENT EXPORT EMAIL////////////
                    systemsettingobject.CEES.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentExportEmailSubject"]').clear().type('A content export has been sent', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.CEES.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentExportEmailSubject"]').clear().type('A content export has been sent to you', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.CEEB.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentExportEmailBody"]').clear().type('A content export has been sent', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.CEEB.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentExportEmailBody"]').clear().type('A content export has been sent to you', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)

                    /////////////CONTENT IMPORT EMAIL/////////////
                    systemsettingobject.CIES.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentImportEmailSubject"]').clear().type('Content import  with id **id** complete', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.CIES.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentImportEmailSubject"]').clear().type('Content import  with id **id** completed', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.CIEB.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentImportEmailBody"]').clear().type('A content import with id **id** and file **file** has been completed', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.CIEB.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentImportEmailBody"]').clear().type('A content import with id **id** and file **file** has been completed.', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })

                    //////////CONTENT SEARCH//////////
                    cy.wait(10000)
                    systemsettingobject.CSFieldWeight.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentSearchFieldWeights"]').clear().type('["id^15","topic^6","text^6","summary^6","*^1"]', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.CSFieldWeight.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentSearchFieldWeights"]').clear().type('["id^10","topic^5","text^5","summary^5","*^1"]', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })

                    cy.wait(10000)
                    systemsettingobject.CSSlop.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentSearchSlop"]').clear().type('0.30', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.CSSlop.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentSearchSlop"]').clear().type('0.25', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })

                    cy.wait(10000)
                    systemsettingobject.CSMinShouldMatch.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentSearchMinimumShouldMatch"]').clear().type('0.30', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.CSMinShouldMatch.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentSearchMinimumShouldMatch"]').clear().type('0.25', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    /////////////CONTENT EXPIRATION CONFIGURATION////////////
                    cy.wait(10000)
                    systemsettingobject.ECPELT.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ProjectExpiryLeadTimeDays"]').clear().type('4', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.ECPELT.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ProjectExpiryLeadTimeDays"]').clear().type('5', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.ECCELT.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentExpiryLeadTimeDays"]').clear().type('25', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.ECCELT.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentExpiryLeadTimeDays"]').clear().type('30', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })

                    ///////////////LANGUAGE////////////
                    cy.wait(10000)
                    systemsettingobject.Laguage.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="DefaultLanguage"]').clear().type('en-UE', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.Laguage.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="DefaultLanguage"]').clear().type('en-US', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })

                    ///////////////MIGRATIONS//////////
                    cy.wait(10000)
                    systemsettingobject.Migrations.then(() => {
                        cy.wait(5000)
                        cy.get('input[name="TransformEnabled"]').first().check()
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.Migrations.then(() => {
                        cy.wait(5000)
                        cy.get('input[name="TransformEnabled"]').last().check()
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })

                    ///////////////NOTIFICATION////////
                    cy.wait(10000)
                    systemsettingobject.NContentAssignment.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentAssignmentNotification"]').clear().type('Content "**content**" has been assigne to you with note "**note**".', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NContentAssignment.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentAssignmentNotification"]').clear().type('Content "**content**" has been assigned to you with note "**note**".', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NAddedToProjectTeam.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ProjectTeamAddNotification"]').clear().type('You have been added to team of project "**project**"', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NAddedToProjectTeam.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ProjectTeamAddNotification"]').clear().type('You have been added to the team of project "**project**"', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NQuestionAssignment.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="QuestionAssignmentNotification"]').clear().type('Question "**question**" has been assigned you in project "**project**"', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NQuestionAssignment.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="QuestionAssignmentNotification"]').clear().type('Question "**question**" has been assigned to you in project "**project**"', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NQuestionAdded.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="QuestionAddNotification"]').clear().type('Question "**question**" has been added to project "**project**"', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NQuestionAdded.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="QuestionAddNotification"]').clear().type('Question "**question**" has been added in project "**project**"', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NTaskAssignment.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="TaskAssignmentNotification"]').clear().type('Task "**task**" has been assigned you in project "**project**"', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NTaskAssignment.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="TaskAssignmentNotification"]').clear().type('Task "**task**" has been assigned to you in project "**project**"', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NTaskCompleted.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="TaskCompletedNotification"]').clear().type('Task "**task**" has been completed project "**project**"', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NTaskCompleted.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="TaskCompletedNotification"]').clear().type('Task "**task**" has been completed in project "**project**"', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NProjectPastDue.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ProjectPastDueNotification"]').clear().type('Project "**project**" due "**dueDate**" is past due', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NProjectPastDue.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ProjectPastDueNotification"]').clear().type('Project "**project**" due on "**dueDate**" is past due', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NContentAssignmentPastDue.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentAssignmentPastDueNotification"]').clear().type('Content "**content**" due "**dueDate**" is past due', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NContentAssignmentPastDue.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentAssignmentPastDueNotification"]').clear().type('Content "**content**" due on "**dueDate**" is past due', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NQuestionPastDue.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="QuestionPastDueNotification"]').clear().type('Question "**question**" due "**dueDate**" is past due', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NQuestionPastDue.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="QuestionPastDueNotification"]').clear().type('Question "**question**" due on "**dueDate**" is past due', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NTaskPastDue.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="TaskPastDueNotification"]').clear().type('Task "**task**" due "**dueDate**" is past due', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NTaskPastDue.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="TaskPastDueNotification"]').clear().type('Task "**task**" due on "**dueDate**" is past due', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NTitleTextSize.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="NotificationTitleTextSize"]').clear().type('5', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NTitleTextSize.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="NotificationTitleTextSize"]').clear().type('10', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NDailyBatchEmailTimeHours.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="DailyBatchEmailTimeHours"]').clear().type('8', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NDailyBatchEmailTimeHours.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="DailyBatchEmailTimeHours"]').clear().type('9', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NDailyBatchEmailTimeMinutes.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="DailyBatchEmailTimeMinutes"]').clear().type('1', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NDailyBatchEmailTimeMinutes.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="DailyBatchEmailTimeMinutes"]').clear().type('0', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NDailyBatchEmailTimeSeconds.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="DailyBatchEmailTimeSeconds"]').clear().type('1', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NDailyBatchEmailTimeSeconds.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="DailyBatchEmailTimeSeconds"]').clear().type('0', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NContentPromoted.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentPromotedNotification"]').clear().type('Content "**content**" has been promoted to "**current_workflow_state**" and assigned back to you', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NContentPromoted.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentPromotedNotification"]').clear().type('Content "**content**" has been promoted to "**current_workflow_state**" and is assigned back to you', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NContentReverted.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentRevertedNotification"]').clear().type('Content "**content**" has been reverted to "**current_workflow_state**" is assigned back to you', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NContentReverted.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentRevertedNotification"]').clear().type('Content "**content**" has been reverted to "**current_workflow_state**" and is assigned back to you', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NContentApproved.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentApprovedNotification"]').clear().type('Content "**content**" has been approved and promoted to "**current_workflow_state**" is assigned back to you', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NContentApproved.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentApprovedNotification"]').clear().type('Content "**content**" has been approved and promoted to "**current_workflow_state**" and is assigned back to you', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NContentPublished.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentPublishedNotification"]').clear().type('Content "**content**" has been publishe and is available to use', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NContentPublished.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentPublishedNotification"]').clear().type('Content "**content**" has been published and is available to use', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NProjectExpiry.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ProjectExpiryNotification"]').clear().type('Project "**project**" expired today.', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NProjectExpiry.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ProjectExpiryNotification"]').clear().type('Project "**project**" has expired today.', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NProjectExpiryLeadTime.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ProjectExpiryLeadTimeNotification"]').clear().type('Project "**project**" started expiration lead time today.', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NProjectExpiryLeadTime.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ProjectExpiryLeadTimeNotification"]').clear().type('Project "**project**" has started expiration lead time today.', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NQuestionReviewCreated.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="QuestionReviewCreated"]').clear().type('A QuestionReview was create', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NQuestionReviewCreated.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="QuestionReviewCreated"]').clear().type('A QuestionReview was created', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NProjectCollaborationMessageReceived.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ProjectCollaborationNotification"]').clear().type('**createdby** has sent you collaboration message regarding project "**project**": "**message**"', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NProjectCollaborationMessageReceived.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ProjectCollaborationNotification"]').clear().type('**createdby** has sent you a collaboration message regarding project "**project**": "**message**"', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NQuestionReviewStatusChanged.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="QuestionReviewStatusChange"]').clear().type('The status of the QuestionReview changed', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NQuestionReviewStatusChanged.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="QuestionReviewStatusChange"]').clear().type('The status of the QuestionReview was changed', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NContentCollaborationMessageReceived.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentCollaborationNotification"]').clear().type('**createdby** has sent you collaboration message regarding content "**content**": "**message**"', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NContentCollaborationMessageReceived.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ContentCollaborationNotification"]').clear().type('**createdby** has sent you a collaboration message regarding content "**content**": "**message**"', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NQuestionReviewReviewerChanged.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="QuestionReviewReviewerChange"]').clear().type('The reviewer of the QuestionReview changed', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NQuestionReviewReviewerChanged.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="QuestionReviewReviewerChange"]').clear().type('The reviewer of the QuestionReview was changed', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NProjectPromoted.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ProjectPromotedNotification"]').clear().type('Projecct "**project**" has been promoted to "**current_workflow_state**" is assigned back to you', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NProjectPromoted.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ProjectPromotedNotification"]').clear().type('Project "**project**" has been promoted to "**current_workflow_state**" and is assigned back to you', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NProjectReverted.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ProjectRevertedNotification"]').clear().type('Projecct "**project**" has been reverted "**current_workflow_state**"is assigned back to you', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NProjectReverted.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ProjectRevertedNotification"]').clear().type('Project "**project**" has been reverted to "**current_workflow_state**" and is assigned back to you', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NProjectApproved.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ProjectApprovedNotification"]').clear().type('Projecct "**project**" has been approved and promoted to "**current_workflow_state**" is assigned back to you', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NProjectApproved.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ProjectApprovedNotification"]').clear().type('Project "**project**" has been approved and promoted to "**current_workflow_state**" and is assigned back to you', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NProjectPublished.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ProjectPublishedNotification"]').clear().type('Projecct "**project**" has been published and available to use', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NProjectPublished.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ProjectPublishedNotification"]').clear().type('Project "**project**" has been published and is available to use', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NProjectAssignment.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ProjectAssignmentNotification"]').clear().type('Project "**project**" has been assigned you with note "**note**"', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NProjectAssignment.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ProjectAssignmentNotification"]').clear().type('Project "**project**" has been assigned to you with note "**note**"', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })

                    ///////////////NOTIFICATION EMAIL///////////
                    cy.wait(10000)
                    systemsettingobject.NSubject.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="NotificationsEmailSubject"]').clear().type('RocketDocs', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NSubject.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="NotificationsEmailSubject"]').clear().type('RocketDocs Notifications', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NBody.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="NotificationsEmailBody"]').clear().type('Notifications:<br><br>**notifications**', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NBody.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="NotificationsEmailBody"]').clear().type('Notifications:<br><br>**notifications**', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NNotificationTemplate.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="NotificationsNotificationTemplate"]').clear().type('<div style="border:1px solid #888;padding:10px">**text**<br> <a href="**url**">click here</a></div>', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NNotificationTemplate.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="NotificationsNotificationTemplate"]').clear().type('<div style="border:1px solid #888;padding:10px">**text**<br> <a href="**url**">Click here</a></div>', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NDeterminewhethernotificationsandcontentemailswillbesentornot.then(() => {
                        cy.wait(5000)
                        cy.get('input[name="NotificationsEnabled"]').first().check()
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NDeterminewhethernotificationsandcontentemailswillbesentornot.then(() => {
                        cy.wait(5000)
                        cy.get('input[name="NotificationsEnabled"]').last().check()
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })

                    ///////////////PASSWORD RESET EMAIL/////////
                    cy.wait(10000)
                    systemsettingobject.NPRESubject.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="PasswordResetEmailSubject"]').clear().type('Password reset ', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NPRESubject.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="PasswordResetEmailSubject"]').clear().type('Password reset requested', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NPREBody.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="PasswordResetEmailBody"]').clear().type('<h3>Hi **firstName**,</h3><p>You recently requested to reset your password for your RocketDocs account. Click the button below to reset it.</p><br><br><p><a href="**resetUrl**">Reset Password</a></p><p>Thanks,<br>RocketDocs Team</p>', { timeout: 6000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NPREBody.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="PasswordResetEmailBody"]').clear().type('<h3>Hi **firstName**,</h3><p>You recently requested to reset your password for your RocketDocs account. Click the button below to reset it.</p><br><br><p><a href="**resetUrl**">Reset Password</a></p><p>Thanks,<br>RocketDocs Team</p>', { timeout: 6000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })

                    ///////////////PASSWORD RESET SUCCESS EMAIL////////////
                    cy.wait(10000)
                    systemsettingobject.NPRSESubject.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="PasswordResetSuccessEmailSubject"]').clear().type('Password update', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NPRSESubject.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="PasswordResetSuccessEmailSubject"]').clear().type('Password updated', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NPRSEBody.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="PasswordResetSuccessEmailBody"]').clear().type('Password updated successfull', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NPRSEBody.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="PasswordResetSuccessEmailBody"]').clear().type('Password updated successfully', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })

                    ///////////////PLACEHOLDER/////////////
                    cy.wait(10000)
                    systemsettingobject.NPOpeningTag.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="PlaceholderOpeningTag"]').clear().type('<<<', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NPOpeningTag.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="PlaceholderOpeningTag"]').clear().type('<<', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NPClosingTag.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="PlaceholderClosingTag"]').clear().type('>>>', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NPClosingTag.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="PlaceholderClosingTag"]').clear().type('>>', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })

                    ///////////////RAPID DOCS CONFIGURATION///////////////
                    cy.wait(10000)
                    systemsettingobject.NRDCSubject.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="TemplateEmailSubject"]').clear().type('RocketDocs Template Doc', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NRDCSubject.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="TemplateEmailSubject"]').clear().type('RocketDocs Template Document', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NRDCBody.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="TemplateEmailBody"]').clear().type('Please find attached document(s) generated template "**template**"', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NRDCBody.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="TemplateEmailBody"]').clear().type('Please find attached document(s) generated for template "**template**"', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NRDCEmail.then(() => {
                        cy.wait(5000)
                        cy.get('input[name="RapidDocsEmail"]').first().check()
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NRDCEmail.then(() => {
                        cy.wait(5000)
                        cy.get('input[name="RapidDocsEmail"]').last().check()
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })

                    ///////////////SESSION////////////
                    cy.wait(10000)
                    systemsettingobject.NSRefreshTimeout.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="RefreshTimeout"]').clear().type('2800', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NSRefreshTimeout.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="RefreshTimeout"]').clear().type('2880', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    systemsettingobject.NSExpirationTimeout.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ExpirationTimeout"]').clear().type('250', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    systemsettingobject.NSExpirationTimeout.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="ExpirationTimeout"]').clear().type('300', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })

                    ///////////////SMTP///////////////
                    cy.wait(10000)
                    systemsettingobject.NSMPTServer.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="SMTPServer"]').clear().type('email-smtp.us-east-1.amazonaws.com', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NSMPTPort.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="SMTPPort"]').clear().type('587', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NSMPTUsername.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="SMTPUsername"]').clear().type('AKIA3WNP4WZWLQAT6LQM', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NSMPTFromEmail.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="SMTPFromEmail"]').clear().type('noreply@rocketdocstest.com', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)

                    ///////////////UPDATE USERNAME EMAIL//////////////////
                    systemsettingobject.NUUES.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="UpdateUsernameEmailSubject"]').clear().type('Username and system email update', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NUUES.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="UpdateUsernameEmailSubject"]').clear().type('Username and system email updated', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NUUEB.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="UpdateUsernameEmailBody"]').clear().type('<h3>Hi **firstName**,</h3><p>Your username and system email were recently updated. You are required to reset your password for your RocketDocs account. Click the button below to reset </p><br><br><p><a href="**resetUrl**">Reset Password</a></p><p>Thanks,<br>RocketDocs Team</p>', { timeout: 5000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NUUEB.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="UpdateUsernameEmailBody"]').clear().type('<h3>Hi **firstName**,</h3><p>Your username and system email were recently updated. You are required to reset your password for your RocketDocs account. Click the button below to reset it.</p><br><br><p><a href="**resetUrl**">Reset Password</a></p><p>Thanks,<br>RocketDocs Team</p>', { timeout: 5000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })

                    ///////////////UPDATE USERNAME SUCCESS EMAIL//////////
                    systemsettingobject.NUUSES.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="UpdateUsernameSuccessEmailSubject"]').clear().type('Username and system email changed System Administrator', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NUUSES.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="UpdateUsernameSuccessEmailSubject"]').clear().type('Username and system email changed by System Administrator', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NUUSEB.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="UpdateUsernameSuccessEmailBody"]').clear().type('<p>Your username and system email were recently changed by the System Administrator. You should receive a welcome email at your new email address. Please follow the steps provided to update your RocketDocs account. If you believe you have received this email in error, contact your System Administrator.</p><br><br><p>Thanks,<br>RocketDocs Team</p>', { timeout: 5000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NUUSEB.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="UpdateUsernameSuccessEmailBody"]').clear().type('<p>Your username and system email were recently changed by the System Administrator. You should receive a welcome email at your new email address. Please follow the steps provided to update your RocketDocs account. If you believe you have received this email in error, please contact your System Administrator.</p><br><br><p>Thanks,<br>RocketDocs Team</p>', { timeout: 5000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)

                    ///////////////WELCOME EMAIL///////////
                    systemsettingobject.NWES.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="WelcomeEmailSubject"]').clear().type('Welcome to RocketDocs 2.0', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NWES.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="WelcomeEmailSubject"]').clear().type('Welcome to RocketDocs', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NWEB.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="WelcomeEmailBody"]').clear().type('<h3>Dear **firstName**, </h3>Thank you for registering.  Please <a href="**loginUrl**">click here</a> login. <br><br>', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NWEB.then(() => {
                        cy.wait(5000)
                        cy.get('textarea[name="WelcomeEmailBody"]').clear().type('<h3>Dear **firstName**, </h3>Thank you for registering.  Please <a href="**loginUrl**">click here</a> to login. <br><br>', { timeout: 3000 })
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NWEDeterminewhetheruseremailswillbesentornot.then(() => {
                        cy.wait(5000)
                        cy.get('input[name="UserEmailsEnabled"]').first().check()
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                    systemsettingobject.NWEDeterminewhetheruseremailswillbesentornot.then(() => {
                        cy.wait(5000)
                        cy.get('input[name="UserEmailsEnabled"]').last().check()
                        cy.get('button[type="button"]').contains('Save').click({ force: true })
                    })
                    cy.wait(10000)
                })
            })
        })
    })

    xit('Verify External Files', () => {   // Required BA for this acpected behavior
        cy.wait(5000)
        cy.get(controlCenter.navigateControlCenterOptions).contains('Administration', { timeout: 3000 }).click({ force: true }).then(() => {
            cy.get(':nth-child(7) > .MuiButtonBase-root').click({ force: true }).then(() => {
                cy.wait(5000)
                cy.get('img[alt="Add"]').click().then(() => {
                    cy.wait(5000)
                    const fixtureFile = 'rocketdocsJPG.jpg';
                    cy.get('input[name="file"]').attachFile(fixtureFile)
                    cy.wait(5000)
                    cy.get('input[name="title"]').type('docx project')
                    cy.get('textarea[name="description"]').type('test docx file')
                    cy.get('.MuiInputBase-root-664 > #mui-component-select-category').click().then(() => {
                        cy.get('[data-value="5"]').trigger('click')
                    })
                    cy.get('.MuiBox-root > form').contains('Add').click({ timeout: 10000 })
                    cy.wait(30000)
                })
            })
        })
    })

    it('Verify Document parse within project', () => {
        const createproject = new CreateNewProject()
        expect(cy)
            .property('xpath')
            .to.be.a('function')
        cy.wait(5000)
        cy.get(controlCenter.navigateControlCenterOptions).contains('Projects').click({ force: true }).then(() => {
            cy.wait(5000)
            cy.get('img[alt="Add"]').then($button => {
                if ($button.is(':visible')) {
                }
                createproject.createNewProjectOnProject()
                cy.wait(10000)
                cy.xpath('//p[contains(text(),"Shahed TT1")]').should(
                    "have.text",
                    "Shahed TT1"
                );
                cy.xpath('//p[contains(text(),"Shahed TT1")]').click().then(() => {
                    cy.wait(10000)
                    cy.get('img[alt="Parse Document"]').first().click({ force: true }).then(() => {
                        cy.get('input[type="checkbox"]').first().check({ force: true })
                        cy.xpath('//span[contains(text(),"Parse")]').click().then(() => {
                            cy.wait(5000)
                            // Parse Document result assertion
                            cy.get('.ParseReport__QuestionText-sc-1lm8cnz-2').should("have.text", "54 Questions identified in the document")
                            cy.get('.ParseReport__MatchText-sc-1lm8cnz-3').should("have.text", "0 Questions with answer matches")
                            cy.get('.ParseReport__InsertedText-sc-1lm8cnz-4').should("have.text", "0 Answers inserted into the document")
                        })
                        cy.get(':nth-child(1) > :nth-child(2) > .MuiIconButton-label > .MuiSvgIcon-root').last().click({ force: true })
                        cy.wait(5000)
                    })
                })
            })
            // Removed New project
            cy.get('.MuiListItemText-root > .MuiTypography-root').first().click({ force: true }).then(() => {
                cy.wait(5000)
                cy.get('.MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-paddingCheckbox > .MuiButtonBase-root > .MuiIconButton-label').click({ multiple: true }).then(() => {
                    cy.get('.MuiButton-containedSizeSmall').click().then(() => {
                        cy.get('#split-button-menu > [tabindex="0"]').contains('Archive').click({ force: true })
                    })
                })
                // Verify project is no longer exist
                cy.wait(5000)
                cy.contains('Shahed TT1').should('not.exist')
            })
        })
    })
})
