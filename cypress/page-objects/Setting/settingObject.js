import SystemSettingPage from "../workflowObject/systemSetting";

const setting = new SystemSettingPage

class SettingObject {

    // Content Email
    get CES() {
        return cy.xpath(setting.contentEmailSubjectEdit()).click()
    }

    get CEB() {
        return cy.xpath(setting.contentEmailBodyEdit()).click()
    }

    // Content Export Email
    get CEES() {
        return cy.xpath(setting.contentExportEmailSubjectEdit()).click()
    }

    get CEEB() {
        return cy.xpath(setting.contentExportEmailBodyEdit()).click()
    }

    // Content import Email
    get CIES() {
        return cy.xpath(setting.contentImportEmailSubjectEdit()).click()
    }

    get CIEB() {
        return cy.xpath(setting.contentImportEmailBodyEdit()).click()
    }

    // Content Search
    get CSFieldWeight() {
        return cy.xpath(setting.contentSearchFieldWeightEdit()).click()
    }

    get CSSlop() {
        return cy.xpath(setting.contentSearchSlopEdit()).click()
    }


    get CSMinShouldMatch() {
        return cy.xpath(setting.contentSearchMinShouldMatchEdit()).click()
    }

    // Expiration Configuration
    get ECPELT() {
        return cy.xpath(setting.projectExpiryLeadTimeEdit()).click()
    }

    get ECCELT() {
        return cy.xpath(setting.contentExpiryLeadTimeEdit()).click()
    }

    // Language
    get Laguage() {
        return cy.xpath(setting.language()).click()
    }

    // Migrations
    get Migrations() {
        return cy.xpath(setting.migrations()).click()
    }

    // Notification
    get NContentAssignment() {
        return cy.xpath(setting.nContentAssignment()).click()
    }
    get NAddedToProjectTeam() {
        return cy.xpath(setting.nAddedToProjectTeam()).click()
    }
    get NQuestionAssignment() {
        return cy.xpath(setting.nQuestionAssignment()).click()
    }
    get NQuestionAdded() {
        return cy.xpath(setting.nQuestionAdded()).click()
    }
    get NTaskAssignment() {
        return cy.xpath(setting.nTaskAssignment()).click()
    }
    get NTaskCompleted() {
        return cy.xpath(setting.nTaskCompleted()).click()
    }
    get NProjectPastDue() {
        return cy.xpath(setting.nProjectPastDue()).click()
    }
    get NContentAssignmentPastDue() {
        return cy.xpath(setting.nContentAssignmentPastDue()).click()
    }
    get NQuestionPastDue() {
        return cy.xpath(setting.nQuestionPastDue()).click()
    }
    get NTaskPastDue() {
        return cy.xpath(setting.nTaskPastDue()).click()
    }
    get NTitleTextSize() {
        return cy.xpath(setting.nTitleTextSize()).click()
    }
    get NDailyBatchEmailTimeHours() {
        return cy.xpath(setting.nDailyBatchEmailTimeHours()).click()
    }
    get NDailyBatchEmailTimeMinutes() {
        return cy.xpath(setting.nDailyBatchEmailTimeMinutes()).click()
    }
    get NDailyBatchEmailTimeSeconds() {
        return cy.xpath(setting.nDailyBatchEmailTimeSeconds()).click()
    }
    get NContentPromoted() {
        return cy.xpath(setting.nContentPromoted()).click()
    }
    get NContentReverted() {
        return cy.xpath(setting.nContentReverted()).click()
    }
    get NContentApproved() {
        return cy.xpath(setting.nContentApproved()).click()
    }
    get NContentPublished() {
        return cy.xpath(setting.nContentPublished()).click()
    }
    get NProjectExpiry() {
        return cy.xpath(setting.nProjectExpiry()).click()
    }
    get NProjectExpiryLeadTime() {
        return cy.xpath(setting.nProjectExpiryLeadTime()).click()
    }
    get NQuestionReviewCreated() {
        return cy.xpath(setting.nQuestionReviewCreated()).click()
    }
    get NProjectCollaborationMessageReceived() {
        return cy.xpath(setting.nProjectCollaborationMessageReceived()).click()
    }
    get NQuestionReviewStatusChanged() {
        return cy.xpath(setting.nQuestionReviewStatusChanged()).click()
    }
    get NContentCollaborationMessageReceived() {
        return cy.xpath(setting.nContentCollaborationMessageReceived()).click()
    }
    get NQuestionReviewReviewerChanged() {
        return cy.xpath(setting.nQuestionReviewReviewerChanged()).click()
    }
    get NProjectPromoted() {
        return cy.xpath(setting.nProjecctPromoted()).click()
    }
    get NProjectReverted() {
        return cy.xpath(setting.nProjecctReverted()).click()
    }
    get NProjectApproved() {
        return cy.xpath(setting.nProjecctApproved()).click()
    }
    get NProjectPublished() {
        return cy.xpath(setting.nProjecctPublished()).click()
    }
    get NProjectAssignment() {
        return cy.xpath(setting.nProjectAssignment()).click()
    }

    // Notification Email
    get NSubject() {
        return cy.xpath(setting.nSubject()).click()
    }
    get NBody() {
        return cy.xpath(setting.nBody()).click()
    }
    get NNotificationTemplate() {
        return cy.xpath(setting.nNotificationTemplate()).click()
    }
    get NDeterminewhethernotificationsandcontentemailswillbesentornot() {
        return cy.xpath(setting.nDeterminewhethernotificationsandcontentemailswillbesentornot()).click()
    }

    // Password Reset Email
    get NPRESubject() {
        return cy.xpath(setting.PRESubject()).click()
    }
    get NPREBody() {
        return cy.xpath(setting.PREBody()).click()
    }

    // Password Reset Success Email
    get NPRSESubject() {
        return cy.xpath(setting.PRSESubject()).click()
    }
    get NPRSEBody() {
        return cy.xpath(setting.PRSEBody()).click()
    }

    // Placeholder
    get NPOpeningTag() {
        return cy.xpath(setting.POpeningTag()).click()
    }
    get NPClosingTag() {
        return cy.xpath(setting.PClosingTag()).click()
    }

    // RapidDocs Configuration 
    get NRDCSubject() {
        return cy.xpath(setting.RDCSubject()).click()
    }
    get NRDCBody() {
        return cy.xpath(setting.RDCBody()).click()
    }
    get NRDCEmail() {
        return cy.xpath(setting.RDCEmail()).click()
    }

    // Session
    get NSRefreshTimeout() {
        return cy.xpath(setting.SRefreshTimeout()).click()
    }
    get NSExpirationTimeout() {
        return cy.xpath(setting.SExpirationTimeout()).click()
    }

    //SMTP
    get NSMPTServer() {
        return cy.xpath(setting.SMPTServer()).click()
    }
    get NSMPTPort() {
        return cy.xpath(setting.SMPTPort()).click()
    }
    get NSMPTUsername() {
        return cy.xpath(setting.SMPTUsername()).click()
    }
    get NSMPTPassword() {
        return cy.xpath(setting.SMPTPassword()).click()
    }
    get NSMPTFromEmail() {
        return cy.xpath(setting.SMPTFromEmail()).click()
    }

    // Update Username Email
    get NUUES() {
        return cy.xpath(setting.UUES()).click()
    }
    get NUUEB() {
        return cy.xpath(setting.UUEB()).click()
    }

    // Update Username Success Email
    get NUUSES () {
        return cy.xpath(setting.UUSES()).click()
    }
    get NUUSEB () {
        return cy.xpath(setting.UUSEB()).click()
    }

    // Wellcome Email
    get NWES () {
        return cy.xpath(setting.WES()).click()
    }
    get NWEB () {
        return cy.xpath(setting.WEB()).click()
    }
    get NWEDeterminewhetheruseremailswillbesentornot () {
        return cy.xpath(setting.WEDeterminewhetheruseremailswillbesentornot()).click()
    }
}

const systemsettingobject = new SettingObject()

export default systemsettingobject