export default class SystemSettingPage {

    // Content Email
    contentEmailSubjectEdit() {
        return '/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/button[1]/span[1]/div[1]';
    }

    contentEmailBodyEdit() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[3]'
    }

    // Content Export Email
    contentExportEmailSubjectEdit() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/button[1]/span[1]/div[1]'
    }

    contentExportEmailBodyEdit() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[2]/td[3]/button[1]/span[1]/div[1]'
    }

    // Content Import Email
    contentImportEmailSubjectEdit() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[3]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/button[1]/span[1]/div[1]'
    }

    contentImportEmailBodyEdit() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[3]/div[2]/table[1]/tbody[1]/tr[2]/td[3]/button[1]/span[1]/div[1]'
    }

    // Content Search
    contentSearchFieldWeightEdit() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[4]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/button[1]/span[1]/div[1]'
    }

    contentSearchSlopEdit() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[4]/div[2]/table[1]/tbody[1]/tr[2]/td[3]/button[1]/span[1]/div[1]'
    }

    contentSearchMinShouldMatchEdit() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[4]/div[2]/table[1]/tbody[1]/tr[3]/td[3]/button[1]/span[1]/div[1]'
    }

    // Expiration Configuration
    projectExpiryLeadTimeEdit() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[5]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/button[1]/span[1]/div[1]'
    }

    contentExpiryLeadTimeEdit() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[5]/div[2]/table[1]/tbody[1]/tr[2]/td[3]/button[1]'
    }

    // Language
    language() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[6]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/button[1]/span[1]/div[1]'
    }

    // Migrations
    migrations() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[7]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/button[1]'
    }

    // Notification
    nContentAssignment() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[8]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/button[1]/span[1]/div[1]'
    }
    nAddedToProjectTeam() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[8]/div[2]/table[1]/tbody[1]/tr[2]/td[3]/button[1]/span[1]/div[1]'
    }
    nQuestionAssignment() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[8]/div[2]/table[1]/tbody[1]/tr[3]/td[3]/button[1]/span[1]/div[1]'
    }
    nQuestionAdded() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[8]/div[2]/table[1]/tbody[1]/tr[4]/td[3]/button[1]/span[1]/div[1]'
    }
    nTaskAssignment() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[8]/div[2]/table[1]/tbody[1]/tr[5]/td[3]/button[1]'
    }
    nTaskCompleted() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[8]/div[2]/table[1]/tbody[1]/tr[6]/td[3]/button[1]/span[1]/div[1]'
    }
    nProjectPastDue() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[8]/div[2]/table[1]/tbody[1]/tr[7]/td[3]/button[1]'
    }
    nContentAssignmentPastDue() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[8]/div[2]/table[1]/tbody[1]/tr[8]/td[3]/button[1]'
    }
    nQuestionPastDue() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[8]/div[2]/table[1]/tbody[1]/tr[9]/td[3]/button[1]/span[1]/div[1]'
    }
    nTaskPastDue() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[8]/div[2]/table[1]/tbody[1]/tr[10]/td[3]/button[1]'
    }
    nTitleTextSize() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[8]/div[2]/table[1]/tbody[1]/tr[11]/td[3]/button[1]/span[1]/div[1]'
    }
    nDailyBatchEmailTimeHours() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[8]/div[2]/table[1]/tbody[1]/tr[12]/td[3]/button[1]/span[1]/div[1]'
    }
    nDailyBatchEmailTimeMinutes() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[8]/div[2]/table[1]/tbody[1]/tr[13]/td[3]/button[1]/span[1]/div[1]'
    }
    nDailyBatchEmailTimeSeconds() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[8]/div[2]/table[1]/tbody[1]/tr[14]/td[3]/button[1]/span[1]/div[1]'
    }
    nContentPromoted() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[8]/div[2]/table[1]/tbody[1]/tr[15]/td[3]/button[1]/span[1]/div[1]'
    }
    nContentReverted() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[8]/div[2]/table[1]/tbody[1]/tr[16]/td[3]/button[1]/span[1]/div[1]'
    }
    nContentApproved() {
        return '//tbody/tr[17]/td[3]/button[1]/span[1]/div[1]'
    }
    nContentPublished() {
        return '//tbody/tr[18]/td[3]/button[1]/span[1]/div[1]'
    }
    nProjectExpiry() {
        return '//tbody/tr[19]/td[3]/button[1]/span[1]/div[1]'
    }
    nProjectExpiryLeadTime() {
        return '//tbody/tr[20]/td[3]/button[1]/span[1]/div[1]'
    }
    nQuestionReviewCreated() {
        return '//tbody/tr[21]/td[3]/button[1]/span[1]/div[1]'
    }
    nProjectCollaborationMessageReceived() {
        return '//tbody/tr[22]/td[3]/button[1]/span[1]/div[1]'
    }
    nQuestionReviewStatusChanged() {
        return '//tbody/tr[23]/td[3]/button[1]/span[1]/div[1]'
    }
    nContentCollaborationMessageReceived() {
        return '//tbody/tr[24]/td[3]/button[1]/span[1]/div[1]'
    }
    nQuestionReviewReviewerChanged() {
        return '//tbody/tr[25]/td[3]/button[1]/span[1]/div[1]'
    }
    nProjecctPromoted() {
        return '//tbody/tr[26]/td[3]/button[1]/span[1]/div[1]'
    }
    nProjecctReverted() {
        return '//tbody/tr[27]/td[3]/button[1]/span[1]/div[1]'
    }
    nProjecctApproved() {
        return '//tbody/tr[28]/td[3]/button[1]/span[1]/div[1]'
    }
    nProjecctPublished() {
        return '//tbody/tr[29]/td[3]/button[1]/span[1]/div[1]'
    }
    nProjectAssignment() {
        return '//tbody/tr[30]/td[3]/button[1]/span[1]/div[1]'
    }

    // Notification Email
    nSubject() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[9]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/button[1]/span[1]/div[1]'
    }
    nBody() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[9]/div[2]/table[1]/tbody[1]/tr[2]/td[3]/button[1]/span[1]/div[1]'
    }
    nNotificationTemplate() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[9]/div[2]/table[1]/tbody[1]/tr[3]/td[3]/button[1]/span[1]/div[1]'
    }
    nDeterminewhethernotificationsandcontentemailswillbesentornot() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[9]/div[2]/table[1]/tbody[1]/tr[4]/td[3]/button[1]/span[1]/div[1]'
    }

    // Password Reset Email
    PRESubject() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[10]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/button[1]/span[1]/div[1]'
    }
    PREBody() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[10]/div[2]/table[1]/tbody[1]/tr[2]/td[3]/button[1]/span[1]/div[1]'
    }

    // Password Reset Success Email
    PRSESubject() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[11]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/button[1]/span[1]/div[1]'
    }
    PRSEBody() {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[11]/div[2]/table[1]/tbody[1]/tr[2]/td[3]/button[1]/span[1]/div[1]'
    }

    // Placeholder
    POpeningTag () {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[12]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/button[1]/span[1]/div[1]'
    }

    PClosingTag () {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[12]/div[2]/table[1]/tbody[1]/tr[2]/td[3]/button[1]/span[1]/div[1]'
    }

    // RapidDocs Configuration
    RDCSubject () {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[13]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/button[1]/span[1]/div[1]'
    }
    RDCBody () {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[13]/div[2]/table[1]/tbody[1]/tr[2]/td[3]/button[1]/span[1]/div[1]'
    }
    RDCEmail () {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[13]/div[2]/table[1]/tbody[1]/tr[3]/td[3]/button[1]/span[1]/div[1]'
    }

    // Session
    SRefreshTimeout () {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[14]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/button[1]/span[1]/div[1]'
    }
    SExpirationTimeout () {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[14]/div[2]/table[1]/tbody[1]/tr[2]/td[3]/button[1]/span[1]/div[1]'
    }

    //SMTP
    SMPTServer () {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[15]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/button[1]/span[1]/div[1]'
    }
    SMPTPort () {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[15]/div[2]/table[1]/tbody[1]/tr[2]/td[3]/button[1]'
    }
    SMPTUsername () {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[15]/div[2]/table[1]/tbody[1]/tr[3]/td[3]/button[1]/span[1]/div[1]'
    }
    SMPTPassword () {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[15]/div[2]/table[1]/tbody[1]/tr[4]/td[3]/button[1]/span[1]/div[1]'
    }
    SMPTFromEmail () {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[15]/div[2]/table[1]/tbody[1]/tr[5]/td[3]/button[1]/span[1]/div[1]'
    }

    // Update Username Email
    UUES () {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[18]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/button[1]/span[1]/div[1]'
    }
    UUEB () {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[18]/div[2]/table[1]/tbody[1]/tr[2]/td[3]/button[1]/span[1]/div[1]'
    }

    // Update Username Sucess Email
    UUSES () {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[19]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/button[1]/span[1]/div[1]'
    }
    UUSEB () {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[19]/div[2]/table[1]/tbody[1]/tr[2]/td[3]/button[1]/span[1]/div[1]'
    }

    // Welcome Email
    WES () {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[20]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/button[1]/span[1]/div[1]'
    }
    WEB () {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[20]/div[2]/table[1]/tbody[1]/tr[2]/td[3]/button[1]/span[1]/div[1]'
    }
    WEDeterminewhetheruseremailswillbesentornot () {
        return '//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/article[1]/div[2]/div[20]/div[2]/table[1]/tbody[1]/tr[3]/td[3]/button[1]/span[1]/div[1]'
    }





















































}