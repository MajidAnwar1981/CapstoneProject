import OktaLoginPage from "../oktaLoginPage";


const oktaLogin = new OktaLoginPage();

class OktaCredentital {
    
    get LoginOrganization(){
        return cy.get(oktaLogin.loginYourOrganization()).contains('Login through your organization').click();
    }
    get UserName() {
        return cy.get(oktaLogin.userNameInput()).type('mshahed@rocketdocs.com');
    }
    get Password() {
        return cy.get(oktaLogin.passwordInput()).type('FXsr1987*');
    }
    get SignIn() {
        return cy.get(oktaLogin.signInbutton()).click();
    }
}

const oktacredentital = new OktaCredentital()

export default oktacredentital